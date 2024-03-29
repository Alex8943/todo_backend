import express from "express";
import dbConnect from "./dbConnection/dbConn";
import "dotenv/config";
import todoRouter from "./routers/todoRouters";
import cors from "cors";

dbConnect();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});