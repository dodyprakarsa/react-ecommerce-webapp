const express = require ('express');
const mongoose = require ('mongoose');
const route = require('./routes/routes');
require('dotenv').config();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log("Index is Connected"));

const app = express();

//express route middleware
app.use(route);

// app.get("/", (req, res) => {
//     res.send("hello again");    
// });

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});