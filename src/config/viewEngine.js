const express = require('express')
const path = require("path")

function configViewEngine(app,__dirname){
    app.set("view engine","ejs")
    app.set("views",path.join(__dirname,"views"))
    
    //set static file => cho node js hiểu 
    app.use(express.static(path.join(__dirname,"public")))

}
module.exports = configViewEngine