let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let grow=document.querySelector('#grow')
let scale=0;
btn.addEventListener(
    'click',function(){
     let interval=setInterval(function(){
        scale=Math.max(Math.ceil(Math.random()*100),scale);
        h1.innerHTML=scale +'%';
       grow.style.width=scale +'%';
       if (scale===100){
        setTimeout(function(){
           clearInterval(interval);
           btn.innerHTML='downloaded';
           btn.style.pointerEvents='none';
           btn.style.opacity='0.5';
        },1)
       }
     },1000)
    }
)


