// import db.js
const db = require('../services/db')


//logic for get all employees from the database
const getAllEmployees=()=>{
    return db.employee.find().then(
        (result)=>{ // all employees details
            if(result){ 
                return{ //send to frontend
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Employees not found'
                }
            }
        }
    )
}

//logics for add an employee to the database
const addEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
            if(result){
                return{
                    statusCode:404,
                    message:"Employee already exist"
                }
            }
            else{
                //if id is not present in the db, save all the data in the db
                const newEmployee=new db.employee({id,name,age,designation,salary})
                newEmployee.save()
                return{
                    statusCode:200,
                    message:"Employee added successfully..."
                }

            }
        })
    
}

//Logic for deleting an employee from the database
const deleteEmployee=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
        
        return{
            statusCode:200,
            message:"Employee Deleted successfully"
        }  
    })
    .catch((error)=>{
        return{
            statusCode:404,
            message:"Can't delete employee"
        }
    })
}

//Logic for view employee
const viewEmployee=(id)=>{
    return db.employee.findOne({id}).then((response)=>{
        return{
            statusCode:200,
            employee_det:response
        }
    })
    .catch((error)=>{
        return{
            statusCode:404,
            message:"Employee Not Found"
        }
    })

  
}

//Logics for update employee
const updateEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if (result){
            //assign updated employee details to the mongoDB object
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;

            //to save the details
            result.save();
            
        return{
            statusCode:200,
            message:'Employee details Updated'
        }
    }
    else{
        return{
            statusCode:404,
            message:'Employee not found'
        }
    }
    }
    )
}

module.exports={
    getAllEmployees,
    addEmployee,
    deleteEmployee,
    viewEmployee,
    updateEmployee
}