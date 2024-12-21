import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { router } from './routers/employee.router.js';

dotenv.config();

const app = express();

//use middleware to use the json

app.use(express.urlencoded({extended:true}));  //sending the data from the form url encoded true
app.use(express.json());  //sending a data in raw json so you need to add this 



//creat the apis

app.use('/api/v1',router)



//databse connection and server started
mongoose.connect(process.env.MONGO_URI)
.then(
    app.listen(process.env.PORT,(req,res)=>{
        console.log(`server started at ${process.env.PORT} and databse connecterd successfully`)
    })
)
.catch((err)=>{console.log(err.message)})