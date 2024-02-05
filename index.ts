import express from "express";
import dbConn from "./dbConnection/dbConn"

const app = express();

dbConn();

app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})