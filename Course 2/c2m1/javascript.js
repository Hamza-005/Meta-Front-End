//the basics
console.log("hello world");
//logging in style
console.log("%cHello, World", "color: blue; font-size: 40px");
//the %c is to indicate styling before a string



//variables
var hamza;
hamza = "Hamza";

var greeting;
greeting = "Hello" + hamza;

console.log("\n" + greeting);



//operators

if (1 === 1) {
    console.log("same type")
} else {
    console.log("not the same type")
}





//first exercise of module 1
var petdog = "Rex";
var petcat = "Pepper";

console.log(petdog);
console.log(petcat);

console.log("My pet dog's name is: " + petdog);
console.log("My pet cat's name is: " + petcat);

var catsound = "purr";
var dogsound = "woof";

console.log(petdog + " says " + dogsound);
console.log(petcat + " says " + catsound);

catsound = "meow";

console.log(petcat + " now says " + catsound);

console.log("I love", petcat, "so much");




//second exercise module 1

var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10)




//another way to solve this would be
if (score > 0 && score < 10) {
    console.log("Mid-level skills:", true);
} else {
    console.log("Mid-level skills:", false);
}




//check if numbers are even or not using modulus

function iseven(input) {
    let temp = input;
    if (temp % 2 == 0) {
        console.log("Is", input, "an even number?", true)
    } else {
        console.log("Is", input, "an even number?", false)
    }
}

iseven(2);
iseven(5);




