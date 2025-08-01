let container = document.getElementById("woman")
let products =[
  {
    "id": 84,
    "image": "https://imagescdn.pantaloons.com/img/app/product/3/393581-2083699.jpg?auto=format&w=450",
    "company": "Levi's",
    "product_name": "Women's Slim Fit Jeans",
    "discount_price": 1999
  },
  {
    "id": 85,
    "image": "https://i.pinimg.com/736x/7f/7d/cc/7f7dccb4815ad4a5e9ed124a2b3adcf5.jpg",
    "company": "H&M",
    "product_name": "Women's Casual Top",
    "discount_price": 899
  },
  {
    "id": 86,
    "image": "https://www.globalrepublic.in/cdn/shop/products/3_364837ed-4395-43d7-9f1b-40689aa9172e_1080x.jpg?v=1591353306",
    "company": "Nike",
    "product_name": "Women's Sports T-Shirt",
    "discount_price": 1399
  },
  {
    "id": 87,
    "image": "https://www.intermod.in/cdn/shop/products/houndtooth_trouser_1_1000x.jpg",
    "company": "Zara",
    "product_name": "Formal Pant",
    "discount_price": 2499
  },
  {
    "id": 88,
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4os1jj3lEd2NTJXs8yyuABN53-ddf2UdCZvngB3Ap5IFShGMQWHl0K0So3uKFlVj1WhSRP1uPPPU7tunxX8v9lMXBZe40FkVZ483RRixMLQCgTz5ECpmkYQ&usqp=CAc",
    "company": "Puma",
    "product_name": "Joggers",
    "discount_price": 1599
  },
  {
    "id": 89,
    "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
    "company": "Adidas",
    "product_name": "Running Shorts",
    "discount_price": 1099
  },
  {
    "id": 90,
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    "company": "Uniqlo",
    "product_name": "Lightweight Jacket",
    "discount_price": 2799
  },
  {
    "id": 91,
    "image": "https://i.pinimg.com/736x/a4/73/e8/a473e8584f7b9ce37729cf059c0b5e99.jpg",
    "company": "Roadster",
    "product_name": "Checked Casual Shirt",
    "discount_price": 1199
  },
  {
    "id": 92,
    "image": "https://www.jiomart.com/images/product/original/rvnuxuazhy/mans-fab-solid-single-breasted-formal-women-blazer-brown-xs-product-images-rvnuxuazhy-0-202308290719.jpg?im=Resize=(500,630)",
    "company": "Van Heusen",
    "product_name": "Formal Blazer",
    "discount_price": 4499
  },
  {
    "id": 93,
    "image": "https://okhai.org/cdn/shop/files/SSKR102K.jpg?v=1743232271",
    "company": "Biba",
    "product_name": "Printed Kurti",
    "discount_price": 1399
  },
  {
    "id": 94,
    "image": "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/OCTOBER/21/6yluxQL3_d01b23632c1c409ba30c65d6ecb9ca15.jpg",
    "company": "Max",
    "product_name": "Floral Dress",
    "discount_price": 1599
  },
  {
    "id": 95,
    "image": "https://www.staffuniforms.co.uk/cdn/shop/products/fr622-stretch-chinos-785491.jpg?v=1737493544",
    "company": "Allen Solly",
    "product_name": "Chino Trousers",
    "discount_price": 1899
  },
  {
    "id": 96,
    "image": "https://imagescdn.pantaloons.com/img/app/product/1/1035969-14642092.jpg?auto=format&w=450",
    "company": "HRX",
    "product_name": "Track Pants",
    "discount_price": 1299
  },
  {
    "id": 97,
    "image": "https://m.media-amazon.com/images/I/71DKXNucXJL._UY1100_.jpg",
    "company": "Spykar",
    "product_name": "Denim Jeans",
    "discount_price": 1799
  },
  {
    "id": 98,
    "image": "https://i.pinimg.com/736x/b8/ad/92/b8ad9275082209d9a07a362bf28b0cd8.jpg",
    "company": "ONLY",
    "product_name": "Lace Blouse",
    "discount_price": 1499
  }
]

products.forEach((item)=>{
  let dPersentage = (((Math.round(item.discount_price * 1.6) - item.discount_price) / Math.round(item.discount_price * 1.6)) * 100).toFixed(2)
  
  container.innerHTML += `<div class="shadow-lg overflow-hidden bg-white group relative rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"     
  onmouseenter="startSlider(this)" onmouseleave="stopSlider(this)">
  <!-- Image Box -->
  <div class="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
    <img src="${item.image}" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-100 transition-transform duration-300 group-hover:scale-110" />
    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-0" />
    <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-0" />
    <!-- Wishlist Button -->
    <button class="wishlist-btn absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 text-xs rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
      ❤️ Wishlist
    </button>
  </div>
  <!-- Product Info -->
  <div class="p-2">
    <h2 class="text-xs text-gray-500 font-semibold truncate">${item.company}</h2>
    <p class="text-sm font-medium text-gray-800 truncate">${item.product_name}</p>
    <div class="flex items-center gap-2 mt-1">
      <span class="font-bold text-gray-900 text-sm">₹${item.discount_price}</span>
      <span class="line-through text-xs text-gray-500">₹${Math.round(item.discount_price * 1.6)}</span>
      <span class="text-xs text-pink-600 font-semibold">${dPersentage}% OFF</span>
    </div>
    <button class="mt-3 w-full px-4 py-2 cursor-pointer bg-[#ff1b58] hover:bg-[#ff0095] text-white text-sm rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" onclick="addProduct(${item.id})">
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