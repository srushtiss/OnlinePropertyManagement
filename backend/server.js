const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()

const port=process.env.PORT || 3000

const app=express()
app.use(express.json())
app.use(cors())

app.listen(port,console.log(`Server is listening on port ${port}`))