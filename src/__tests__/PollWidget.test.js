import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PollWidget from "../PollWidget"; // Adjust path if needed

describe("PollWidget Component", () => {
  const pollProps = {
    pollId: "testPoll",
    question: "How do you feel today?",
    options: ["Great", "Okay", "Bad"],
  };

  beforeEach(() => {
    localStorage.clear(); // Reset localStorage before each test
  });

  test("renders poll question", () => {
    render(<PollWidget {...pollProps} />);
    expect(screen.getByText(pollProps.question)).toBeInTheDocument();
  });

  test("renders all poll options", () => {
    render(<PollWidget {...pollProps} />);
    pollProps.options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test("allows user to vote and updates percentage", () => {
    render(<PollWidget {...pollProps} />);
    
    const optionToVote = screen.getByText("Great");
    fireEvent.click(optionToVote);

    // Check if the percentage appears after voting
    expect(screen.getByText(/100%/)).toBeInTheDocument();
  });

  test("saves votes to localStorage", () => {
    render(<PollWidget {...pollProps} />);
    
    fireEvent.click(screen.getByText("Okay"));

    // Check if localStorage contains the votes
    const savedVotes = JSON.parse(localStorage.getItem("poll_testPoll_votes"));
    expect(savedVotes).toEqual([0, 1, 0]); // Only "Okay" should have 1 vote
  });

  test("prevents multiple votes in a single session", () => {
    render(<PollWidget {...pollProps} />);
    
    const optionToVote = screen.getByText("Bad");
    fireEvent.click(optionToVote);
    fireEvent.click(optionToVote); // Trying to vote again

    // Ensure that the votes don't increment again
    expect(screen.getByText(/100%/)).toBeInTheDocument();
  });
});
