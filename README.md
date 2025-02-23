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
https://github.com/gavandivya/poll-demo.git
cd poll-demo
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Development Server**
```sh
npm run dev
```
This will start the app at `http://localhost:5173/`.

![image](https://github.com/user-attachments/assets/1ed734be-fda3-4b2f-b207-adf9dbb73e74)


### **4️⃣ Build for Production**
To generate a **minified version** of the poll widget, run:
```sh
npm run build
```
This will create a `build/` folder with optimized assets.

---

## 📌 Embedding the Widget in an HTML Page
Once the build is ready, you can embed the poll widget in any HTML page as follows:

### **Create an HTML Page & Include the Script**

I have added 2 files poll.html and poll2.html which has its own set of options you can have your more html files for testing other options

poll.html

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

![image](https://github.com/user-attachments/assets/c51a82a7-e3f4-42e8-b6c8-579b07379414)

poll2.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedded Poll Widget for Opinary</title>
    <script type="module" defer src="dist/assets/index-BAhiqljR.js"></script>
    <link rel="stylesheet" href="dist/assets/index-C5EU6OpA.css">
</head>
<body>

    <div style="width: 50%;margin:auto" id="poll-container"></div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            PollWidget.render({
                elementId: "poll-container",
                pollId: "poll2",
                question: "How you like the Opinary test:",
                options: ["It was great and so challenging.", "Not bad, but you can improve.", "It was a nightmare, never again."]
            });
        });
    </script>
</body>
</html>

```
![image](https://github.com/user-attachments/assets/b1e88634-9a4b-4c58-adf1-df563fcc037f)


### **3️⃣ Open the HTML File in a Browser using Live Server available in vs code**

so it will open on http://127.0.0.1:5500/poll.html and http://127.0.0.1:5500/poll2.html and this have its own polls with set of options provided in html with each storing it's votes in localstorage.

## 🧪 Running Unit Tests
This project includes unit tests for the poll widget. To run the tests, use:
```sh
npm test
```
Make sure `jest` and `react-testing-library` are installed.


