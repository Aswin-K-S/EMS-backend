 //1. Import express
 const express = require('express')

 //2. Import cors
 const cors = require('cors')

 //3. import logics
const logic = require('./services/logics')

 //3. Create an application using express
 const emsServer = express() //it creates an express application

 //4. Using cors to connect frontend port 
 emsServer.use(cors({
    origin:'http://localhost:3000'  //remove the slash( / ) at the end
 }))

 //5. Create a middleware for parsing json data
 emsServer.use(express.json())  //to convert json to js

 //6. Define a port number
 emsServer.listen(8000,()=>{
    console.log("emsserver listening on the port 8000");
 })

 //API call for get all employee details localhost://8000/get-all-employees
 emsServer.get('/get-all-employees',(req,res)=>{
         //logic function getAllEmployee()
         logic.getAllEmployees().then((response)=>{
            res.status(response.statusCode).json(response)
         })
 })

 //API call for get add employee details  localhost://8000/add-employees
 emsServer.post('/add-employee',(req,res)=>{
   logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
      res.status(response.statusCode).json(response)
   })
 })

 //API call for Delete an employee localhost://8000/delete-employee
 emsServer.delete('/delete-employee/:id',(req,res)=>{
   logic.deleteEmployee(req.params.id).then((response)=>{
      res.status(response.statusCode).json(response)
   })
 })

 //API call for view an employee localhost://8000/view-employee
 emsServer.get('/view-employee/:id',(req,res)=>{
   logic.viewEmployee(req.params.id).then((response)=>{
      res.status(response.statusCode).json(response)
   })
 })
 
  //API call for  Edit employee details  localhost://8000/update-employee
  emsServer.post('/update-employee/:id',(req,res)=>{
   logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
      res.status(response.statusCode).json(response)
   })
 })