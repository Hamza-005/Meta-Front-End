//recursion

function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1 || n==2) {
        return 1;
    } else{
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(5));


function consoleStyler(color, background, fontSize, txt) {
    var msg = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(msg, style)
}

function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px"
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle)
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle)
    } else {
        console.log(msg, style)
    }
    
}

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')

function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt)  
    celebrateStyler(reason)
    
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
