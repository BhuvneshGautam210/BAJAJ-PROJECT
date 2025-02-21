const express = require("express");
const cors = require("cors");

const app = express();
const port = 10000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// Your existing API routes
app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.sort().slice(-1)[0] || null;

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
