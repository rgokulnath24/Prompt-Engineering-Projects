#  Feedback Submission Web App (AI-Prompt Engineered)

A responsive feedback submission form built using PHP, MySQL, Bootstrap 5, and JavaScript. The form includes validation (client-side and server-side), data storage in MySQL, and real-time name-duplicate checks — all generated with a carefully crafted AI prompt.

---

## 🔧 Technologies Used

- HTML & CSS (with Bootstrap 5)
- JavaScript (client-side validation)
- PHP (server-side form handling)
- MySQL (database storage)
- AI-Prompt Engineered (ChatGPT)

---

## 🧪 Features

- ✅ Submit feedback with name, email, rating, and comments
- 🔒 Client-side JavaScript validation:
  - Name accepts only letters and a single space between words
  - Email format validation
  - Phone number allows only digits
  - Rating between 1 to 5
- 🔍 Real-time duplicate name check using AJAX
- 📦 Stores feedback into MySQL database
- 📱 Fully responsive design
- 🧼 Clean UI with Bootstrap styling
- 🧠 AI-generated structure & code separation

---

## 🧾 Prompt Used
See: [`prompt.txt`](./prompt.txt)

## ⏱️ Estimated Time to Build

- Prompt creation: 10–15 mins  
- Code generation: 2–3 mins using ChatGPT  
- Testing & adjustments: 20–30 mins  
- Total Time: ~45 minutes

## 📸 Screenshots
| Desktop View                                                                                                              
<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/8219f1b3-dbce-4b1f-a406-149388c770ea" />

## 📂 Database Structure

Table: feedback

| Field    | Type             | Description                                |
|----------|------------------|--------------------------------------------|
| id       | INT (auto)       | Primary Key                                |
| name     | VARCHAR(20)      | User's name (only letters, 1 space allowed)|
| email    | VARCHAR(30)      | Email address                              |
| rating   | INT              | Rating (1 to 5)                            |
| comments | TEXT             | Feedback text                              |

SQL:
```sql
CREATE TABLE feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL,
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comments TEXT NOT NULL
);
