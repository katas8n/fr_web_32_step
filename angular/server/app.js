const express = require('express');
const cors = require('cors');

const { burgerRouter } = require("./routes/burgers.router")

const app = express();


app.use(cors())
app.use(burgerRouter)

module.exports = {
    app
}
