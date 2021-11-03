//Get the package from node.js
const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");
const noteRoutes = require("./routes/NoteRoutes");
const projectRoutes = require("./routes/ProjectRoutes");
const { NotFound, ErrorHandler } = require("./middlewares/ErrorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/", (req,res) => {
//     res.send("API is running.");
// })

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/note", noteRoutes);

app.use(NotFound);
app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;

//Web server
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
