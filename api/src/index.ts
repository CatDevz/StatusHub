import { PrismaClient } from ".prisma/client";
import express from "express";
import logger from "morgan";

const PORT = process.env.PORT || 5000;
const ADDR = process.env.ADDR || "localhost";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(logger("tiny"));

app.listen(<number>PORT, ADDR, async () => {
  console.log("🚀 Starting StatusHub");
});
