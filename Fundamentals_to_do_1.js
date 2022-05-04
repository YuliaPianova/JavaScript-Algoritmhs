



//Print -52 to 1066
//Print integers from -52 to 1066 using a FOR loop.

for (var num = -52; num < 1067; num = num+1){
    console.log(num);
}
console.log("Done");
console.log("----------------");


//Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
    for(var num =1; num < 99; num = num+1) {
        console.log("good morning!");
    }
}
beCheerful();
console.log("----------------");



//Multiples of Three – but Not All
//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for ( var num = -300; num < 1; num = num+1)
{
    if(num % 3 ==0)
    {
        if(num == -6 ){
            continue;
        }
        if(num == -3 ){
            continue;
        }

    console.log(num);
    }
    
}
console.log("----------------");



//Printing Integers with While
//Print integers from 2000 to 5280, using a WHILE.

var num = 1999;
while ( num < 5280){
    num = num + 1;
    console.log(num);
}
console.log("----------------");


//You Say It’s Your Birthday
//If 2 given numbers represent your birth month and day in either order, 
//log "How did you know?", 
//else log "Just another day...." 

function birthday(num1, num2){
    if ( num1 == 5 && num2 == 15){
        console.log("How did you know?");
    }
    else{
        console.log("Just another day");
    }
}
birthday(2,20);
console.log("----------------");


//Leap Year
//Write a function that determines whether a given year is a leap year. 
//If a year is divisible by four, it is a leap year, 
//unless it is divisible by 100. 
//However, if it is divisible by 400, then it is.

function year(num){
    
    if(num % 100 ==0 || num % 4 !=0){
        console.log("not a leap year");
    }
    else if(num % 400 ==0 || num % 4 ==0){
        console.log("It is a leap year");
    }
    
}
year(4000);



//Print and Count
//Print all integer multiples of 5, from 512 to 4096. 

for( num =512; num < 4096; num = num+1){
    if(num % 5 == 0){
        console.log(num);
    }
}


//Multiples of Six
//Print multiples of 6 up to 60,000, using a WHILE.
var num = 0;
while(num<60000){
    num = num+6;
    console.log(num);
}
console.log("----------------");


//Counting, the Dojo Way
//Print integers 1 to 100. 
//If divisible by 5, print "Coding" instead. 
//If by 10, also print " Dojo".

for(var num = 1; num < 101; num = num+1){
    if(num % 10 ==0){
        console.log("Coding Dojo ");
    }
    else if (num % 5 == 0 ){
        console.log("Coding");
    }
    else{console.log(num);

    }
}   
console.log("----------------");


//What Do You Know?
//Your function will be given an input parameter incoming. 
//Please console.log this value.

input = "something";
function functionName(input){
    
        console.log(input);
    }
functionName(input);


//Countdown by Fours
//Log positive numbers starting at 2016, counting down by fours (exclude 0), 
//without a FOR loop.

var num = 2020;
while( num > 4){
    num = num - 4;
    console.log(num);
}
console.log("----------------");


//Flexible Countdown
//Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, 
//using a FOR. 

var lowNum = 3;
var highNum = 200;
var mult = 3;

for(n = lowNum; n < highNum; n = n+1){
    if(n % mult == 0){
        console.log(n);
    }

}
console.log("----------------");




