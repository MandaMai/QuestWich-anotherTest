var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var db = mongo.connect('mongodb://localhost:27017/Quest-Portal', function(err, response) {
    if(err){ console.log(err);}
    else{ console.log('Connected to ' + db, ' + ' , response);}
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var UsersSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    birthdate: {type: String},
    email: {type: String},
    password: {type: String},
    nickname: {type: String},
    phone: {type: String}
},{versionKey: false});

var model = mongo.model('users', UsersSchema, 'users');

app.post("/api/SaveUser",function(req,res){   
    var mod = new model(req.body);  
    if(req.body.mode =="Save")  
    {  
       mod.save(function(err,data){  
         if(err){  
            res.send(err);                
         }  
         else{        
             res.send({data:"Record has been Inserted..!!"});  
         }  
    });  
   }  
   else   
   {  
    model.findByIdAndUpdate(req.body.id, { 
        firstName: req.body.firstName
        , lastName: req.body.lastName
        , birthdate: req.body.birthdate
        , email: req.body.email
        , password: req.body.password
        , nickname: req.body.nickname
        , phone: req.body.phone, },  
      function(err,data) {  
      if (err) {  
      res.send(err);         
      }  
      else{        
             res.send({data:"Record has been Updated..!!"});  
        }  
    });  
     
     
   }  
    })  
     
    app.post("/api/deleteUser",function(req,res){      
       model.remove({ _id: req.body.id }, function(err) {    
        if(err){    
            res.send(err);    
        }    
        else{      
               res.send({data:"Record has been Deleted..!!"});               
           }    
    });    
      })  
     
     
     
    app.get("/api/getUser",function(req,res){  
       model.find({},function(err,data){  
                 if(err){  
                     res.send(err);  
                 }  
                 else{                
                     res.send(data);  
                     }  
             });  
     })  
     
     
   app.listen(4242, function () {  
       
    console.log('Example app listening on port 4242!')  
   })  

