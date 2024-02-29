const connnection =  require('../config/database')
const {getUserById} = require('../model/userModel')



 function getUser(req,res){
 
     const user_id = req.query.user_id
    //processing data => call đến model
     getUserById(user_id,connnection,(err,results)=>{

      
        const [user] = results
       
       //interact view 
       res.render('profile',{data:user})
       
     })
      
    
    
}

module.exports =  {getUser}