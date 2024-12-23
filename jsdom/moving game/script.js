let img=document.querySelector('img');
let moveX=0;
let moveY=0;
document.addEventListener('keydown',function(dets){
      
      if(dets.code=='ArrowRight'){
        moveX++;
        if(moveX<=92)
        img.style.left=moveX +'%';
        else
        moveX--;
      } else if(dets.code=='ArrowLeft'){
        moveX--;
        if(moveX>=0)
        img.style.left=moveX +'%';
        else
        moveX++;
      }else if(dets.code=='ArrowUp'){
        moveY--;
        if(moveY>=0)
        img.style.top=moveY +'%';
        else
        moveY++;
      }else if(dets.code=='ArrowDown'){
        moveY++;
        if(moveY<=87)
        img.style.top=moveY +'%';
        else
        moveY--;
      }
})