import express from 'express'
import dotenv from 'dotenv'
import {connection} from './db.js'
import { Client } from './model/Client.js'
import cors from 'cors'
dotenv.config()
connection()
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("I am a server.")
})

app.post('/api/contact',async(req,res)=>{
    try {
        const {first_name,last_name,email,msg}= req.body
        const isExist = await Client.findOne({email})
        if(!isExist){
            const user = new Client({first_name,last_name,email,msg});
            await user.save()
            res.json({"success":true})
        }
        else{
            res.status(400).json({Message:"Client already present.","success":false})
        }
    } catch (error) {
        res.status(500).json({Error:'Internal server error',error})
    }
})
app.get('/api/getcontact',async(req,res)=>{
    try {
        const users = await Client.find()
        res.json({users})
    } catch (error) {
        res.status(500).json({Error:'Internal server error',error})
    }
})

app.listen(process.env.PORT,()=>{
    console.log("Server is listening on port 3000")
})