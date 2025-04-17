require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(3000, () =>
    console.log("Express server running at http://localhost:3000")
);
