// let todo =[];
// let reg = prompt("enter your request: ");

// while(true){
//     if(reg =="quit"){
//         console.log("app stop");
//         break;
//     }
//     else if(reg =="list"){
//         console.log("-------------------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("-------------------");
//     }
//     else if(reg=="add"){
//         let task=prompt("enter your item in list");
//         todo.push(task);
//         console.log("task add");
//     }
//     else if(reg=="delete"){
//         let indx=prompt("enter your item is delet in  list");
//         todo.splice(indx,1);
//         console.log("task delet");
//     }
//     else{
//         let task1=prompt("item is wrong");
//     }
//     reg =prompt("Please enter your request");
// }



let num =20;
if(num%10==0){
    console.log("good");
}else{
    console.log("bad");
}

// let name =prompt ("enter your name: ");
// let age = prompt("enter your age: ");
// alert(` name is ${name} and your  age is ${age} `);
// console.log(` name is ${name} and your  age is ${age} `);

let quarter =4;
switch(quarter){
    case 1 : console.log("January","February","March");
    break;
    case 2 : console.log("April","May","June");
    break;
    case 3 :console.log("July","August","September");
    break;
    case 4 :console.log("Octiber","November","December");
    break;
    default:console.log("Not a quater");
}


let str = "apples";
if((str[0]=='a' || str[0]=='A') && (str.length>5)){
    console.log("golden String");
}else{
    console.log("Not a golden string");
}


let a =10;
let b=30;
let c= 200;
if(a>b && a>c){
    console.log("a is greater");
}
else if(b>a && b>c){
    console.log("b is greater");
}else{
    console.log("c is greater");
}


let num1= 32;
let num2 = 47562;
if((num1%10) == (num2%10)){
    console.log("last digit same is", num1%10);
}else{
    console.log("Last digit not same");
}


let arr = [7,9,0,-2];
let n=3;
let ans = arr.slice(0,n);
console.log(ans);
let answer = arr.slice(arr.length-n);
console.log(answer);


let str1=prompt("Please enter a string");
if(str1==0){
    console.log("String is empty");
}else{
    console.log("String is not empty");
}


let str2 ="PraDeep";
let index=3;
if(str2[index]==str2[index].toLowerCase()){
    console.log("character index is lower case");
}else{
    console.log("charcter index is not lower case");
}


let arr1=["Pradeep",3,4,"Komal",6,7];
let item=5;
if(arr1.indexOf(item)!= -1){
    console.log("item is present");
}else{
    console.log("item is not present");
}


let string = prompt("Please enter a string");
console.log(`original string = ${string}`);
console.log(`string without spaces = ${string.trim()}`);


let arr2 = [1,2,3,4,5,6,2,3];
let nums = 3;
for( let i=0;i<arr2.length;i++){
    if(arr2[i]==nums){
        arr2.splice(i,1);
    }
}
console.log(arr2);


let number1 = 287152;
let count=0;
let copy = number1;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);


let number2 = 287152;
let sum=0;
let copy1 = number2;
while(copy1>0){
    digit = copy1%10;
    sum+=digit;
    copy1=Math.floor(copy1/10);
}
console.log(sum);


let array = [1,2,3,10,4,5,6,7];
let max=0;
for(let i=0;i<array.length;i++){
    if(max<array[i]){
        max=array[i];
    }
}
console.log(max);

let fact =0;
let start =1;
for(let i=1;i<=fact;i++){
    start *=i;
}
console.log(`factorial of ${fact} is ${start}`);


let dice =Math.floor(Math.random() * 6)+1;
console.log(dice);


const car={
    name:"maruti",
    model:"suzuki",
    color:"white"
};
console.log(car.name);
console.log(car.color);


const student = {
    name:"Pradeep",
    city:"Delhi",
    age:23,
    marks:90
};
student.city="new york";
student.country=" United State";
console.log(student);


