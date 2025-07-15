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
    <div class="w-[220px] border border-gray-200 px-4 py-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group">
    <div class="overflow-hidden rounded-lg mb-3">
        <img src="${p.image}" alt="${p.title}" class="w-full h-[150px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300">
    </div>
    <h3 class="text-base font-semibold mt-2 text-gray-800">${p.title}</h3>
    <p class="text-sm font-medium text-gray-900 mt-1">₹${p.price}</p>
    <p class="text-xs text-gray-600 mt-1 line-clamp-2">${p.description}</p>
    <button class="mt-3 w-full px-4 py-2 cursor-pointer bg-[#ff1b58] hover:bg-[#ff0077] text-white text-sm rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50">
        Add to Cart
    </button>
</div>
    `).join("");
}