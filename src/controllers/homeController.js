
//get home page 

function getHomePage(req,res){
 
    //processing data => call đến model 

    //interaction với view 
    res.render('index')
}

module.exports = {getHomePage}