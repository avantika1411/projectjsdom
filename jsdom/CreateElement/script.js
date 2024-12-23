// var h1 = document.createElement('h1'); // Create an h1 element
// var body =document.querySelector('body');
// body.appendChild(h1); // Append the h1 element to the body
// h1.innerHTML="hello guyss"
// h1.style.color='red';
// h1.style.fontSize='200px';
// console.log(h1); 
var img1=document.querySelector('#img1 img')
var img2=document.querySelector('#img2 img')
var btn=document.querySelector('button')

btn.addEventListener('click',function(){
    var img1src=img1.getAttribute('src')
    var img2src=img2.getAttribute('src')
    img1.setAttribute('src',img2src)
    img2.setAttribute('src',img1src)
})
