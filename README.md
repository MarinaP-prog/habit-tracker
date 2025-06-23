# 📘 Habit List App

A lightweight habit-tracking application built with vanilla JavaScript, HTML, and CSS. It allows users to create
and delete habits easily, with persistent storage in the browser.

## 🌐 Live Demo

[🔗 View the App Online](https://marinap-prog.github.io/habit-tracker/)

## 🛠️ Technologies Used

- 🟢 **HTML, CSS** – layout structure and base styling
- 🟢 **JavaScript (ES6)** – dynamic DOM manipulation and habit logic
- 🟢 **LocalStorage** – saves habits in browser memory between sessions

## ✨ Features

- ✅ **Add a habit** – enter a habit and date to create a new item
- ✅ **Delete a habit** – remove a habit by clicking the "Delete" button
- ✅ **Real-time UI updates** – changes instantly reflected in the interface
- ✅ **Persistent storage** – habits are saved in localStorage and restored on reload

## 📂 Folder Structure

```
habit-list-app/
│
├── index.html           # Main HTML structure
├── style.css            # App styling
├── index.js             # Entry point logic
│
├── components/          # UI components
│   ├── habitList.js
│   └── habitItem.js
│
├── utils/               # Helper functions
│   ├── habitUtils.js
│   └── idGenerator.js
│
└── README.md            # Project documentation
```

🚀 Possible Future Improvements
• Filter by date or category
• Edit a habit
• Add progress tracking