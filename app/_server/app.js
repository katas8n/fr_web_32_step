const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use("/people", (req, res) => {
    return res.json([
        {
            name: "John"
        },
        {
            name: "Bob"
        },
        {
            name: "Jim"
        },
     
    ])
})
app.use("/films", (req, res) => {
    return res.json([
        {
            id: Math.random().toString().slice(3,6),
            title: "Aladin ...",
            description: "Hello world!@"
        },
        {
            id: Math.random().toString().slice(3,6),
            title: "Slayer ...",
            description: "Some text!@"
        },
        {
            id: Math.random().toString().slice(3,6),
            title: "Death dealer ...",
            description: "Hello world!@"
        },
    ])
})

app.use("/stories", (req, res) => {
    return res.json([
        {
            id: Math.random().toString().slice(3,6),
            title: "Misha read text and tell that ...",
            description: "Hello world!@"
        },
        {
            id: Math.random().toString().slice(3,6),
            title: "Say hello to ...",
            description: "Some text!@"
        },
        {
            id: Math.random().toString().slice(3,6),
            title: "Hello world ...",
            description: "Hello world!@"
        },
        {
            id: Math.random().toString().slice(3,6),
            title: "Hopeful this shit makes sense ...",
            description: "..."
        },
    ])
})

module.exports = {
    app  
}