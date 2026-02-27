import cors from "cors";
import express from "express";
import { prisma } from "./lib/prisma";
const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  const questions = await prisma.question.findMany();
  res.send(questions);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
