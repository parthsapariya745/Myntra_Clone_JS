let kids = document.getElementById("kids")
let kCard = [
  {
    "id": 69,
    "image": "https://levi.in/cdn/shop/files/182981482_01_Front_4b14f5bd-3c6a-4603-acda-096c5675d825.jpg?v=1740488440",
    "company": "Levi's",
    "product_name": "Men’s Slim Fit Jeans",
    "discount_price": 1999
  },
  {
    "id": 70,
    "image": "https://i.pinimg.com/736x/d5/ce/ec/d5ceecc69624ce256c62f568d7df0852.jpg",
    "company": "H&M",
    "product_name": "Men’s Casual Top",
    "discount_price": 899
  },
  {
    "id": 71,
    "image": "https://m.media-amazon.com/images/I/518a424uw8L._UY1100_.jpg",
    "company": "Nike",
    "product_name": "Sports T-Shirt",
    "discount_price": 799
  },
  {
    "id": 72,
    "image": "https://static.zara.net/assets/public/4619/aebc/4cfd4d43b103/baa249f7f934/06861441802-a1/06861441802-a1.jpg?ts=1727349036352",
    "company": "Zara",
    "product_name": "Formal Pant",
    "discount_price": 699
  },
  {
    "id": 73,
    "image": "https://images-cdn.ubuy.co.in/654e5911b072f645b77dd5ff-puma-men-39-s-cover-french-terry.jpg",
    "company": "Puma",
    "product_name": "Joggers",
    "discount_price": 1599
  },
  {
    "id": 74,
    "image": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/bd46800b786548e7b4a1234553d66533_9366/Own_the_Run_3-Stripes_Shorts_Black_IQ3814_HM4.jpg",
    "company": "Adidas",
    "product_name": "Running Shorts",
    "discount_price": 1099
  },
  {
    "id": 75,
    "image": "https://m.media-amazon.com/images/I/61EvSi-Q7wL._UY1100_.jpg",
    "company": "Uniqlo",
    "product_name": "Lightweight Jacket",
    "discount_price": 2799
  },
  {
    "id": 76,
    "image": "https://rukminim2.flixcart.com/image/850/1000/kflftzk0-0/shirt/q/7/s/40-10398369-roadster-original-imafwyez4s2ctghk.jpeg?q=90&crop=false",
    "company": "Roadster",
    "product_name": "Checked Casual Shirt",
    "discount_price": 1199
  },
  {
    "id": 77,
    "image": "https://imagescdn.vanheusenindia.com/img/app/product/3/39624826-12861529.jpg?auto=format&w=390",
    "company": "Van Heusen",
    "product_name": "Formal Blazer",
    "discount_price": 4499
  },
  {
    "id": 78,
    "image": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19065302/2022/12/16/52f6c71a-9187-41ab-ac88-b6795fcf82f41671180852490-Anouk-Men-Kurtas-8111671180851957-1.jpg",
    "company": "Biba",
    "product_name": "Printed Kurta",
    "discount_price": 1399
  },
  {
    "id": 79,
    "image": "https://m.media-amazon.com/images/I/A1rHT-qVzrL._AC_UY1100_.jpg",
    "company": "Max",
    "product_name": "Floral Dress",
    "discount_price": 1599
  },
  {
    "id": 80,
    "image": "https://img.tatacliq.com/images/i8/1348Wx2000H/MP000000014796445_1348Wx2000H_202210090146491.jpeg",
    "company": "Allen Solly",
    "product_name": "Chino Trousers",
    "discount_price": 1899
  },
  {
    "id": 81,
    "image": "https://rukminim2.flixcart.com/image/850/1000/kawtvgw0/track-pant/h/8/6/xxl-11012148-hrx-by-hrithik-roshan-original-imafsdhdwey2g2hu.jpeg?q=90&crop=false",
    "company": "HRX",
    "product_name": "Track Pants",
    "discount_price": 1299
  },
  {
    "id": 82,
    "image": "https://spykar.com/cdn/shop/products/kbTYEA_5wy-MDSS1BC015MID-BLUE-_1.jpg?v=1750331187",
    "company": "Spykar",
    "product_name": "Denim Jeans",
    "discount_price": 1799
  },
  {
    "id": 83,
    "image": "https://m.media-amazon.com/images/I/61Y0AlhowkL._UY1100_.jpg",
    "company": "ONLY",
    "product_name": "Lace Blouse",
    "discount_price": 1499
  }
]

kCard.forEach((e)=>{
    let dPersentage = (((Math.round(e.discount_price * 1.6) - e.discount_price) / Math.round(e.discount_price * 1.6)) * 100).toFixed(2)
    box.innerHTML += `
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