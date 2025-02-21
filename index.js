const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON requests

// POST Endpoint: /bfhl
app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid input format",
        });
    }

    const numbers = data.filter((item) => !isNaN(item)); // Extract numbers
    const alphabets = data.filter((item) => /^[A-Za-z]$/.test(item)); // Extract alphabets
    const highestAlphabet = alphabets.length > 0
        ? [alphabets.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })).pop()]
        : [];

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet,
    });
});

// GET Endpoint: /bfhl
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
