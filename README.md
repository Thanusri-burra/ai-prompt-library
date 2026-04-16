# AI Prompt Library

A full-stack web application to manage AI Image Generation Prompts.  
Users can create prompts, view all prompts, and track how many times each prompt is viewed using Redis.

---

## 🚀 Features

- View all prompts
- Add new prompts with validation
- View prompt details
- Live view counter using Redis
- Clean API design with Django
- Angular frontend with routing

---

## 🛠 Tech Stack

### Frontend
- Angular (v14+)
- TypeScript
- Reactive Forms

### Backend
- Django (Python)
- REST APIs (without DRF)

### Database
- SQLite (default Django DB)

### Cache
- Redis (for view count tracking)

---

## 📂 Project Structure

ai-prompt-library/
│
├── backend/ # Django backend
├── frontend/ # Angular frontend
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <https://github.com/Thanusri-burra/ai-prompt-library.git>
cd ai-prompt-library

2️⃣ Backend Setup (Django)
cd backend

pip install -r requirements.txt   # (or install django manually if not present)

python manage.py migrate
python manage.py runserver
Backend runs on:

http://127.0.0.1:8000/
3️⃣ Start Redis (Required for View Count)

If Docker is installed:

docker run -d -p 6379:6379 redis
4️⃣ Frontend Setup (Angular)
cd frontend

npm install
ng serve

Frontend runs on:

http://localhost:4200/
🔗 API Endpoints
Method	Endpoint	Description
GET	/api/prompts/	Get all prompts
POST	/api/prompts/	Create new prompt
GET	/api/prompts/:id/	Get single prompt + view count
🧠 Redis Integration
View count is stored in Redis
Each time a prompt is opened, count increments
Redis acts as the source of truth for views
📝 Validation Rules
Title: Minimum 3 characters
Content: Minimum 20 characters
Complexity: Between 1 and 10
📸 Screens
Add Prompt Form
<img width="1915" height="837" alt="Screenshot 2026-04-17 020531" src="https://github.com/user-attachments/assets/71909a59-6ec9-4bba-9f4c-09b10711bef6" />
<img width="1920" height="737" alt="Screenshot 2026-04-17 020549" src="https://github.com/user-attachments/assets/3cee7b33-1670-4d88-bf80-6e6688fe499b" />

Prompt Detail Page (with live views)
Add Prompt Form
🧩 Notes
Authentication and bonus features are not implemented
Focus is on clean architecture and working solution
👩‍💻 Author

Burra Toojitha Thanusri

📌 Submission
GitHub Repository Link : https://github.com/Thanusri-burra/ai-prompt-library/
Fully working project with instructions

---



1. Create file:
``` id="kav0n9"
README.md
Paste above content
Replace:
<your-repo-link>
