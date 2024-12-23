let btn=document.querySelectorAll('button');
let body=document.querySelector('body');
  btn.forEach(function(e){
     e.addEventListener('click',function(){
        body.style.backgroundColor=e.innerHTML;
     })
})