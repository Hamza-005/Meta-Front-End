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


//loops, conditions and switches

for (let i = 0; i < 10; i++) {
    console.log("Iterration", i);
}

function traficlight(input) {
    switch (input) {
        case "green":
            console.log("GO! GO! GO!");
            input = "yellow";
            break;
        case "yellow":
            console.log("Get away while u still can");
            input = "red";
            break;
        case "red":
            console.log("Stop ! Halt mein frueind !");
            input = "green";
            break;
    }
}

console.log("\n");
var mylighttest="green";
var tempiteration=0;
if(mylighttest=="green"){
    traficlight(mylighttest);
    tempiteration+=1;

}
console.log(mylighttest);
if(tempiteration){
    console.log("\n the son of a gun made it !");
}


// age selector
console.log("\n");
var age = 10;
if(age>=65){
    console.log("You get your income from your pension");
}else if(age>=18 && age<=65){
    console.log("You get your income from your salary each month");
}else{
    console.log("You get your income from an allowance");
}

//weekly reminder
var day = 'Sunday';
switch(day) {
    case 'Sunday':
        console.log('Watch Software and Cybersec lectures',"and an hour of Coursera time");
        break;
    case 'Monday':
       console.log('Watch Networks2, Arch2 & Wireless lectures',"and an hour of Coursera time");
       break;
   case 'Tuesday':
       console.log('Head to uni for sunday lecs',"and an hour of Coursera time");
       break;
   case 'Wednesday':
       console.log('head to uni for monday lecs',"and an hour of Coursera time");
       break;
   case 'Thursday':
       console.log("Coursera day");
       break;
   case 'Friday':
       console.log("Family time , and some self care");
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}



//nested loops rocket going from x,y (0,0) to (3,8)

var myrocketx=3;
var myrockety=8;

for(var i=0; i <= myrocketx ;i++){
    for(var j=0; j <= myrockety ;j++){
        console.log("My current coordinates: "+i+","+j);
    }
}
console.log("Successfully Arived at the coordinates!");

//increments the inner loop then outer loop note: the more nested loops the slower the performance


var train=[];
train[0]=1;
train[1]=2;
console.log("new line \n");
console.log(train);

var word = "fancy";

function letter_finder(input, letter) {
    for(i = 0; i < word.length; i++) {
        if(word[i]==letter){
            console.log('Found ', letter, 'at', i)
        }else{
            console.log('No ', letter, 'at', i)
        }
    }
}
letter_finder(word, 'a');  
letter_finder(word, 'z'); 




