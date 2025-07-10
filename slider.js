let slideWrap1 = document.querySelector("#slideWrap1")
let dot1 = document.querySelectorAll(".dot1")
let slides1 = dot1.length
let cIndex1 = 0

let slideWrap2 = document.querySelector("#slideWrap2")
let dot2 = document.querySelectorAll(".dot2")
let slides2 = dot2.length
let cIndex2 = 0

let slideWrap3 = document.querySelector("#slideWrap3")
let dot3 = document.querySelectorAll(".dot3")
let slides3 = dot3.length
let cIndex3 = 0

function slidePage1(index) {
    slideWrap1.style.transform = `translateX(-${index * 100}%)`
    dot1.forEach((e, i) => {
        if (i == index) {
            e.style.background = '#7E818C';
        } else {
            e.style.background = '#c4c4c4';
        }
    });
    cIndex1 = index
}

setInterval(()=> {
    cIndex1 = (cIndex1 + 1) % slides1
    slidePage1(cIndex1)
}, 5000)

function slidePage2(index) {
    slideWrap2.style.transform = `translateX(-${index * 100}%)`
    dot2.forEach((e, i) => {
        if (i == index) {
            e.style.background = '#7E818C';
        } else {
            e.style.background = '#c4c4c4';
        }
    });
    cIndex2 = index
}

setInterval(()=> {
    cIndex2 = (cIndex2 + 1) % slides2
    slidePage2(cIndex2)
}, 5000)

function slidePage3(index) {
    slideWrap3.style.transform = `translateX(-${index * 100}%)`
    dot3.forEach((e, i) => {
        if (i == index) {
            e.style.background = '#7E818C';
        } else {
            e.style.background = '#c4c4c4';
        }
    });
    cIndex3 = index
}

setInterval(()=> {
    cIndex3 = (cIndex3 + 1) % slides3
    slidePage3(cIndex3)
}, 5000)