const express = require('express')
const router=express()
//const router=express.Router()
router.set("view engine", "ejs")
//router.use(express.urlencoded({extended:true}))
//router.use(logg)



router.get('/',
    (req,res)=>
        res.end("users")
)
  
router.get('/new',
    (req,res)=>
{        res.render("users/new")
    

})

router.post('/new',
    (req,res)=>{
    const isValid=true
    if(isValid){
      users.push({name:req.body.name})
      console.log(users)
      res.redirect(`/useres/${users.length-1}`)
    }else{
      console.log("error")
      res.render('users/new',{name:req.body.name
      })
    }
 } )
    

router.route("/:id")
.delete
(
    (req,res)=>
        {id=req.params.id
          res.send(`user id is ${id}`)
        }
)
.put
(
    (req,res)=>
        {id=req.params.id
          res.send(`user id is ${id}`)
        }
)
.get
(
    (req,res)=>
        {id=req.params.id
          console.log(req.user)
          res.send(`user id is ${id}`)
        }
)


const users=[{name:'amir'},{name:'alo'}]
router.param("id",(req,res,next,id)=>{
    req.user=users[id]
    next()
    // console.log(users[1])
    // res.send(`$hello ${users[1]}`)


})
function logg(req, res,next){
    console.log(req.url)
    next()
  }
    


            
           


module.exports=router