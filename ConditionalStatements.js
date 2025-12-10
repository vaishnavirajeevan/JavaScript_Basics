
// 1. simple if-else statement

function CheckIfElse(a, b){
    if(a>b){
        console.log("a is large");
    }
    else{
        console.log("b is large")  
    } 
}

//CheckIfElse(10,20);

// 2. if-elseif-else statement

function  CheckIfElseIf(a){
    if(a > 0)
        console.log("number is positive")
    else if(a < 0)
        console.log("number is negative")
    else
        console.log("number is zero")
}

//CheckIfElseIf(-100);

// 3. multiple if-elseif-else statement

function CheckIfElseIfElse(browser){
    if(browser=="Edge")
        console.log("Edge selected");
    else if(browser=="chrome")
        console.log("Chrome selected");
    else if(browser=="IE")
        console.log("IE selected");
    else if(browser=="Safari")
        console.log("Safari selected");
    else if(browser=="Firefox")
        console.log("Firefox selected");
}

//CheckIfElseIfElse("Firefox");

// 4. Nested if-else statement

function CheckIfIfElse(a,b,c){
    if(a>b){
        if(a>c)
            console.log("a is large");
        else
            console.log("c is large");
    }
    else if(b>c)
        console.log("B is large ")
    else
        console.log("c is large");
}

//CheckIfIfElse(40,50,30);

// 5. switch statement

function CheckSwith(digit){
    switch(digit){
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        default:
            console.log("unknown");
            break
    }
}

CheckSwith(-9);