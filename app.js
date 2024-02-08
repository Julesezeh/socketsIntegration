const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).send("<h2> Wagwan </h2>")
})


app.listen(() => {
    console.log(`Server is listening on port ${PORT}`)
})