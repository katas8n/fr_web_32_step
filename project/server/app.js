const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const { quizzesRouter } = require('./routes/quizzes.router');
const { resourceRouter } = require('./routes/resources.router');

const app = express();

app.use(cors());
app.use(bodyParser.json());

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://rooot:2323@cluster.vvcrdjc.mongodb.net/EducApp");
    }catch(e) {
        console.log('[e.message]', e.message);
    }
}

connect();


app.use("", quizzesRouter);
app.use("", resourceRouter);
app.use("/", (req, res) => {
    return res.json({
        msg: "Initial page"
    })
});


module.exports = {
    app
}