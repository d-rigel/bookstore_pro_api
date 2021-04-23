const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db")
const app = express();

Genre = require("./models/genres");
Book = require("./models/books");

//Load config
dotenv.config({ path: "./config/config.env" });

connectDB()

//Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Logging 
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.get("/", (req, res) => {
    res.send("please use /api/books or /api/genres")
})

//Routes
app.use("/api", require("./routes/genres"))
app.use("/api", require("./routes/books"))

const PORT = process.env.PORT || 3000


app.listen(3000, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))