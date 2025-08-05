# 📝 To-Do List Web App (PHP + MySQL + Bootstrap)

A simple, clean and responsive To-Do List web application built using PHP, MySQL, and Bootstrap 5. This app allows users to manage daily tasks efficiently — add, complete, or delete tasks easily with a modern UI.

## 🚀 Features

- ✅ Add tasks with a title
- 📋 Display all tasks with completion status
- 🗑️ Delete tasks
- 📦 Tasks stored in a MySQL database
- 📱 Mobile responsive design using Bootstrap 5
- 💡 Task title wraps properly on small screens
- 💾 Secure DB connection and prepared queries

## 🛠️ Tech Stack

- PHP (Core)
- MySQL (Database)
- Bootstrap 5 (Frontend)
- HTML, CSS, JavaScript

## 📁 Project Structure

```
📂 todo-app/
├── index.php
├── add_task.php
├── delete_task.php
├── update_task.php
├── includes/
│   ├── db.php
│   ├── header.php
│   └── footer.php
├── css/
│   └── styles.css
├── js/
│   └── scripts.js (optional)
└── README.md
```

## 🧠 How It Works

- The main task list is rendered from the database.
- Each task includes a checkbox to toggle its completed state.
- Tasks can be added or removed using form inputs.
- Long task titles are automatically wrapped using responsive CSS.


## 🗄️ Database Structure

Table: `tasks`

```sql
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  is_completed BOOLEAN DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Sample Insert:

```sql
INSERT INTO tasks (title, is_completed) VALUES ('Sample Task 1', 0);
```

## 📸 Screenshots

![Todo UI](screenshots/screenshot1.png)
![Responsive View](screenshots/screenshot2.png)

## 🧠 Prompt Engineering Info

This project was built using a prompt engineered for AI (ChatGPT 4). Prompt focused on creating a structured, full-stack CRUD web app with proper responsiveness and clean code organization.

## 📌 Tags (Add to GitHub repo)

`#PHP` `#MySQL` `#Bootstrap` `#ToDoApp` `#CRUD` `#PromptEngineering` `#FullStack` `#BeginnerProject`

## 🤝 Contributing

Pull requests are welcome! Feel free to submit issues or suggestions.

## 📃 License

This project is open-sourced under the MIT License.

