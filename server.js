

const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))

//app.use(express.static("public"))
//app.set("view engine", "ejs")


// app.get('/', (req, res) => {
//  res.render("index",{text:"amir"})

 
// })
app.get("/",(req, res)=>{
  res.end("/ is here")
})
const userroute=require('./routes/users.js')
app.use("/users",userroute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

