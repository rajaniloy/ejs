require("dotenv").config()
const express=require("express")
const app=express()
const path=require("path")
const PORT=process.env.PORT || 5005


app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

app.get("/login",(req,res)=>{
    res.render('login')
})

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

app.get("/sign",(req,res)=>{
    res.render('sign')
})


app.listen(PORT,(err)=>{
    if(!err) console.log(`${PORT} is runnig`);
})
