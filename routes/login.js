const express = require('express')
const login=express()
const path = require('path')
login.use(express.urlencoded({extended:true}))


login.use('/js', express.static(path.join('/home/amir/Desktop/prj/express/public/js')))
login.use('/css', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/css')))
login.use('/jquery', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/jquery')))

login.set("view engine", "ejs")

var  MongoClient = require('mongodb').MongoClient;

login.get('/',(req,res)=>{
    res.render("login/index")
})


 login.post('/',(req,res)=> 
 {

  const client = new MongoClient("mongodb://admin:pass@localhost:27017");
async function run() {
  try {

    const database = client.db("test");
    const users = database.collection("users");


    const doc = {
      name:req.body.username,
      password:req.body.password
    }

    const result = await users.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {

    await client.close();
  }
}

run().catch(console.dir);
});

  

module.exports=login