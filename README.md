# Embed Poll Widget

## 📌 Overview
This is a simple and customizable **React-based poll widget** that can be embedded into any HTML page without using iframes. The poll supports configurable questions, stores votes in **localStorage**, and displays results with an attractive **speedometer-style UI** using **Tailwind CSS**.

---

## 🚀 Features
- 📊 **Customizable Questions & Options**
- 💾 **Stores Votes in Local Storage** (no backend required)
- 🎨 **Attractive Speedometer-Style UI** with animations
- 🔄 **Responsive Design** using Tailwind CSS
- ⚡ **Multiple Polls on a Page** (but prevents duplicate polls)
- ✅ **Unit Tested**
- 📜 **Easy to Embed in Any HTML Page**

---

## 🛠️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/poll-widget.git
cd poll-widget
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Development Server**
```sh
npm start
```
This will start the app at `http://localhost:3000/`.

### **4️⃣ Build for Production**
To generate a **minified version** of the poll widget, run:
```sh
npm run build
```
This will create a `build/` folder with optimized assets.

---

## 📌 Embedding the Widget in an HTML Page
Once the build is ready, you can embed the poll widget in any HTML page as follows:

### **1️⃣ Move the `build/` Folder to Your Server**
After running `npm run build`, copy the `build/` folder to your desired location.

### **2️⃣ Create an HTML Page & Include the Script**

I have added 2 files poll.html and poll2.html which has its own set of options
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poll Widget</title>
    <script type="module" defer src="dist/assets/index-BAhiqljR.js"></script>
    <link rel="stylesheet" href="dist/assets/index-C5EU6OpA.css">
</head>
<body>

    <div style="width: 50%;margin:auto" id="poll-container"></div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            // Now PollWidget is globally available and can be used here
            PollWidget.render({
                elementId: "poll-container",
                pollId: "poll1",
                question: "How do you feel today?",
                options: [
                "Brilliant! I have so much energy",
                "Always can be worse.",
                "Please, end my misery."
                ]            
        });
        });
    </script>
</body>
</html>

```

### **3️⃣ Open the HTML File in a Browser**
Simply double-click the `index.html` file or serve it using:
```sh
npx serve -s build
```
Then open `http://localhost:3000` in your browser.

---

## 🛠️ Configuration
The widget reads configuration from **data attributes** on the `#root` element:
```html
<div id="root" data-config='{"pollId": "1", "question": "Your question here", "options": ["Option 1", "Option 2", "Option 3"]}'></div>
```

### **Available Configurations:**
| Attribute    | Type   | Description |
|-------------|--------|-------------|
| `pollId`    | String | Unique identifier for the poll |
| `question`  | String | The poll question |
| `options`   | Array  | List of answer choices |

---

## 🧪 Running Unit Tests
This project includes unit tests for the poll widget. To run the tests, use:
```sh
npm test
```
Make sure `jest` and `react-testing-library` are installed.


## 📝 Author
Developed by **Divya Gavandi**

For any issues or improvements, feel free to open an **issue** or **pull request**! 🎉

