let bulb=document.querySelector("#circle");
let btn=document.querySelector("button");
flag=1;
btn.addEventListener('click',function(){
    if(flag==1){
        bulb.style.backgroundColor='yellow';
        btn.innerHTML='off';
        flag=0;
    }else{
        bulb.style.backgroundColor='transparent';
        btn.innerHTML='on';
        flag=1;
    }
})
