const express = require('express')
const register=express()
const path = require('path')
register.use(express.json())
// import path from 'node:path'
register.use(express.urlencoded({extended:true}))


register.use('/js', express.static(path.join('/home/amir/Desktop/prj/express/public/js')))
register.use('/css', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/css')))
register.use('/jquery', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/jquery')))

register.set("view engine", "ejs")
var  MongoClient = require('mongodb').MongoClient;





register.get('/',
    (req,res)=>{
       res.render("register")
        // res.send('register')
    }
)

 register.post('/',(req,res)=>{
    const client = new MongoClient("mongodb://admin:pass@192.168.1.36:27017");
async function insert() {
  try {

    const database = client.db("test");
    const users = database.collection("users");


    // const doc = {
    //   name:req.body.username,
    //   age:req.body.age,
    //   password:req.body.password
    // }
    const body=req.body
  
    var search= await users.findOne( {username:body.username})
    console.log(search)

    if(search==null){
      const result = await users.insertOne(body);
    

      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
    else {
      // res.send(`user with ${body.username} is already existed`)
    
      res.redirect('/register')
      
      console.log(`user with ${body.username} is already existed`);
    }
    
  } finally {

    await client.close();
  }
}

 insert().catch(console.dir);
  })
module.exports=register