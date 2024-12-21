import mongoose, { mongo } from "mongoose";

const employeeSchema = new mongoose.Schema({

     fName:{
        type:String,
        default:"*****ad"
     },
     lName:{
        type:String,
        default:"*****pa"
     },
     email:{
        type:String,
        default:"***@gmail.com"
     },
     pNumber:{
        type:Number,
        default:"*****60"
     },
     address:{
        type:String,
        default:"****RK"
     },
     gender:{
        type:String,
        default:"*",
        enum:['M',"F"]
     },
     dob:{
        type:Date,
        default:"***1999"
     },
     eNumber:{
        type:Number,
        default:"***90"
     },
     doj:{
        type:Date,
        default:"***1999"
     },
     image:{
       type:"String"
     },
     role:{
        type:String,
        default:"***intern",
     }
})


export const employeeModel = mongoose.model("employee",employeeSchema)