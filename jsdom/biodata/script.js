var arr=[
    {
        Name:'Bhagyashree',
        Age:21,
        City:'Bhopal'
    },
    {
        Name:'Avantika',
        Age:21,
        City:'Betul'
    },
    {
        Name:'Ayushi',
        Age:23,
        City:'Indore'
    },
    {
        Name:'Khushi',
        Age:20,
        City:'Ujjain'
    }
]
var body=document.querySelector('body');
var sum='';
arr.forEach(function(e){
      sum=sum+` <div id="card">
        <h1>${e.Name}</h1>
        <h3>${e.Age} ,${e.City}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, rerum provident. Quasi adipisci
             excepturi fugit maiores nulla quis, 
            iure est, modi autem itaque impedit ut amet enim voluptate, exercitationem quidem!</p>
    </div>`
})
body.innerHTML=sum;
