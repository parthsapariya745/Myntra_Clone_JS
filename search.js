let allProducts = [];

fetch('./data/product.json')
.then((res) => res.json())
    .then((data) => {
        allProducts = data;
    });

function searchProduct() {
    let sProduct = document.querySelector(".sProduct").value.toLowerCase();
    let sProduct2 = document.querySelector(".sProduct2").value.toLowerCase();
    let container = document.getElementById("container");
    let results = document.getElementById("searchResults");

    let sProduct3 = (sProduct + " " + sProduct2).trim()

    if (!sProduct3) {
        container.style.display = "block";
        results.style.display = "none";
        results.innerHTML = "";
        document.getElementById("homeBg").style.display = "block";
        return;
    }
    else {
        document.getElementById("homeBg").style.display = "none";
    }

    let filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(sProduct3)
    );

    container.style.display = "none";
    results.style.display = "flex";

    results.innerHTML = filtered.map(p => `
    <div class="w-[180px] border p-3 rounded shadow text-center">
        <img src="${p.image}" alt="${p.title}" class="w-full h-[150px] object-cover rounded">
        <h3 class="text-base font-semibold mt-2">${p.title}</h3>
        <p class="text-sm text-gray-600">₹${p.price}</p>
        <p class="text-xs mt-1">${p.description}</p>
        <button class="mt-2 px-3 py-1 bg-pink-500 text-white text-sm rounded">Add to Cart</button>
    </div>
    `).join("");
}