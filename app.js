const express = require("express");
const app = express();
require("./connection/conn");
app.get("/", (req, res)=>{
    res.send("hello");
});

app.listen(3000,() => {
    console.log("server started.")
});