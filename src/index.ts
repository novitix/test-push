import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (_req, res) => {
    res.send("Hello from Express!");
});

app.get("/test", (_req, res) => {
  res.send("Test route!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
