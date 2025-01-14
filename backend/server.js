const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/message", (req, res) => {
    const { message } = req.body;
    if (message) {
        res.json({ message: `Recieved: ${message}`});
    } else {
        res.json({ message: "Error: No message recieved" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));