let slideWrap1 = document.querySelector("#slideWrap1")
let dot1 = document.querySelectorAll(".dot1")

let slideWrap2 = document.querySelector("#slideWrap2")
let dot2 = document.querySelectorAll(".dot2")

let slideWrap3 = document.querySelector("#slideWrap3")
let dot3 = document.querySelectorAll(".dot3")

function slidePage1(index) {
    slideWrap1.style.transform = `translateX(-${index * 100}%)`
    dot1.forEach((e, i) => {
        if (i == index) {
            e.style.background = '#7E818C';
        } else {
            e.style.background = '#c4c4c4';
        }
    });
}

function slidePage2(index) {
    slideWrap2.style.transform = `translateX(-${index * 100}%)`
    dot2.forEach((e, i) => {
        if (i == index) {
            e.style.background = '#7E818C';
        } else {
            e.style.background = '#c4c4c4';
        }
    });
}

function slidePage3(index) {
    slideWrap3.style.transform = `translateX(-${index * 100}%)`
    dot3.forEach((e, i) => {
        if (i == index) {
            e.style.background = '#7E818C';
        } else {
            e.style.background = '#c4c4c4';
        }
    });
}