const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const properties=require('./routes/properties')
const user = require('./routes/user')
require('dotenv').config()

const port=process.env.PORT || 3000

const app=express()
app.use(express.json())
app.use(cors())

const uri=process.env.MONGO_URI
mongoose.connect(uri,{
    useNewUrlParser:true,
})

const connection=mongoose.connection
connection.once('open',()=>{
    console.log("CONNECTED TO DB");
})
app.use('/properties',properties)
app.use('/user', user)
app.listen(port,console.log(`Server is listening on port ${port}`))
