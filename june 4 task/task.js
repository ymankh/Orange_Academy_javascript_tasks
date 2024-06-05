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
  return num1 * num2;
}

console.log(` 5 multiplied by 68 equal to ${multiply(5, 68)}`);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age) {
  if (age >= 21) return "yes you can";
  return `please come back after ${21 - age} years to get one`;
}

canIGetADrivingLicense(21);
canIGetADrivingLicense(18);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2) {
  return str1.length === str2.length;
}

/*
11
Write a function called largerNumber
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNumber(5,6)
=> 6

Ex: largerNumber(5,3)
=> 5
*/

function largerNumber(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

/*
12
Write a function called smallerNumber
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNumber(8,6,7)
=> 6

Ex: smallerNumber(5,99,34)
=> 5

Ex: smallerNumber(5,99,3)
=> 3

Ex: smallerNumber(5,3,3)
=> 3

*/

function smallerNumber(num1, num2, num3) {
  if (num1 <= num2 && num1 <= num3) return num1;
  if (num2 <= num1 && num2 <= num3) return num2;
  if (num3 <= num2 && num3 <= num1) return num3;
}

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(...strings) {
  strings.sort((str1, str2) => str1.length - str2.length);
  return strings[0];
}

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","school","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(...strings) {
  strings.sort((str1, str2) => str2.length - str1.length);
  return strings[0];
}

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(num) {
  return num % 2 === 0;
}

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number) {
  return number % 2 === 1;
}
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num) {
  return num < 0 ? num * -1 : num;
}

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
  return Math.random();
}

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(num1, num2) {
  return Math.random() * (num2 - num1) + num1;
}

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(gradeInNumber) {
  if (gradeInNumber < 49) return "F";
  if (gradeInNumber < 69) return "D";
  if (gradeInNumber < 84) return "C";
  if (gradeInNumber < 94) return "B";
  return "A";
}

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/


function counter() {
  if(! this._count) this._count = 0; return this._count++
}


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter() {
  let val = this._count;
  this._count = undefined;
  if (! val) return 0
}
