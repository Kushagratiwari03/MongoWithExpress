# 💬 Mini WhatsApp Clone (CRUD App)

A simple WhatsApp-like chat application built using **Node.js, Express, MongoDB, and EJS**.
This project demonstrates full **CRUD operations** with a clean MVC-like structure.

---

## 🚀 Features

* 📥 View all chats (Index Route)
* ➕ Create a new chat
* ✏️ Edit existing messages
* 🗑️ Delete chats
* 📅 Timestamp for each message
* 🎨 Basic UI with CSS

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS (Template Engine)
* CSS

---

## 📁 Project Structure

```
MongoWithExpress/
│
├── models/
│   └── chats.js        # Mongoose Schema
│
├── views/
│   ├── index.ejs       # Show all chats
│   ├── new.ejs         # Create chat form
│   ├── edit.ejs        # Edit chat form
│
├── public/
│   └── style.css       # Styling
│
├── init.js             # Database initialization
├── index.js            # Main server file
├── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/mini-whatsapp.git
cd mini-whatsapp
```

2. Install dependencies:

```
npm install
```

3. Start MongoDB locally

4. Run the app:

```
node index.js
```

5. Open browser:

```
http://localhost:8080/chats
```

---

## 📌 Routes Overview

| Method | Route           | Description    |
| ------ | --------------- | -------------- |
| GET    | /chats          | Show all chats |
| GET    | /chats/new      | New chat form  |
| POST   | /chats          | Create chat    |
| GET    | /chats/:id/edit | Edit form      |
| PUT    | /chats/:id      | Update chat    |
| DELETE | /chats/:id      | Delete chat    |

---

## 📷 Features Breakdown

### 🧾 Index Page

* Displays all chats stored in MongoDB

### ➕ Create Chat

* Form to add new messages

### ✏️ Edit Chat

* Update message using ID

### 🗑️ Delete Chat

* Remove chat permanently

---

## 🧠 What I Learned

* Express routing
* RESTful APIs
* MongoDB with Mongoose
* CRUD operations
* EJS templating
* Form handling & method-override

---

## 🔮 Future Improvements

* Authentication (Login/Signup)
* Real-time chat using Socket.io
* Better UI (Chat bubbles)
* Deployment (Render / Vercel)

---

## 👨‍💻 Author

**Kushagra**
<br>
Computer Science Engineering Student 🚀

