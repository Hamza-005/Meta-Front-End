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