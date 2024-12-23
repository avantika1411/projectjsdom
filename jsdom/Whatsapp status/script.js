const profiles = [
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1734203007978-dca43cc0f846?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aarav Sharma",
      lastUpdated: "2 hours ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1733175697085-aa500b61ac74?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Isha Gupta",
      lastUpdated: "5 hours ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Vivaan Mehta",
      lastUpdated: "1 hour ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Priya Nair",
      lastUpdated: "8 hours ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rohan Kapoor",
      lastUpdated: "3 hours ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1732480509153-b895ce4c1b64?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ananya Iyer",
      lastUpdated: "6 hours ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1734208066571-728ce1a7cafa?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kavya Mishra",
      lastUpdated: "4 hours ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1690522330763-7cdc0f1eecc4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aditya Verma",
      lastUpdated: "7 hours ago"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Diya Patel",
      lastUpdated: "10 hours ago"
    },
    {
      profilePhoto: "https://plus.unsplash.com/premium_photo-1673964918255-0fa29c913dc0?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Krish Malhotra",
      lastUpdated: "12 hours ago"
    }
  ];
  
  var allstatus=document.querySelector('#allstatus')
  var sum='';
  profiles.forEach(function(e){
     sum=sum+`<div id="onestatus">
                <div id="overlay"></div>
                <div id="profilephoto">
                    <img src="${e.profilePhoto}" alt="">
                </div>
                <div id="info">
                    <h3>${e.name}</h3>
                    <p>${e.lastUpdated}</p>
                </div>
            </div>`
  })
  allstatus.innerHTML=sum;
