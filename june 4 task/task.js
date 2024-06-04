/* 1. Write a JavaScript program that accept two integers and
/******* Start Your Code *********/

function LargestNumber(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}

console.log(`The largest between 20 and 10 is ${LargestNumber(20, 10)}`);

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
var num1 = 3;
var num2 = -7;
var num3 = 2;

var product = num1 * num2 * num3;
if (product < 0) alert(" - ");
else alert("+");

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

var num1 = 4;
var num2 = 8;
var num3 = 1;

if (num1 >= num2) {
  if (num2 >= num3) alert(`${num1} ${num2} ${num3}`);
  else if (num1 >= num3) {
    alert(`${num1} ${num3} ${num2}`);
  }
} else if (num2 >= num1) {
  if (num1 >= num3) alert(`${num2} ${num1} ${num3}`);
  else if (num2 >= num3) {
    alert(`${num2} ${num3} ${num1}`);
  }
} else if (num3 >= num1) {
  if (num1 >= num2) alert(`${num3} ${num1} ${num2}`);
  else if (num2 >= num1) {
    alert(`${num3} ${num2} ${num1}`);
  }
}

/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

var numbers = [-5, -2, 0, 0, -1];

for (const number of numbers) {
  if (
    numbers.some((value) => {
      return value > number;
    })
  )
    continue;
  console.log(`The largest number between ${numbers.join(", ")} is ${number}`);
  break;
}

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

var x = 10;
var y = 5;
if (x > y) {
  console.log("Hello World");
} else alert("Goodbye");

/******* End Your Code ********* */

/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

function rate(grade) {
  if (grade < 50) return "Fail";
  if (grade < 59) return "E";
  if (grade < 69) return "D";
  if (grade < 79) return "C";
  if (grade < 89) return "B";
  return "A";
}

// 1. Write a JS code to print numbers from 1 to 10

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/

var arr = [13, 23, 12, 45, 22, 48, 66, 100];
for (const number of arr) {
  if (arr % 2 === 0) console.log(number);
}

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

var result = "";
for (var i = 1; i <= 8; i++) {
  result += " " + i;
  console.log(result);
}

/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
var x = "don’t know why"

*/

var y = "Is there any why here";
var no_y = true;
for (const letter of y) {
  if (letter === "y") {
    console.log("yes");
    no_y = false;
    break;
  }
}
if (no_y) {
  console.log("no");
}

/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(
  jobTitle,
  geographicLocation,
  partnerName,
  numberOfChildren
) {
  console.log(
    `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
  );
}

tellFortune("software engineer", "Jordan", "Alice", 3);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(ageOnHumanYears) {
  console.log(`Your doggie is ${ageOnHumanYears * 7} years old in dog years!`);
}
calculateDogAge(1);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay) {
  console.log(
    `You will need ${
      (100 - age) * 365 * amountPerDay
    } to last you until the ripe old age of 100`
  );
}
calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
  console.log("Hello" + name);
}

/*
5
what is the error:

the variable inside the function does not match the name of the parameters

function double(cat) {
  return 2 * x;
}

parameters should not be values!!

function double(7) {
  return 2 * 7;
}


parameters should not be values!!

function double('7') {
  return 2 * 'x';
}
*/

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

function double1(x) {
  return 2 * x;
}

functiondouble2 x)
return 2 * x;
}

function double2 (x) {
return 2 * x;
}

function (x) double3 {
  return 2 * x;

  function  double3(x) {
  return 2 * x;
  }

*/

/*
7
Write a function called cube that:

accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(value) {
  return Math.pow(value, 3);
}

console.log(`The cube of the number 4 is ${cube(4)}`);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

*/

function multiply(num1, num2) {
  return num1 * num2
}

console.log(` 5 multiplied by 68 equal to ${multiply(5, 68)}`);


