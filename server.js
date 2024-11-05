

const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))

var mongo =require('mongodb')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/mydb";


MongoClient.connect(url,
   function(err, db)
    {
	if (err) throw err;
  	var dbo = db.db("mydb");
  	dbo.createCollection("customers", function(err, res)
		{
    	if (err) throw err;
    	console.log("Collection created!");
  
  		db.close();
		});
		// insert obj to customers collection(table)
		// var myobj = { name: "Company Inc", address: "Highway 37" };
		// dbo.collection("customers").insertOne(myobj, function(err, res) {
		//   if (err) throw err;
		//   console.log("1 document inserted");
		//   db.close();
	})

//app.use(express.static("public"))
//app.set("view engine", "ejs")


// app.get('/', (req, res) => {
//  res.render("index",{text:"amir"})

 
// })
app.get("/",(req, res)=>{
	MongoClient.connect(url,
		function(err, db)
		 {
		 if (err) throw err;
		   var dbo = db.db("mydb");
		   dbo.createCollection("users", function(err, res)
			 {
			 if (err) throw err;
			 console.log("Collection created!");
	   
			   db.close();
			 });
})
})
const userroute=require('./routes/users.js')
app.use("/users",userroute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

