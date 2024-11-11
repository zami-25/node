const express = require('express')
const login=express()
const path = require('path')
login.use(express.urlencoded({extended:true}))
login.use('/js', express.static(path.join(__dirname, 'public/js')))
login.use('/css', express.static(path.join(__dirname, 'public/cdn/css')))
login.use('/jquery', express.static(path.join(__dirname, 'public/cdn/jquery')))

login.set("view engine", "ejs")

login.get('/',(req,res)=>{
    res.render("login/index")
})


 login.post('/',(req,res)=> 
 {
   console.log(req.body.username)
   console.log(req.body.password)
 })
  

module.exports=login