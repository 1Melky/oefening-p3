console.log("It works...");

// op1
let x = 5.5;

if (x >= 5.5) {
    alert("je bent een voldoende")
}
else{
    alert("je hebt een onvoldoende")
}

// op2

const aray =["Mercedes","Tesla","Peugeot","Volkswagen","Kia","Seat"]

for (let i = 0; i < aray.length; i++) {
    const element = aray[i];
    console.log(element);    
}

// op3

const naam = document.querySelector('.first'); 
const achternaam = document.querySelector('.last');
const opleiding = document.querySelector('.education')
const save = document.querySelector('.save')

function errorcheck() {
    if (naam.textContent == "") {
        naam.classList.add('error')
    }
    if (achternaam.textContent == "") {
        achternaam.classList.add('error')
    }
    if (opleiding.textContent == "") {
        opleiding.classList.add('error')
    }   
}
save.addEventListener('click',errorcheck);

// op4

const ww = [
    {
        merk:"audi",
        moldel:"rs6",
        bouwjaar:2023
    },
    {
        merk:"audi",
        moldel:"rs6",
        bouwjaar:2023
    }
]
for (let t = 0; t < ww.length; t++) {
    const element = ww[t];
    console.log(element);
}