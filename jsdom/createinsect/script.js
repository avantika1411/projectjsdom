let btn=document.querySelector('button');
let body=document.querySelector('body');
btn.addEventListener('click',function(){
    let img=document.createElement('img');
    let left=Math.random()*99;
    let rotate=Math.random()*360;
    body.appendChild(img);
    img.setAttribute('src','https://e7.pngegg.com/pngimages/737/235/png-clipart-butterfly-desktop-butterflies-purple-brush-footed-butterfly.png');
    img.style.height='70px';
    let top=Math.random()*99;
    img.style.position='absolute';
    body.style.backgroundColor='black';
    img.style.rotate=rotate+'deg';
    img.style.left=left+'%';
    img.style.top=top+'%';
})