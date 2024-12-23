// var let
// var a=10;
// let b=10;
//alert("hello");
// prompt("ent 1")
// console.log("kello");
// console.warn("hello");
// console.error("hello")
//  confirm("hello");
// console.log("hello "+a)
// template literalls me back tick use hote hai jese
// console.log(`hello ${a}`);
// console.log(`hello ${10*10}`);
//comment ke liye command slash mac me aur control slash windows me
//data typees javascript me num string jese hote hai isme int double nhi hota
//10 num hoga aur 10.2 bhi num hoga
//string plus string strng dega
//strinng plus num string dega jese hello+10 hame hello10 dega

//'1'+1=11
//'1'-1=0
//'hello'-1=NaN(not a number)
//hello*hello=Nan
//data type js me not defined un defined aur booleans bhi hote hai
// console.log(a) not defined
// var a;
// console.log a un defined
//nan ka type num hota hai
//clear funcion me kuch return nhi hota hai isliye vo undefined dikhata hai
//typeof function 
//operators
//var let const
// {

//   var a=10;
// }
// console.log(a);
// // {
// //     let b=10;
// //   }
// //   console.log(b);
//   const c=30;
//   c=24;
//   console.log(c);
//let aur var me main te diference hai ki var me scope ke bahr bhi element print ho jata hau air let me nhi hiota
//arithmatic + - * / %
//assignment example var a=10;
//logical && || !
//relational operator > < >= <= == === 
//conditional ternary
//comparson
//conditionsals if else elseif() switch
// let a=12;
// if(a===10){
//     console.log("yes");
// }else if(a>10){
//     console.log("no");
// }else{
//     console.log("min");
// }
//switch
// let a=10;
// switch(a){
//   case 1:console.log(1);
//   case 2:console.log(2);
//   case 3:console.log(3);
//   case 4:console.log(4);
// default:console.log("no");
// }
//loops
// for(let i=0;i<3;i++){
//     console.log(i);
// }
// let a=0;
// while(a<3){
//     console.log(a);
// a++;
// }
//functions- tab use karte hai jab hum hamara code abhi nhi future me use karna chahate hai mainly reuse karne ke liye
// function abcd(a,b,c){ //parametrs
// console.log("yes");
// }
// abcd(10,20,30);arguments
// function sum (a,b){
//    console.log(a+b);
// }
// let k=sum(1,2);
// console.log(k);
//arrow function modern js
// let sum=(a,b) => {
//     console.log(a+b);
// }
// sum(10,20);
//foreach function ye string ke liye use nhi hoga
//for each tab use hota hai jab hame norally koi calculation pringt karana ho  aur map tab use hota hai jab hame naye array 
//me store karana ho
// let arr=[10,20,30];
// // arr.forEach(function sum(x){
// //     console.log(x+10);
// // })
// let mar=arr.map((val)=>{
//     return val;
// })
// console.log(mar);
//filter funtion naya arraya create kar sakta hai koi condition ke basis pr
// var arr=[1,2,3];
// var ans=arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(ans);
// ise hum ese bhi likh sakte hai
//arr.forEach(functionname)
//higher order function vo hota hai jo kisi function ko return kara raha hai ya use as a parameter le raha hai
// question agr Sum()call kiya to error kyu nhi aaya
//hoisting- variables and functions ar hoisted which means their declaration is moved to the top
//var a=12;
//var a;
//a=12
//example of hoisting(happens only in var)
// console.log(a);
// let a=12 
// arrays- jab hame ek se jayada value store karni hoti hai tab hum arrays use karte hai
// var a=[12,13];
//a[0]=12;
//a[1]=13;
//var b=a;
//b.pop();
//a=b=[12]; 6this is called reference type;
//push pop shift unshift splice
// ek ke baare me baat ki to vo hai object i.e ek bande ki details ko hold karna
//blank object;
//let a={};
// let arr=[1,2,3,4];
// let ans=arr.reduce(function(val,acc){
//       return acc+val;
// },0);
// console.log(ans);
//includes function array me koi value hai y nhi check karta hai
//splice
//objet banane ke do tarike hote hai ek direct aur ek new keyword ka use karke
// let obj={
//     name:'bhagyashree',
//     branch:'CSE',
//     rollno:68,
//     message:function(){
//         console.log("hello");
//     }
// }
// console.log(obj.message);
// let obj1 = new Object({
//     name: 'bhagyashree',
//     branch: 'CSE',
//     rollno: 68
// });
// console.log(obj1.name);
//js me this ka matlab alag alg context me alg alg hota hai
//destructuring
// let {name,branch,rollno,message}={
//      name:'bhagyashree',
//      branch:'CSE',
//      rollno:68,
//      message:function(){
//          console.log("hello");
//      }
//     }
// let[a,b,,c]=[1,2,3,4];call a,b,c
//json
 
// let obj1 = new Object({
//     name: 'bhagyashree',
//     branch: 'CSE',
//     rollno: 68
// });
// let json=JSON.stringify(obj1);
// let c=JSON.parse(json);
