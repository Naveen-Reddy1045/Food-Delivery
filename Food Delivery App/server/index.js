const express=require('express')
const cors=require('cors')

const app=express()
const port=5000

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hi,Server is running");
})

app.listen(port,()=>{
    console.log(`SERVER running on http://localhost:${port}`)
})