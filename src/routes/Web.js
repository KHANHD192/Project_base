const express = require('express')
// tạo instance của đối tượng route
const router = express.Router()
const {getHomePage} = require('../controllers/homeController')
const { getUser} = require('../controllers/profileController')

// router.get("/",(req,res) =>{

//     //nhận qeryadskh
//     //call data 
//     // xử lý 
//     //render 
//     res.render("index")
  
// })
//router => controller 
router.get('/profile',getUser)
router.get("/",getHomePage)
module.exports = router 