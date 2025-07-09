let box = document.getElementById("boxrmain")
let card = [
  {
    "image": "https://example.com/images/levis-jeans.jpg",
    "company": "Levi's",
    "product_name": "Men’s Slim Fit Jeans",
    "price": 2999,
    "discount_price": 1999
  },
  {
    "image": "https://example.com/images/hm-top.jpg",
    "company": "H&M",
    "product_name": "Women’s Casual Top",
    "price": 1299,
    "discount_price": 899
  },
  {
    "image": "https://example.com/images/nike-tshirt.jpg",
    "company": "Nike",
    "product_name": "Sports T-Shirt",
    "price": 1799,
    "discount_price": 1399
  },
  {
    "image": "https://example.com/images/zara-pants.jpg",
    "company": "Zara",
    "product_name": "Formal Pant",
    "price": 3499,
    "discount_price": 2499
  },
  {
    "image": "https://example.com/images/puma-joggers.jpg",
    "company": "Puma",
    "product_name": "Joggers",
    "price": 2299,
    "discount_price": 1599
  },
  {
    "image": "https://example.com/images/adidas-shorts.jpg",
    "company": "Adidas",
    "product_name": "Running Shorts",
    "price": 1499,
    "discount_price": 1099
  },
  {
    "image": "https://example.com/images/uniqlo-jacket.jpg",
    "company": "Uniqlo",
    "product_name": "Lightweight Jacket",
    "price": 3999,
    "discount_price": 2799
  },
  {
    "image": "https://example.com/images/roadster-shirt.jpg",
    "company": "Roadster",
    "product_name": "Checked Casual Shirt",
    "price": 1599,
    "discount_price": 1199
  },
  {
    "image": "https://example.com/images/van-heusen-blazer.jpg",
    "company": "Van Heusen",
    "product_name": "Formal Blazer",
    "price": 5999,
    "discount_price": 4499
  },
  {
    "image": "https://example.com/images/biba-kurti.jpg",
    "company": "Biba",
    "product_name": "Printed Kurti",
    "price": 1899,
    "discount_price": 1399
  },
  {
    "image": "https://example.com/images/max-dress.jpg",
    "company": "Max",
    "product_name": "Floral Dress",
    "price": 2199,
    "discount_price": 1599
  },
  {
    "image": "https://example.com/images/allen-solly-trousers.jpg",
    "company": "Allen Solly",
    "product_name": "Chino Trousers",
    "price": 2699,
    "discount_price": 1899
  },
  {
    "image": "https://example.com/images/hrx-trackpants.jpg",
    "company": "HRX",
    "product_name": "Track Pants",
    "price": 1899,
    "discount_price": 1299
  },
  {
    "image": "https://example.com/images/spykar-denim.jpg",
    "company": "Spykar",
    "product_name": "Denim Jeans",
    "price": 2499,
    "discount_price": 1799
  },
  {
    "image": "https://example.com/images/only-blouse.jpg",
    "company": "ONLY",
    "product_name": "Lace Blouse",
    "price": 1999,
    "discount_price": 1499
  }
]

card.forEach((e)=>{
    box.innerHTML += `
<div class="w-64 sm:w-56 md:w-48 lg:w-44 xl:w-48 shadow-lg overflow-hidden bg-white group relative rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
     onmouseenter="startSlider(this)" onmouseleave="stopSlider(this)">
  <!-- Image Box -->
  <div class="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
    <img src="${e.image}" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-100 transition-transform duration-300 group-hover:scale-110" />
    <img src="https://via.placeholder.com/300x400?text=Image+2" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-0" />
    <img src="https://via.placeholder.com/300x400?text=Image+3" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-0" />

    <!-- Wishlist Button -->
    <button class="wishlist-btn absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 text-xs rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
      ❤️ Wishlist
    </button>
  </div>

  <!-- Product Info -->
  <div class="p-2">
    <h2 class="text-xs text-gray-500 font-semibold truncate">${e.company}</h2>
    <p class="text-sm font-medium text-gray-800 truncate">${e.product_name}</p>
    <div class="flex items-center gap-2 mt-1">
      <span class="font-bold text-gray-900 text-sm">₹${e.discount_price}</span>
      <span class="line-through text-xs text-gray-500">₹${e.price}</span>
      <span class="text-xs text-pink-600 font-semibold">${Math.round(100 - (e.discount_price/e.price)*100)}% OFF</span>
    </div>
  </div>
</div>
`
})
// ...existing code...

let container = document.getElementById("woman")
let products = [
  {
    "image": "https://example.com/images/levis-jeans.jpg",
    "company": "Levi's",
    "product_name": "Men’s Slim Fit Jeans",
    "price": 2999,
    "discount_price": 1999
  },
  {
    "image": "https://example.com/images/hm-top.jpg",
    "company": "H&M",
    "product_name": "Women’s Casual Top",
    "price": 1299,
    "discount_price": 899
  },
  {
    "image": "https://example.com/images/nike-tshirt.jpg",
    "company": "Nike",
    "product_name": "Sports T-Shirt",
    "price": 1799,
    "discount_price": 1399
  },
  {
    "image": "https://example.com/images/zara-pants.jpg",
    "company": "Zara",
    "product_name": "Formal Pant",
    "price": 3499,
    "discount_price": 2499
  },
  {
    "image": "https://example.com/images/puma-joggers.jpg",
    "company": "Puma",
    "product_name": "Joggers",
    "price": 2299,
    "discount_price": 1599
  },
  {
    "image": "https://example.com/images/adidas-shorts.jpg",
    "company": "Adidas",
    "product_name": "Running Shorts",
    "price": 1499,
    "discount_price": 1099
  },
  {
    "image": "https://example.com/images/uniqlo-jacket.jpg",
    "company": "Uniqlo",
    "product_name": "Lightweight Jacket",
    "price": 3999,
    "discount_price": 2799
  },
  {
    "image": "https://example.com/images/roadster-shirt.jpg",
    "company": "Roadster",
    "product_name": "Checked Casual Shirt",
    "price": 1599,
    "discount_price": 1199
  },
  {
    "image": "https://example.com/images/van-heusen-blazer.jpg",
    "company": "Van Heusen",
    "product_name": "Formal Blazer",
    "price": 5999,
    "discount_price": 4499
  },
  {
    "image": "https://example.com/images/biba-kurti.jpg",
    "company": "Biba",
    "product_name": "Printed Kurti",
    "price": 1899,
    "discount_price": 1399
  },
  {
    "image": "https://example.com/images/max-dress.jpg",
    "company": "Max",
    "product_name": "Floral Dress",
    "price": 2199,
    "discount_price": 1599
  },
  {
    "image": "https://example.com/images/allen-solly-trousers.jpg",
    "company": "Allen Solly",
    "product_name": "Chino Trousers",
    "price": 2699,
    "discount_price": 1899
  },
  {
    "image": "https://example.com/images/hrx-trackpants.jpg",
    "company": "HRX",
    "product_name": "Track Pants",
    "price": 1899,
    "discount_price": 1299
  },
  {
    "image": "https://example.com/images/spykar-denim.jpg",
    "company": "Spykar",
    "product_name": "Denim Jeans",
    "price": 2499,
    "discount_price": 1799
  },
  {
    "image": "https://example.com/images/only-blouse.jpg",
    "company": "ONLY",
    "product_name": "Lace Blouse",
    "price": 1999,
    "discount_price": 1499
  }
]

products.forEach((item)=>{
    container.innerHTML += `
<div class="w-56 sm:w-60 md:w-56 lg:w-52 xl:w-56 shadow-lg overflow-hidden bg-white group relative rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
     onmouseenter="startSlider(this)" onmouseleave="stopSlider(this)">
  <!-- Image Box -->
  <div class="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
    <img src="${item.image}" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-100 transition-transform duration-300 group-hover:scale-110" />
    <img src="https://via.placeholder.com/300x400?text=Image+2" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-0" />
    <img src="https://via.placeholder.com/300x400?text=Image+3" class="product-img w-full h-full object-cover absolute top-0 left-0 opacity-0" />

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
      <span class="line-through text-xs text-gray-500">₹${item.price}</span>
      <span class="text-xs text-pink-600 font-semibold">${Math.round(100 - (item.discount_price/item.price)*100)}% OFF</span>
    </div>
  </div>
</div>
`
})
// ...existing