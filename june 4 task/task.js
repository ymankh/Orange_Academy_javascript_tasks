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
if (product < 0) alert("-");
else alert("+");

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

num1 = 4;
num2 = 0;
num3 = -1;

if (num1 >= num2) {
  if (num2 >= num3) console.log(`${num1} ${num2} ${num3}`);
  else if (num1 >= num3) {
    console.log(`${num1} ${num3} ${num2}`);
  }
} else if (num2 >= num1) {
  if (num1 >= num3) console.log(`${num2} ${num1} ${num3}`);
  else if (num2 >= num3) {
    console.log(`${num2} ${num3} ${num1}`);
  }
} else if (num3 >= num1) {
  if (num1 >= num2) console.log(`${num3} ${num1} ${num2}`);
  else if (num2 >= num1) {
    console.log(`${num3} ${num2} ${num1}`);
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
    console.log(yes);
    no_y = false;
    break;
  }
}
if (no_y) {
  var x = "don’t know why";
}

/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:

*/

function tellFortune(
  numberOfChildren,
  partnerName,
  geographicLocation,
  jobTitle
) {
  console.log(`You will die alone`);
}
