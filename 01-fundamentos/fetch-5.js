console.log("fetching 5 lll");


fetch('https://reqres.in/api/users/1000').then(res => 
    {
       // res.clone().json().then(user => console.log(user.data));
       if (res.ok) {
        res.json().then(user => console.log(user.data));
       } else { throw new Error("no existe el ususario ");}


    }).catch(console.log);
    



