
let btn=document.querySelector("button");
let h1=document.querySelector("h1");
flag=1;
btn.addEventListener('click',function(){
    if(flag==1){
        setTimeout(function(){
        btn.style.borderColor='green';
        btn.style.color='green';
        btn.innerHTML='remove friend';
        h1.innerHTML='friends';
        h1.style.color='green';
        },3000);

 btn.style.borderColor='';
 btn.style.borderColor='yellow';
        btn.style.color='yellow';
        btn.innerHTML='adding...';
        h1.innerHTML='requesting....';
        h1.style.color='yellow';
        flag=0;
    }else{
        btn.style.borderColor='rgba(163, 54, 54, 0.773)';
        btn.innerHTML='add friend';
        btn.style.color='rgba(163, 54, 54, 0.773)';
        h1.innerHTML='stranger';
        h1.style.color='rgba(163, 54, 54, 0.773)';
        flag=1;
    }
})