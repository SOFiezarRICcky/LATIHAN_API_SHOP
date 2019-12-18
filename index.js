const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express()

mongoose.connect("mongodb+srv://putrazeus23:devildead45@cluster0-fpbcg.mongodb.net/api_shop?retryWrites=true&w=majority")
    .then(db => console.log("DB Connected"))
    .catch(err => console.log(err))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

require("./router/router")(app)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running On PORT:${PORT}`));
