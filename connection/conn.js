const mongoose = require("mongoose");
mongoose.connect
("mongodb+srv://ammarbadawi18:Ammar20010110@cluster0.2vwlhqg.mongodb.net/book-store-db?retryWrites=true&w=majority"
).then(
    (res)=> 
    console.log("connected")
    )