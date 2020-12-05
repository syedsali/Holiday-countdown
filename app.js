console.log('Hello, World');


// // //this will get the time// 


//     var currentTime= new Date();
//     console.log (currentTime);


//     var time= document.getElementById("time");
//     time.innerHTML= currentTime.toLocaleTimeString();



// //this will get the date//


// var date= document.getElementById("date");
//     date.innerHTML= currentTime.toLocaleDateString();







// //this will get the day of the week //

// var daysOfTheWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
// var DOW= document.getElementById("week-day");
// DOW.innerHTML= daysOfTheWeek [currentTime.getDay()];





                            // NOTES // 

// alert("My name is Syed Ali");
// confirm("Are you at least 18?");
// prompt("Are you a Web Developer?");

// var name="Syed"; //string
// var age= 32; //number
// var favfood= "Pakistani Food";
// var ishungry= true; // boolean mean true or false 
// var dayOfweek= ["Monday", "Tuesday", "Wednesday", "Thuresday"];

//  alert('welcome' + ' '+ name + ' ' + age +' ' + favfood);
//  console.log (dayOfweek [1]);











// // 1- // Write an expression that uses at least 3 different arithmetic operators.

// // The expression should equal 42.

// // Hint: +, -, *, /, and % are possible arithmetic operators

// // Your Code:

var number= 7*6
console.log(number)


// 2- // Create a string with the name of your favorite food. The first letter of the string should be capitalized.

// // Your Code:
 
var Food= "Pakistani food";
console.log(Food);


// 3-// Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the udaciFamily to the console using console.log.

// // Your Code:

var egFamily= new Array("Syed", "Sheily", "Kevin");
console.log(egFamily);



// 4-// Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// // Your Code:


var boolean= "ALL Strings are CrEaTeD equal" != "All STRINGS are CrEaTED Equal"
console.log(boolean)


// 5-// Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
//  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
//  //F = C x 1.8 + 32
//  //Log the fahrenheit variable to the console.

// // Your Code:

var celsius= 12;
var fahrenheit= celsius* 1.8+32;
console.log(fahrenheit);


// 6-// Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// // Blowing from the west
// // Fallen leaves gather
// // In the east.
// // Each string should be printed on its own line.

// // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// // Your Code:

var poem= "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east"
var place=document.getElementById(haiku);

console.log(poem);




// 7-// Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

// // red blue
// // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

// // Your Code:

var thingOne="red"
var thingTwo="\nblue"
console.log(thingOne+ " " + thingTwo)


// 8- // Create a variable called fullName and assign it your full name as a string.

// // Your Code:

let fullName= "SyedS.Ali"
console.log(fullName)

// 9- // Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

// // Print the total to the JavaScript console.

// // Hint: 15% in decimal form is written as 0.15_._

// // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

// // Your Code:

let bill= 10.25 + 3.99 + 7.15;
let tip= 0.15  * bill;
let total = tip + bill;
console.log("$"+ total.toFixed(2));

// 10- // "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
// // "Hi, my name is James. I love baseball. In my spare time, I like to read."
// // Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).

// // Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.

// // Your Code:
let firstName= "Julia";
let interest= "cats";
let hobby= "Video Games";
let awesomemessage= "Hi, my name is "+ firstName +"." + "I love "+ interest +"." + "In my Spare time, I like to play "+ hobby + ".";
console.log(awesomemessage);


// -11- //Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
// //'small' variable lowercase and the 'big' variable capital.
// //console.log out the results

let big= "I am Big like an elephant!";
let small= "\nI am small like a mouse!";
console.log(big.toUpperCase()+small.toLocaleLowerCase() );



