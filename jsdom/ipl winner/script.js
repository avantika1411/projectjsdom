var nums=['CSK','MI','RCB','DC','GT','KKR','LSG','PKRR']
var h1=document.querySelector('h1');
var btn=document.querySelector('button');
btn.addEventListener('click',function(){
       var n=Math.floor(Math.random()*nums.length);
       h1.innerHTML=nums[n];
})