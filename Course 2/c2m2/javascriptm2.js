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

//objects

var store_manager={}; //empty object literal
store_manager.name="Jeff";
store_manager.health="hundo";
store_manager.greeting="Yo yo yo";
store_manager.age=20;
//name,health,greeting and age are properties of the store_manager object
//we can also declare the properties inside the object as follows:
var assistant={
    name:"Zach",
    socialskills:50,
    health:"hundo",
    age:23
}


var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

var fruits = [];
arropsfruits(fruits);

function arropsfruits(input){
    input.push("apple");
    input.push('pear');
    console.log("apple and pear added: \n");
    console.log(fruits);
    input.pop();
    console.log("popped: \n");
    console.log(fruits);
}


function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr; // The array is returned to the calling code.
}

fruits=arrayBuilder("pen","pineapple","kiwi");
console.log("new array: \n");
console.log(fruits);
arropsfruits(fruits);

//Math objects:

//constants:
var e=Math.E;
var pi=Math.PI;

console.log(e,pi);
//rounding using math:

console.log("Ceiling 2.1: ",Math.ceil(2.1));
console.log("Floor 2.9: ",Math.floor(2.9));

console.log("rounding 2.5: ",Math.round(2.5));
console.log("rounding 2.4: ",Math.round(2.4));
console.log("rounding 2.6: ",Math.round(2.6));

console.log("trim 2.4: ",Math.trunc(2.4));


// //power operations

// Math.pow(2,3) //2^3

// Math.sqrt(16) //square root

// Math.cbrt(8) //cube root

// Math.abs(-10) //absolute value

// //log operations

// Math.log(x)     //log of x to the base e
// Math.log2(x)    //log of x to the base 2
// Math.log10(x)   //log of x to the base 10

// //string ops

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
"Wo".concat("rl").concat("d"); // 'World'

var greet = "Hello"

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "



var clothes=[];
clothes.push("tommy");
clothes.push("golf");
clothes.push("boss");
clothes.push("lacoste");
clothes.push("bugatti");
clothes.pop();
clothes.push("yves saint laurent");

console.log(clothes[3]);

var favcar={};
favcar.color="bleu";
favcar.convertible=true;
console.log(favcar);



//carobject with function
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

var c = null
var a =5;
try {
    console.log(c+d);
} catch (error) {
    console.log("Error occured");
}

try {
    throw new Error("Not happenin kid");
} catch (error) {
    console.log("LETS GET LOUD !")
}

function addTwoNums(a,b){
    try{
        if(typeof a!=typeof b){
            throw new TypeError("Not happenin kid");
        }else{
            console.log(a+b);
        }
    }catch(err){
        console.log(err);
    }
}

addTwoNums(5,"55");
addTwoNums(5,5);