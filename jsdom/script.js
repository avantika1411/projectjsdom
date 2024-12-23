// var h=document.querySelector("a");//ager ssare h1 ko target karna hai to queryselectorall use karo
// //isme age ide use karege to # lagana padega aur age class use karege to . lagana padega ya fir getelementbyclassname() ya get getelementbtid()use kar sakte hai
// h.textContent="aap kese ho";//isme tags use nhi kar sakte varna vo bhi print ho jayega
// h.innerHTML="<i>aap kese ho</i>" //isme tags aa dsakte hai
// h.style.color="red";
// h.style.backgroundColor="black";
// h.setAttribute("href","https://chatgpt.com");
// h.addEventListener("click",function(){
//     h.style.color="green";
// })
//  var arr=[{
//     name:'Sarthak',
//     weight:69
//  },
//  {
//     name:'Harsh',
//     weight:50
//  },{
//     name:'Harshi',
//     weight:45
//  },{
//     name:'Ajay',
//     weight:67
//  },{
//     name:'Patel',
//     weight:98
//  },{
//     name:'Akarsh',
//     weight:99
//  },{
//     name:'Anuj',
//     weight:60
//  }];
//  var sum=0;
//  arr.forEach(function(e){
//     sum=sum+e.weight;
//  })
//  console.log(sum);
 
// if(sum<=500){
//     console.log("beth sakte hai"); 
// }else{
//     console.log("nahi beth sakte");
// }
 var arr=[{
    model:'samsung',
    price:50000,
    color:'black',
    quantity:43
 },
 {
    model:'Iphone 13',
    price:70000,
    color:'white',
    quantity:64
 },
 {
    model:'One plus',
    price:10000,
    color:'Blue',
    quantity:54
 }];
var total=0
arr.forEach(function(e){
     total=total+(e.price*e.quantity);
})
console.log(total);
