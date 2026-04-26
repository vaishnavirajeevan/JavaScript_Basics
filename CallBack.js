/* Callback functions
   - passed as arguments to another function.
   - mainly used in asynchronous programming and event handling.
   - Callback functions are of 2 types - synchronous and asynchronous. */


// 1. Synchronous callback function - These are executed immediately within the function they are passed to

function employeeName(callback){
    callback();
}

function employee1(){
    console.log(`Employee name is Aju`);
    console.log(`Department of employee is HR`)
}

employeeName(employee1);

const employeeDetails=(name,callbackmethod)=>{
    console.log(`Name of the employee is ${name}`);
    callbackmethod();
}

const employee2=()=>{
    console.log(`Department of employee is Sales`)
}

employeeDetails("Arya",employee2);

const employee3=(dept)=>{
    console.log(`department of employee is ${dept}`);
}

employeeDetails("Arjun",()=>employee3("IT")); // employee2("IT")- this will immediately call employee2 method

console.log("-------------------------------Asynchronous callback function-------------------------------------------------")
/* 2.Asynchronous callback function
    - Here we are using setTimeout to simulate the asynchronous nature of the function.
    - setTimeout(function, time)
    - anything outside the setTimeout function will be executed immediately */

const employeeDetailsWait=(name,callback)=>{
    setTimeout(() => {
        console.log(`after wait`);
        console.log(`employee name is ${name}`);
        callback();
        console.log(`after wait and method call`);
    }, 3000);
    console.log(`ouside wait`);
}

const employee4=()=>{
    console.log(`department of employee is finance`);
}

employeeDetailsWait("Ammu",employee4);

const users=[
    {userid:10,name:"Riya"},
    {userid:11,name:"Kavya"},
    {userid:12,name:"Arun"},
    {userid:13,name:"Kiran"},
    {userid:14,name:"Vidya"},
];

const UserDetails=(id,callback)=>{
    setTimeout(() => {
       const user=users.find((u)=>u.userid==id);
       callback(user); 
    }, 5000);  
}

const userfound=(user)=>{
    if(user==null)
        console.log(`user not found`)
    else
        console.log(`user is ${user.name}`);
}

UserDetails(10,userfound);