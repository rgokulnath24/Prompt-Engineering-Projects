# Contact Form (AI-Prompt Engineered)

This project showcases a fully responsive contact form generated using a single AI prompt. It validates inputs using JavaScript, PHP, and stores data in MySQL with SweetAlert for user feedback.

## 🔧 Technologies Used
- HTML, CSS (Bootstrap 5)
- JavaScript
- PHP (Backend validation + MySQL insertion)
- SweetAlert2 for alerts
- MySQL for database

## 🧪 Features
- Frontend + Backend validations
- No duplicate names allowed
- Responsive design (mobile/tablet/desktop)
- Clean UI using Bootstrap 5
- AI-generated with prompt engineering


## 🧾 Prompt Used
See: [`prompt.txt`](./prompt.txt)

## ⏱️ Estimated Time to Build
- Prompt creation: 10–15 mins
- Code generation: 2–3 mins using ChatGPT
- Testing & adjustments: 20–30 mins
- Total Time: ~45 minutes

## 📸 Screenshots
| Desktop View                                                                                                                | Mobile View                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <img width="300" height="200" alt="image" src="https://github.com/user-attachments/assets/f1cae4aa-8097-4905-a0b6-1d4a02d71d5e" />| <img width="300" height="200" alt="image" src="https://github.com/user-attachments/assets/a1b56f17-02c4-4028-a0af-d0c638281395" />
 


## 📂 Database Structure

Table: `contacts`

 | Field        | Type         | Description              |
 |--------------|--------------|--------------------------|
 | id           | INT (auto)   | Primary key              |
 | name         | VARCHAR(100) | Unique                   |
 | email        | VARCHAR(100) | NOT NULL                 |
 | phone        | VARCHAR(15)  | NOT NULL                 |
 | dob          | DATE         | NOT NULL                 |
 | submitted_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP|

## 🧠 Prompt Type
- Type: Full-stack Functional Prompt
- Use Case: One-shot AI-assisted Code Generation

