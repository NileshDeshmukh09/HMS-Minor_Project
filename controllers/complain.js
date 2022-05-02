var mysql =require('mysql');
var express = require ('express');
var cookie = require ('cookie-parser');
var db = require.main.require ('./models/db_controller');

var router = express.Router();
router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/',function(req,res){
 
    res.render ('complain.ejs');
});

router.post('/',function(req,res){

    var message = req.body.message;
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    console.log(name , "has Complained !");
    db.postcomplain(message,name,email,subject,function(err,result){
        
        // res.redirect('back');
        res.status(200).send({
            message : "Compained Registered Successfully !",
        })
    });

});




module.exports = router;