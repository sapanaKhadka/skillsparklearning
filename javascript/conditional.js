let age=17;
if(age>=18){
    console.log("Yoy are eligible to vote");
}
else{
console.log("You are not eligible to vote");
}
// number is  even or odd
let num=0
if (num % 2==0){
console.log("print even number");
}else{
    console.log("print odd number");
}
//WAP to check a number is positive or negative
let a=-1;
if(a>=0){
    console.log("number is positive");
}
else {
    console.log("number is negative");
}
//WAP to check whethher a number is divisible by 5 or not
let number=5;
if(number%5==0)
{
    console.log("divisible");
}
else
{
    console.log("not divisible");
}
//WAP to check whether the grade of the student based on the marks.
let n=105;
if(n<=40)
{
    console.log("fail");
}else if(n>=50 && n<=60)
{
    console.log("third division");
}
else if(n>=60 && n<=70)
{
    console.log("second division");
}
else if(n>=70 && n<=80)
{
    console.log("first division");
}
else if(n>=80 && n<=100)
{
    console.log("dist");
}
else
{
    console.log("marks is invalid");
}
// switch case
let day=3;
switch(day){
    case 1:
        console.log("sunday");
        break;
case 2: 
console.log("monday");
break;
case 3:
    console.log("tuesday");
    break;
    case 4:
    console.log("wed");
    break;
    case 5:
        console.log("thr");
        break;
        defult:
        console.log("its wrong");
        break;
}
//complex condition Evalution
let c=6, d=14;
if(c+d>20){
    if(c>d){
        console.log("condition1");
    }else {
        console.log("condition2");
    }
}else {
    if(c<d) {
        console.log("condition3");
    }else {
        console.log("condition4");
    }
}
//2. Handling different data types
let value =5;
if(value=="5") {
    console.log("strictly Equal");
} else if(value=="5") {
    console.log("Loosely Equal");
} else {
    console.log("not equal");
}
//3.logical operator
let x=0;
let y=false;
if(x||y) {
    console.log("output1");
} else if(!x && !y){
    console.log("output2");
} else {
    console.log("output3");
}
// Multiple Nested conditions
let p = 20, q = 30, r = 25;
if (p < q && q > r) {
if (p + r > q) {
console.log("Output A");
} else {
console.log("Output B");
}
} else {
if (p > r || q < r) {
console.log("Output C");
} else {
console.log("Output D");
}
}
// chained ternary operator
let agee = 17;
let category = (agee >= 18) ? "Adult" :
(agee >= 13) ? "Teenager" :
(agee >= 3) ? "Child" : "Toddler";
console.log(`Category: ${category}`);
//Questions with switch-case Statements
//6.	Basic Switch-Case:
let color = "Green";
switch (color) {
case "Red":
console.log("Stop");
break;
case "Green":
console.log("Go");
break;
case "Yellow":
console.log("Slow Down");
break;
default:
console.log("Unknown Signal");
}
//7.	Switch-Case with Fall-Through:
let level = 2;
switch (level) {
case 1:
console.log("Beginner");
case 2:
console.log("Intermediate");
case 3:
console.log("Advanced");
break;
default:
console.log("Invalid level");
}
//8.	Switch-Case with Numbers:
let dayNumber = 4;
switch (dayNumber) {
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;
default:
console.log("Unknown Day");
}
//9.	Switch-Case without Breaks:
let rating = 'A';
switch (rating) {
case 'A':
console.log("Excellent");
case 'B':
console.log("Good");
case 'C':
console.log("Average");
case 'D':
console.log("Poor");
break;
default:
console.log("Fail");
}
//10.	Switch-Case with Expressions:
let numberr = 8;
switch (true) {
case (numberr < 5):
console.log("Small");
break;
case (numberr >= 5 && numberr <= 10):
console.log("Medium");
break;
case (numberr > 10):
console.log("Large");
break;
default:
console.log("Invalid numberr");
}
////// For loop





