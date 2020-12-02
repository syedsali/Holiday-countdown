console.log('Hello, World');

// //this will get the time// 


    var currentTime= new Date();
    console.log (currentTime);


    var time= document.getElementById("time");
    time.innerHTML= currentTime.toLocaleTimeString();



//this will get the date//


var date= document.getElementById("date");
    date.innerHTML= currentTime.toLocaleDateString();







//this will get the day of the week //

var daysOfTheWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var DOW= document.getElementById("week-day");
DOW.innerHTML= daysOfTheWeek [currentTime.getDay()];


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