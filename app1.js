var fortunes=[

    "You will get Married",
    "You will get rich",
    "You will have Twins",
    "You will move to a different state",
    "Be careful you are about to get in big trouble",
    "You will get your dream job",
    "You will get a new car after a bad accident",
    "You Will be taking a World tour",
    "You will learn how to code",
    "You will be an American Idol"    
];

function tellFortune() {
    var randomNumber = Math.floor(Math.random() * fortunes.length);
    console.log("random number: " + randomNumber);
    document.getElementById("btn").innerHTML = fortunes[randomNumber];};









// function tellFortune(numChild, jobTitle, partner, location ){
//     var future= "You will be a " + jobTitle + " in " + location + " and married to " + partner + " with " + numChild +" kids "; 
//     console.log(future);   
// }
// tellFortune(3, "Nascar Racer", "Policy anaylst", "San Diego");
// tellFortune(1, "Software Engineer", "Doctor", "Spain");
// tellFortune(2, "Doctor", "Lawyer", "Scottland");