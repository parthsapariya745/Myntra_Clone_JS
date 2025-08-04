let kids = document.getElementById("kids")
let kCard = [
  {
    "id": 200,
    "image": "https://www.jiomart.com/images/product/original/rvqp7keasx/pepp-n-hagg-boys-black-100-percent-cotton-t-shirt-and-shorts-set-6-years-7-years-product-images-rvqp7keasx-0-202307260920.jpg?im=Resize=(1000,1000)",
    "company": "Hopscotch",
    "product_name": "Boys Cotton T-Shirt & Shorts Set",
    "discount_price": 599
  },
  {
    "id": 201,
    "image": "https://hawbeez.com/cdn/shop/files/Untitleddesign-2024-04-22T181120.448.png?v=1736327209",
    "company": "Max",
    "product_name": "Girls Printed Cotton Dress",
    "discount_price": 749
  },
  {
    "id": 202,
    "image": "https://assets.ajio.com/medias/sys_master/root/20230628/yCjM/649b58eeeebac147fc10bc9b/-473Wx593H-465654966-grey-MODEL.jpg",
    "company": "Babyoye",
    "product_name": "Boys Dungaree Set with T-Shirt",
    "discount_price": 899
  },
  {
    "id": 203,
    "image": "https://m.media-amazon.com/images/I/91QLKUwxlKL._UY1100_.jpg",
    "company": "Cucumber",
    "product_name": "Girls Night Suit Combo",
    "discount_price": 699
  },
  {
    "id": 204,
    "image": "https://deekayclothing.in/wp-content/uploads/2024/07/DSC00057-Edit-scaled.jpg",
    "company": "Babyhug",
    "product_name": "Boys Casual Shirt and Shorts",
    "discount_price": 799
  },
  {
    "id": 205,
    "image": "https://purecloth.co/cdn/shop/products/organic-cotton-romper-infant-girl_6_c629bfed-a148-4066-bd58-ff3ee2abd792.png?v=1654152835",
    "company": "Nino Bambino",
    "product_name": "Girls Organic Cotton Romper",
    "discount_price": 499
  },
  {
    "id": 206,
    "image": "https://trenz.co.in/cdn/shop/products/skate-all-day-hoodie-sweatshirt-kids-448007.jpg?v=1705656085",
    "company": "Cloth Theory",
    "product_name": "Unisex Hooded Sweatshirt",
    "discount_price": 649
  },
  {
    "id": 207,
    "image": "https://m.media-amazon.com/images/I/81NgRtHYouL._UY1100_.jpg",
    "company": "Little Kangaroos",
    "product_name": "Girls Denim Dungaree",
    "discount_price": 999
  },
  {
    "id": 208,
    "image": "https://www.mashup.in/cdn/shop/products/M-5637_Blue.jpg?v=1594536846",
    "company": "Pantaloons",
    "product_name": "Boys Checked Shirt",
    "discount_price": 549
  },
  {
    "id": 209,
    "image": "https://img.perniaspopupshop.com/catalog/product/l/i/LILIB112454_1.jpg?impolicy=detailimageprod",
    "company": "Lilliput",
    "product_name": "Girls Floral Printed Dress",
    "discount_price": 849
  },
  {
    "id": 210,
    "image": "https://m.media-amazon.com/images/I/71+er7Q828L._UY1100_.jpg",
    "company": "FirstCry",
    "product_name": "Unisex Full Sleeve Nightwear",
    "discount_price": 699
  },
  {
    "id": 211,
    "image": "https://www.momshome.in/cdn/shop/files/13_80f56c3e-7d12-4a5b-959e-3b686eeb124e.webp?v=1726928082",
    "company": "Carter's",
    "product_name": "Baby Bodysuit Combo (Pack of 5)",
    "discount_price": 1099
  },
  {
    "id": 212,
    "image": "https://5.imimg.com/data5/SELLER/Default/2021/12/WV/QD/JL/27848514/white-tutu.jpg",
    "company": "Moms Love",
    "product_name": "Girls Frock with Headband",
    "discount_price": 749
  },
  {
    "id": 213,
    "image": "https://m.media-amazon.com/images/I/71iA6w8C8HL._UY1100_.jpg",
    "company": "Kookie Kids",
    "product_name": "Boys Sleeveless T-shirt & Shorts",
    "discount_price": 599
  },
  {
    "id": 214,
    "image": "https://staranddaisy.in/wp-content/uploads/2022/04/8812bbnnmm.jpg",
    "company": "Mini Klub",
    "product_name": "Girls Party Wear Dress",
    "discount_price": 1299
  }
]

kCard.forEach((e)=>{
    let dPersentage = (((Math.round(e.discount_price * 1.6) - e.discount_price) / Math.round(e.discount_price * 1.6)) * 100).toFixed(2)
    kids.innerHTML += `
    <div class="shadow-lg overflow-hidden bg-white group relative rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
    onmouseenter="startSlider(this)" onmouseleave="stopSlider(this)">
      <div class="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
        <img src="${e.image}" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-100 transition-transform duration-300 group-hover:scale-110" />
        <img src="https://via.placeholder.com/300x400?text=Image+2" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-0" />
        <img src="https://via.placeholder.com/300x400?text=Image+3" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-0" />

        <button class="wishlist-btn absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 text-xs rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
          ❤️ Wishlist
        </button>
      </div>

      <div class="p-2">
        <h2 class="text-xs text-gray-500 font-semibold truncate">${e.company}</h2>
        <p class="text-sm font-medium text-gray-800 truncate">${e.product_name}</p>
        <div class="flex items-center gap-2 mt-1">
          <span class="font-bold text-gray-900 text-sm">₹${e.discount_price}</span>
          <span class="line-through text-xs text-gray-500">₹${Math.round(e.discount_price * 1.6)}</span>
          <span class="text-xs text-pink-600 font-semibold">${dPersentage}% OFF</span>
        </div>
        <button class="mt-3 w-full px-4 py-2 cursor-pointer bg-[#ff1b58] hover:bg-[#ff0095] text-white text-sm rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" onclick="addProduct(${e.id})">
          Add to Cart
        </button>
      </div>
    </div>`
})

function addProduct(id) {
  let cart = JSON.parse(localStorage.getItem("item")) || [];

  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("item", JSON.stringify(cart));
    updateCartCount();
  }
  else {
    alert("❗Product already in cart");
  }
}