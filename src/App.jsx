import './App.css'
import PollWidget from './PollWidget';

function App() {

  const pollProps = {
    pollId: "poll1",
    question: "How do you feel today?",
    options: [
        "Brilliant! I have so much energy",
        "Always can be worse.",
        "Please, end my misery."
    ]
};

  return (
    <PollWidget pollId={pollProps.pollId} question={pollProps.question} options={pollProps.options} />
  )
}

export default App
