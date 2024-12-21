
//controller for create employee

/*

employee Name (fname lname ) , employee salary , employee department , employee gender , employee number , employee emergency nu,mber
employee dat of joining , role , employee dob , emmployee email , employee address , employee image


linking part 
salry table - > employee department, doj salary amoubnt and added and thben lkink it to employee tasble you can also add the percentage too 

scenario-
internship - 10000 first b67 months
probatiohjns period - 25000
after that its a apprasial thing

department tabl;e  -->  departynment name , and tehn link to emplopyee table


*/

const createEmployee = (req,res)=>{
    console.log('req.,body',JSON.stringify(req.body))
    
const {fName,lName,email,pNumber,address,gender,dob,eNumber,doj,image,role} = req.body;


}

export {createEmployee}