const express = require("express");

const app = express();

const PORT = process.env.PORT ?? 5001;

app.get("/", (req, res) => {
  return res.json({ message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
