/* 1. setTimeout
    - ()=>{ } - this is callback function
    - will not execute immedietly  */

setTimeout(() => {
    console.log(`Runs after 3 seconds`);
}, 3000);  // --------------------------------------> thsi will run secondly bcoz 3 sec

/* 2. setInterval
     - callback runs again and again
     - in every time interval until you stop it  */
     
const id = setInterval(() => { // assign id to progrmatically stops the excution else use cntl+c
    console.log(`Running every 2 sec`);
}, 2000);  // --------------------------------------> this will run first because 2 sec go first

setTimeout(() => {
    console.log(`stops after 10 sec`);
    clearInterval(id);
}, 10000);  // --------------------------------------> thsi wll run after 10 sec and stops interval