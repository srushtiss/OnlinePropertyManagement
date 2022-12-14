const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const properties=require('./routes/properties')
const user = require('./routes/user')
const host = require('./routes/host')
const reservation=require('./routes/reservation')
require('dotenv').config()

const port=process.env.PORT || 4000

const app=express()
app.use(express.json())
app.use(cors())
// const formidable = require('express-formidable');
 
 
// app.use(formidable());


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
app.use('/host', host)
app.use('/reservation', reservation)
app.listen(port,console.log(`Server is listening on port ${port}`))
