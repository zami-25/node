const express = require('express')
const login=express()
const path = require('path')
login.use(express.urlencoded({extended:true}))
login.use(express.json())
//login.use(express.static("public"))
login.use('/js', express.static(path.join('/home/amir/Desktop/prj/express/public/js')))
login.use('/css', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/css')))
login.use('/jquery', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/jquery')))


login.set("view engine", "ejs")

var  MongoClient = require('mongodb').MongoClient;

login.get('/',(req,res)=>{
    res.render("login")
})


 login.post('/',(req,res)=> 
 {

  const client = new MongoClient("mongodb://admin:pass@192.168.1.36:27017");
async function find() {
  try {

    const database = client.db("test");
    const users = database.collection("users");


    // const doc = {
    //   name:req.body.username,
    //   password:req.body.password
    // }

    //const result = await users.insertOne(doc);
    const result= await users.findOne( {username:req.body.username})
    
   if(result.password===req.body.password){
    res.render('users')
    age1=result.age
    nam=result.username
    console.log(age1)
   }
   else(res.send('wrong username or password'))
  } finally {

    await client.close();
  }
}

find().catch(console.dir);

});

  

module.exports=login