// Question:1
/* let names = prompt("Enter your name");
 let age = prompt("Enter your age");
 alert(`${names} is ${age} year old`)
*/

// Question:2
/* let quarter =  prompt("Enter your quarter");

switch(quarter){
    case "1" : console.log("January , February, March");
    break;
    case "2" : console.log("April, May, June");
    break;
    case "3": console.log("July, August, September");
    break;
    case "4": console.log("Octoaber, November,December");
    break;
    default: console.log("Not a Quarter");
}
*/   

//Queston:3
/* 
let str = prompt("Enter your string");
if(str[0] == "A" || str[0] == "a"){
    console.log(`${str} is a golden string... `);
}else{
    console.log(`${str} is not a golden stirng... `);
}
*/

//Question:4
/*
let num1 = 11114;
let num2 = 11150;
let num3 = 1111600;
let largest = Number.MIN_SAFE_INTEGER;
if(num1 > num2){  
    if(num1 > num3){
        console.log("num1 is greater");
    }else{
        console.log("num3 is greater");
    }
}else if(num2 > num3){
    console.log("num2 is greater");
}else{
    console.log("num3 is greater");
}
*/

//Question:5
/*
let num1 = String(542);
let num2 = String(442);
if(num1[num1.length-1] === num2[num2.length-1]){
    console.log("It has same last value");
}else{
    console.log("last number is not same");
}
*/

//Question:6
/*
let arr = [2,3,4,5,1,6,7];
console.log(arr.slice(0,2));

//Question:7
let arr1 = [2,3,4,5,1,6,7]; 
console.log(arr1.slice(arr1.length-4));

//Question:8
let str = "  ";
if(str.trim().length == 0){
    console.log("string is a blank");
}else{
    console.log("String is not blank");
}

//Question:9
let str1 = "Balwant Ahirwar";
if(str1.charCodeAt(11) > 90){
    console.log("character is  lowercase");
}else{
    console.log("character is upper case");
}

//Question:10
let arr2 = [2,3,4,5,1,6,7]; 
let n = Number(prompt("Enter the element"));
if(arr2.indexOf(n) == -1){
    console.log("Element is not in array");
}else{
    console.log("Element is in array");
}
*/

// Question:11
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0;i<arr.length; i++){
    if(arr[i] == num){
       console.log(arr.splice(i,1)) ;
    }
}

//Question:12
/*
let number = 287152;
let sum = 0;
let last = number;
while(last > 0){
    digit = last%10;
    sum += digit;
    last = Math.floor(last/10);
}
console.log(sum);

//Question:13
let fact = 7;
let multifact = 1;
if(fact == 0 || fact == 1){
    console.log(1);
}else{
    for(let i=1; i<=fact; i++ ){
        multifact *= i;
    }
    console.log(multifact);
}

//Question:14
let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
let largest = Number.MIN_SAFE_INTEGER;
for(let i=0; i<=arr1.length; i++){
    if(largest < arr1[i]){
        largest = arr1[i];
    }
}
console.log(largest);
*/
