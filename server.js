const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Port
const PORT = process.env.PORT || 3018;

// Middleware
app.use(urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("client/build"));

// MongoDB connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModifiy: false,
        useCreateIndex: true,
    }
)

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected!")
});

connection.on("error", () => {
    console.log("Mongoose connection error:", err)
})
// Routes
app.get("/api/config", (req, res) => {
    res.json({success:true})
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
});

// Port listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});