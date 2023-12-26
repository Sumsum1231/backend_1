require('dotenv').config()
const express=require('express')
const app = express()

const port = 3000

app.get('/', (_req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(_req, res)=>{
    res.send('SumitDash')
})
app.get('/login',(_req,res)=>{
    res.send('<h1>Please login</h1>')
})
app.get('/youtube',(_req,res)=>{
    res.send('<h2>Youtube</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
  
})

