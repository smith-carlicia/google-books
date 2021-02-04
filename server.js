const { urlencoded } = require('express');
const express = require('express');

// Port
const PORT = process.env.PORT || 3008;

// Middleware
app.use(urlencoded({extended:true}));
app.use(express.json());

// Routes
app.get("/api/config", (req, res) => {
    res.json({success:true})
});

// Port listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});