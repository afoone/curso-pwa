console.log("fetching 5 lll");


fetch('no-encontrado.html').then(res => res.text()).then(text => {
   document.querySelector("body").innerHTML =  text;
}).catch(console.log);
    



