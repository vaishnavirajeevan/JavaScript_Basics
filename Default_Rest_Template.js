/* 1. Default parameter
      - method will take the value if no argument passed  */

let launch = (browser="chrome")=>{
    console.log("launched "+browser);
}

launch("edge");
launch();

let welcome=(user="Guest",role="Temporary")=>{
    console.log("logged in as "+user+" with role "+role);
}

welcome("vaishnavi","tester");  // logged in as vaishnavi with role tester
welcome();
welcome("anu"); //logged in as anu with role Temporary

/* 2. Rest parameter
    - with rest parameter we can give any number of arguments
    - it will take it as an array */

let sum=(...numbers)=>{
    let initial = 0;
    for(let n of numbers){
        initial=initial+n;
    }
    console.log("sum is "+initial);
}

sum(2,3);   // sum is 5
sum(1,2,3,4); // sum is 10
sum();  // sum is 0

/* 3. Template literals
    -Instead of double quotes for printing the values we can use the backticks - `
    -usages - string interpolation, multiline strings, embedded expressions   */

let company = (company="Microsoft",location="USA")=>{
    console.log(`${company} located in ${location}`); // ${} can be used only with template literals
} 

company();
company("Google","India");

let brwoserDetails =(browser="chrome",...details)=>{
    console.log(`browser is ${browser} details are ${details}`);
}

brwoserDetails();  //browser is chrome details are
brwoserDetails("safari");  //browser is safari details are
brwoserDetails("IE","version - 2023.22.0");  // browser is IE details are version - 2023.22.0
brwoserDetails('Edge','Company - Microsoft', 'Engine - Chromium', 'version - 2024.0.0.0'); //browser is Edge details are Company - Microsoft,Engine - Chromium,version - 2024.0.0.0

