

const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))
// const path = require('path')


// cdn
// app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
// app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
// app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

// app.use('/js', express.static(path.join(__dirname, 'public/js')))
// app.use('/css', express.static(path.join(__dirname, 'public/cdn/css')))
// app.use('/jquery', express.static(path.join(__dirname, 'public/cdn/jquery')))



// app.get("/", (req, res) => {

//   res.sendFile(path.join(__dirname, 'public/html/index.html'))
// });
//app.use(express.static("public/html"))
 



const loginroute=require("./routes/login.js")
app.use("/login",loginroute)

const userroute=require('./routes/users.js')
app.use("/users",userroute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

