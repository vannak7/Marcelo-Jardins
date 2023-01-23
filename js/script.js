const carrossel = document.querySelector(".carrossel-items");

let maxScrollLeft = carrossel.scrollWidth - carrossel.clientWidth;
let intervalo = null
let step = 0 ;

const start = () => {
    intervalo = setInterval(function () {
        carrossel.scrollLeft = carrossel.scrollLeft + step;
        if(carrossel.scrollLeft === maxScrollLeft) {
            step = -1;
        } else if (carrossel.scrollLeft === 0) {
            step = 1;
        }
    }, 10);
};

start();




// const lista = document.querySelectorAll("li");
// let index = 0;

// function show(increase) {
//     index = index + increase;
//     index = Math.min(Math.max(index, 0),lista.length -1);
//     lista[index].scrollIntoView({behavior: "smooth"});
// }




// function next() {
//     lista[index].style.display = "none";
//     index = (index + 1) % lista.length;
//     lista[index].style.display = "block";
// }

// function prev() {
//     lista[index].style.display = "none";
//     index = (index - 1 + lista.length) % lista.length;
//     lista[index].style.display = "block";
// }

// setInterval(next, 3000)

// show()