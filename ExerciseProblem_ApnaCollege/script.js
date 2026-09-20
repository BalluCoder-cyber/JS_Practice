// Question:1
/*
 let names = prompt("Enter your name");
 let age = prompt("Enter your age");
 alert(`${names} is ${age} year old`)
*/

// Question:2
/* 
let quarter =  prompt("Enter your quarter");

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
/*
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0;i<arr.length; i++){
    if(arr[i] == num){
       console.log(arr.splice(i,1)) ;
    }
}

//Question:12
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

// Question:15
/*
let dice = Math.floor(Math.random()*6+1);
console.log(dice);

//Queston:16
let car = {
    carName : "Bugatti Sheron",
    model : "Top Model 2030",
    color : "Mate Black"
}
console.log(car);

//Question:17 
let person = {
    personName: "Balwant Ahirwar",
    age: 20,
    city: "London",
}
person.city = "Hydrabad";
person.country = "India";
console.log(person);
*/

// Question:18
/*
let arr = [2,4,7,5,7,8,4,3];
let n = 5;
let arrCopy = [];
function largestNumber() {
   for(let i=0; i<arr.length; i++){
      if(arr[i] > n){
        arrCopy[i] = arr[i]; 
      }
   }
    return arrCopy;
}
console.log(largestNumber());


//Question:19
let str = "abcdabcdefgggh";
let ansStr = "";
for(let i=0; i<str.length; i++){
    if(ansStr.indexOf(str[i]) == -1){
        ansStr += str[i];
    }
}
 console.log(ansStr);

//Question:20
let country = ["Australia", "Germany", "United States of America","braxil","india"];
let longest = "";
let longestCountry = function (country){
       for (let i=0; i<country.length; i++) {
          if(longest.length < country[i].length){
            longest = country[i];  
          }
       }
       return longest;

}
console.log(longestCountry(country));

//Question:21
let str1 ="My name is balwnat ahirwar and i am pursing b-tech from gyan sagar college of engineering..." 
let vowel = (str1)=>{
     let count = 0;
    for(let i=0; i<str1.length; i++){     
        if(str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u"){
            count++;
        }
    }
    return count;
}

console.log( vowel(str1));

//Question:22
let start = 100;
let random = (start)=>{
    return Math.floor(Math.random()*start+100);
}
console.log(random(start));
*/

//Question:23
/*
let arr = [55, 44, 33, 22, 11];
let arrayAverage = (arr) => {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(arrayAverage(arr));

//Question:24
let number = Number(prompt("Enter your number"));
let isEven = (number) => {
    if (number % 2 == 0) {
        return "Number is Even";
    } else {
        return "Number is Odd";
    }
}
console.log(isEven(number));

//Question:25
const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);

//Question:26
let length = 4;
function callback() {
    console.log(this.length);
}
const object1 = {
    length: 5,
    method(callback) {
        callback();
    },
};
object1.method(callback, 1, 2);
*/

//Question:27
/*
let arr = [2,3,9,8,0,67,5];
let sq = arr.map((el)=>{
    return el*el;
});
console.log(sq);
let sum = sq.reduce((add , curr)=>{
    return add+curr;
});
console.log(sum)
let av = sum/arr.length;
console.log(av);

//Question:28
let arr1 = [4,2,5,7,1,9];
let newArr = arr1.map((el)=>{
    return el+5;
});
console.log(newArr);

//Question:29
let arr2 = ["rohit","sohit","sonu","lalu"];
let newarr2 = arr2.map((el)=>{
    return el.toUpperCase();
});
console.log(newarr2);

//Question:30
let doubleAndReturn = (arr, ...args)=>[
    ...arr,
    ...args.map((el)=>{
        return el*2;
    })
];
console.log(doubleAndReturn([4,2,5],7,7));

//Question:31
let mergeObjects = (obj1, obj2) =>({...obj1, ...obj2});
console.log(mergeObjects({a:1,b:2,c:4},{e:6,g:7,i:1}));
*/