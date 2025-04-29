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

