console.log("fetching blob");

let img = document.querySelector('img');
console.log(img);

fetch('prueba.png').then(
    res => res.blob()
).then( imagen => {
    console.log(imagen);
    let imagePath = URL.createObjectURL(imagen);
    img.src = imagePath;
});