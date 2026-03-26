const mongoose = require('mongoose');
const Chat = require("./models/chats.js");

main()
    .then(() => {
        console.log("Connection successful!"); 
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
    
let allChats = [
    {
        from: "Kushagra", 
        to: "Neha",
        msg: "Send me the exam sheets",
        created_at: new Date(),
    },
    {
        from: "Alice", 
        to: "Bob",
        msg: "Meeting at 3 PM",
        created_at: new Date(),
    },
    {
        from: "Charlie", 
        to: "David",
        msg: "Project update needed",
        created_at: new Date(),
    },
    {
        from: "Eve", 
        to: "Frank",
        msg: "Code review completed",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);
