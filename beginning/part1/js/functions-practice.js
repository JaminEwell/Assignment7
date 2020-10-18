//STEP 1    Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

function halfNumber(num) {
    var result = num / 2;
    console.log("Half of " + num + " is " + result);
    return result;
}



//STEP 2    Write a function called squareNumber() that accepts one argument (a number), 
//          square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(num) {
    var result = num * num;
    console.log("The result of squaring the number " + num + " is " + result);
    return result;
}


//STEP 3 	Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number,
//          and return the result. It should log a string like "2 is 50% of 4."

function percentOf(num1, num2) {
    var result = (num1 / num2) * 100;
    console.log(num1 + " is " + result + "% of " + num2);
    return result;
}



//STEP 4    Write a function called findModulus() that accepts two numbers. 
//          Within the function write a statement that returns the modulus of the first and second parameters. 
//          It should log a string like "2 is the modulus of 4 and 10."
function findModulus(num1, num2) {
    var result = num1 % num2;
    console.log(result + " is the modulus of " + num1 + " and " + num2);
    return result;
}

//testcase 
//findModulus(10, 4);


/* STEP 5   Create a JavaScript function that accepts a certain amount of numbers as parameters. 
            Those numbers should be collected using a prompt and the numbers should be delimited by commas.
            Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, 
            and several type conversion global functions to accomplish this task.*/

function findSum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}


//testcase:  findSum(2,2,2,2);
//result:  8