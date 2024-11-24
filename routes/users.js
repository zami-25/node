const express = require('express')
const users=express()
const path = require('path')
users.use(express.json())
// import path from 'node:path'
users.use(express.urlencoded({extended:true}))


users.use('/js', express.static(path.join('/home/amir/Desktop/prj/express/public/js')))
users.use('/css', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/css')))
users.use('/jquery', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/jquery')))

users.set("view engine", "ejs")
var  MongoClient = require('mongodb').MongoClient;
const login=require("./login.js")




// users.get('/',
//     (req,res)=>{
//        res.render("users",)
       
//         const client = new MongoClient("mongodb://admin:pass@172.16.20.184:27017");
//         async function find() {
//           try {
           
//             const database = client.db("test");
//             const users = database.collection("users");
//             const result= await users.findOne({username:"amir"})
//             console.log(result.username)
//             console.log(result.age)
            
//             age1=result.age
//             nam=result.username
//             // age=res.body.age
//             // password=res.body.password
//             // age=result.age
            
             
            
//            }
           
//            finally {
        
//             await client.close();
//           }
//         }
        
//         find().catch(console.dir);
//        })
users.post('/delete',(req,res)=>{
  res.render('login')
  const client = new MongoClient("mongodb://admin:pass@192.168.1.36:27017");
  async function del() {
    try {
     
      const database = client.db("test");
      const users = database.collection("users");
      const body=req.body 
      
      const result= await users.deleteMany(
        {username:body.username})

     }
     
     finally {
  
      await client.close();
    }
  }
  
  del().catch(console.dir);
   console.log(`delete user ${req.body}`)
   

})
 
users.post('/update',(req,res)=>{
 // res.render('login')
  const client = new MongoClient("mongodb://admin:pass@192.168.1.36:27017");
  async function update() {
    try {
     
      const database = client.db("test");
      const users = database.collection("users");
      const body=req.body 
      
      const result= await users.updateOne(
        {username:body.username},{
          $set:{
            username:body.newusername,
            age:body.age
          }
        })
      
      
      
     }
     
     finally {
  
      await client.close();
    }
  }
  
  update().catch(console.dir);
   console.log('update user')
   
})
       


//  register.post('/',(req,res)=>{
//     const client = new MongoClient("mongodb://admin:pass@192.168.1.36:27017");
// async function insert() {
//   try {

//     const database = client.db("test");
//     const users = database.collection("users");


//     const doc = {
//       name:req.body.username,
//       age:req.body.age,
//       password:req.body.password
//     }
//     console.log(doc)
//     const result = await users.insertOne(doc);
    

//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {

//     await client.close();
//   }
// }

//  insert().catch(console.dir);
//   })
module.exports=users