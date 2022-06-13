// server code
require("dotenv").config();
const express = require("express");

const app = express();

const mongoose = require("mongoose");

// connect to database
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DaTaBaSe! 🍣"));

app.use(express.json());

const sushiRouter = require("./routes/sushi");
app.use("/sushi", sushiRouter);
app.listen(3000, () => console.log("Server Started"));
