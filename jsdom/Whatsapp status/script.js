const profiles = [
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1734203007978-dca43cc0f846?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aarav Sharma",
      lastUpdated: "2 hours ago",
      status:"https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1733175697085-aa500b61ac74?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Isha Gupta",
      lastUpdated: "5 hours ago",
      status:"https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Vivaan Mehta",
      lastUpdated: "1 hour ago",
       status:"https://plus.unsplash.com/premium_photo-1679822642031-6325b141d86d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Priya Nair",
      lastUpdated: "8 hours ago",
      status:"https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rohan Kapoor",
      lastUpdated: "3 hours ago",
      status:"https://plus.unsplash.com/premium_photo-1730143959829-0e9e9f952f02?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1732480509153-b895ce4c1b64?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ananya Iyer",
      lastUpdated: "6 hours ago",
      status:"https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1734208066571-728ce1a7cafa?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kavya Mishra",
      lastUpdated: "4 hours ago",
      status:"https://images.unsplash.com/photo-1671442131445-a99f2e59850a?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1690522330763-7cdc0f1eecc4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aditya Verma",
      lastUpdated: "7 hours ago",
      status:"https://images.unsplash.com/photo-1575328189523-68242376b32a?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Diya Patel",
      lastUpdated: "10 hours ago",
      status:"https://plus.unsplash.com/premium_photo-1673002094029-7b23531aa342?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1673964918255-0fa29c913dc0?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Krish Malhotra",
      lastUpdated: "12 hours ago",
      status:"https://images.unsplash.com/photo-1545276248-812ab8cd7b0b?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  
  var allstatus=document.querySelector('#allstatus')
  var overlay=document.querySelector('#overlay')
  var sum='';
  var h3=document.querySelector('#overlay h3')
  var p=document.querySelector('#overlay p')
  profiles.forEach(function(e,idx){
     sum=sum+`<div class="onestatus" id="${idx}">
                <div id="profilephoto">
                    <img src="${e.profilePhoto}" alt="">
                </div>
                <div id="info">
                    <h3>${e.name}</h3>
                    <p>${e.lastUpdated}</p>
                </div>
            </div>`
  })
  var grow=document.querySelector('#grow')
  allstatus.innerHTML=sum;
  var image=document.querySelector('#overlay img')
allstatus.addEventListener('click',function(dets){
  var gold = dets.target.id;
   overlay.style.display='block';
   overlay.style.backgroundImage=`url(${profiles[gold].status})`
     image.setAttribute('src',`${profiles[gold].profilePhoto}`)
      h3.innerHTML=`${profiles[gold].name}`
      p.innerHTML=`${profiles[gold].lastUpdated}`
      var interval=setInterval(function(){
        incre++;
        grow.style.width=`${incre}%`
      },40)
      setTimeout(function(){
        clearInterval(interval)
         incre=0;
          overlay.style.display='none';
      },4000)

})