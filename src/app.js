const express = require('express')
require('dotenv').config()
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/Web')
const connection = require('./config/database')
// instance express
const app = express()

// read enviroment variable 
const port =process.env.PORT||3000

//config viewengine 
configViewEngine(app,__dirname)



// khai báo sử dụng route
app.use("/",webRouter)

//middleware ghi log 
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};




// Sử dụng middleware cho toàn bộ ứng dụng
app.use(loggerMiddleware);



//bind 
app.listen(port,()=>{
    console.log(`example listening on http://localhost:${port}`)
})

