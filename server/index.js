const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/user", userRouter)
app.get("/", (req, res) => res.json({msg: "hello world after the class"}));


mongoose.connect('mongodb+srv://kiran:kiran1234@cluster0.rjkgsnj.mongodb.net/video', {  dbName: "video" });

app.listen(3001, () => console.log('Server running on port 3000'));
