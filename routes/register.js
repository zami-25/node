const express = require('express')
const register=express()
const path = require('path')
// import path from 'node:path'
register.use(express.urlencoded({extended:true}))


register.use('/js', express.static(path.join('/home/amir/Desktop/prj/express/public/js')))
register.use('/css', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/css')))
register.use('/jquery', express.static(path.join('/home/amir/Desktop/prj/express/public/cdn/jquery')))

register.set("view engine", "ejs")





register.get('/',
    (req,res)=>{
       res.render("register")
        // res.send('register')
    }
)

 register.post('/',(req,res)=>{
//     const client = new MongoClient("mongodb://admin:pass@localhost:27017");
// async function run() {
//   try {

//     const database = client.db("test");
//     const users = database.collection("users");


//     const doc = {
//       name:req.body.username,
//       age:req.body.age,
//       password:req.body.password
//     }

//     const result = await users.insertOne(doc);

//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {

//     await client.close();
//   }
// }

// run().catch(console.dir);
  })
module.exports=register