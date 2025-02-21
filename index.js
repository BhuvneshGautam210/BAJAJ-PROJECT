const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 10000;

// Enable CORS for all origins (Allow frontend to communicate with backend)
app.use(cors());  

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.post("/bfhl", (req, res) => {
    const data = req.body.data;
    
    if (!Array.isArray(data)) {
        return res.status(400).json({ error: "Invalid input format" });
    }

    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const numbers = data.filter(item => /^[0-9]+$/.test(item));
    const highestAlphabet = alphabets.length > 0 ? alphabets.sort().reverse()[0] : null;

    res.json({
        is_success: true,
        user_id: "22BCS14051",
        email: "your_email@example.com",
        roll_number: "22BCS14051",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
