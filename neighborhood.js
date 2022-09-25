const restArr = ["Oriental Garden", "Burger King", "Subway", "Stan's Drive-In"];
const random = Math.floor(Math.random() * restArr.length);

let randBtn = document.getElementById('rand');

randBtn.addEventListener('click', () => {
    alert(`Your randomly chosen resturant is ${restArr[random]}`);
})

