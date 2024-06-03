/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

console.log("zakat task");
let x = 250;
let zakat = 0.025 * x;
console.log(`The value of zakat for the amount ${x} is ${zakat}`);
console.log("\n ");

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

console.log(`
after adding comas "," to the array [ 1,7  9  45, ] it become [1, 7, 9, 45 ]
and the array  ["Str" "alex","moh"

'the','fox' 'over' lazy, 'dog',  ]
 become ["Str", "alex", "moh", "the", "fox", "over", "lazy", "dog"]
`);

[1, 7, 9, 45];
["Str", "alex", "moh", "the", "fox", "over", "lazy", "dog"];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(
  `the index of  "Banana" in the fruit array ["Tomato", "Banana", "Watermelon"] is ${fruits.indexOf(
    "Banana"
  )}`
);

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

let myFavoriteThings = [
  "Mansaf",
  "Mgadara",
  "football",
  "basketball",
  "Inception",
  "The dark night",
];

console.log(`my favorite things are ` + myFavoriteThings.join(" "));

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let myArray = [1, 4, 5];
let firstVariable = myArray[0];

console.log(
  `The first element of the array myArray = [1, 4, 5] is ${firstVariable}`
);

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

let myOtherArray = [1, 4, 5];
let LastValue = myOtherArray[myOtherArray.length - 1];

console.log(
  `the last element in the array [1, 4, 5] is myOtherArray[myOtherArray.length - 1] = ${
    myOtherArray[myOtherArray.length - 1]
  }`
);
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

let array = [0, 5, 7, 9];
array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);

console.log(`The result of the array [${array.join(", ")}]`);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/

var array2 = [5, 9, -7, 3.5];
console.log(`
The original array is [${array2.join(", ")}] 
push(1) result is ${array2.push(1)} and the array becomes [${array2.join(
  ", "
)}] 
unshift(68.5) result is ${array2.unshift(
  68.5
)} and the array becomes [${array2.join(", ")}]
shift result is ${array2.shift()} and the array becomes [${array2.join(", ")}]
pop result is ${array2.pop()} and the array becomes [${array2.join(", ")}]

`);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => {
  return a - b;
});
console.log(
  `the array [${arr1.join(" ,")}] after sorting become [${arr1
    .sort((a, b) => {
      return a - b;
    })
    .join(", ")}]`
);
