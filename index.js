const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ Enable CORS for all origins OR only for your frontend
app.use(cors({ 
    origin: "https://bajaj-frontend-oxe8miz9r-bhuvneshs-projects.vercel.app", 
    methods: "GET,POST",
    allowedHeaders: "Content-Type"
}));

app.use(express.json()); // Enable JSON Parsing

app.get("/", (req, res) => {
    res.send("API is running...");
});

// Your existing routes
app.post("/bfhl", (req, res) => {
    const inputData = req.body.data;
    
    if (!inputData) {
        return res.status(400).json({ message: "Invalid input" });
    }

    const numbers = inputData.filter(item => !isNaN(item));
    const alphabets = inputData.filter(item => isNaN(item));
    const highestAlphabet = alphabets.sort().slice(-1)[0] || null;

    res.json({
        is_success: true,
        user_id: "22BCS14051",
        email: "your-email@example.com",
        roll_number: "22BCS14051",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
