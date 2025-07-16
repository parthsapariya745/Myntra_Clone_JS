window.count = 0

let navbox = document.getElementById('navbox');
navbox.innerHTML = `
<div class="bg h-auto w-full">
        <!-- navbar -->
        <div class="navbar bg-white shadow-md w-full fixed top-0 left-0 z-10">
            <div class="navbox flex justify-between items-center h-[80px] xl:max-w-[1430px] px-4 mx-auto">
                <div class="nav-logo">
                    <a href="./index.html"><img src="https://github.com/parthsapariya745/myntra-clone/blob/main/Assets/myntra_logo-removebg-preview.png?raw=true" class="xl:w-[50px] w-[40px] object-cover" alt=""></a>
                </div>
                <input type="checkbox" id="menu-toggle" class="peer hidden">
                <label for="menu-toggle" class="lg:hidden cursor-pointe">
                    <div class="w-8 h-8 flex items-center justify-center">
                        <i class="ri-menu-5-line text-3xl"></i>
                    </div>
                </label>
                <div class="nav-menu hidden peer-checked:flex flex-col absolute top-[80px] bg-[white] lg:h-full left-0 w-full shadow-md p-4 lg:flex lg:flex-row lg:items-center lg:static lg:w-auto lg:shadow-none lg:p-0 xl:gap-9 lg:gap-7 gap-4">
                    <div class="relative group h-full lg:flex lg:items-center">
                        <a href="./man_m.html" class="item1 uppercase text-[14px] py-1.5 font-[700] text-[#282C3F]">Men</a>
                        <div class="absolute left-0 top-[80px] hidden group-hover:flex bg-white shadow-lg p-4 space-x-4 w-[900px] border border-gray-200">
                            <div class="w-full">
                                <h3 class="font-bold text-[#EE5F73] text-[14px]">Topwear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">T-Shirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Casual Shirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Formal Shirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Sweatshirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Sweaters</a></li>
                                    <li class="hover:font-bold"><a href="#">Jackets</a></li>
                                    <li class="hover:font-bold"><a href="#">Blazers & Coats</a></li>
                                    <li class="hover:font-bold"><a href="#">Suits</a></li>
                                    <li class="hover:font-bold"><a href="#">Rain Jackets</a></li>
                                </ul>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Indian & Festive Wear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Kurtas & Kurta Sets</a></li>
                                    <li class="hover:font-bold"><a href="#">Sherwanis</a></li>
                                    <li class="hover:font-bold"><a href="#">Nehru Jackets</a></li>
                                    <li class="hover:font-bold"><a href="#">Dhotis</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#EE5F73] text-[14px]">Bottomwear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Jeans</a></li>
                                    <li class="hover:font-bold"><a href="#">Casual Trousers</a></li>
                                    <li class="hover:font-bold"><a href="#">Formal Trousers</a></li>
                                    <li class="hover:font-bold"><a href="#">Shorts</a></li>
                                    <li class="hover:font-bold"><a href="#">Track Pants & Joggers</a></li>
                                </ul>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Innerwear & Sleepwear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Briefs & Trunks</a></li>
                                    <li class="hover:font-bold"><a href="#">Boxers</a></li>
                                    <li class="hover:font-bold"><a href="#">Vests</a></li>
                                    <li class="hover:font-bold"><a href="#">Sleepwear & Loungewear</a></li>
                                    <li class="hover:font-bold"><a href="#">Thermals</a></li>
                                </ul>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Plus Size</h3>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#EE5F73]">Footwear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Casual Shoes</a></li>
                                    <li class="hover:font-bold"><a href="#">Sports Shoes</a></li>
                                    <li class="hover:font-bold"><a href="#">Formal Shoes</a></li>
                                    <li class="hover:font-bold"><a href="#">Sneakers</a></li>
                                    <li class="hover:font-bold"><a href="#">Sandals & Floaters</a></li>
                                    <li class="hover:font-bold"><a href="#">Flip Flops</a></li>
                                    <li class="hover:font-bold"><a href="#">Socks</a></li>
                                </ul>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Personal Care & Grooming</h3>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Sunglasses & Frames</h3>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Watches</h3>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#EE5F73] text-[14px]">Sports & Active Wear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Sports Shoes</a></li>
                                    <li class="hover:font-bold"><a href="#">Sports Sandals</a></li>
                                    <li class="hover:font-bold"><a href="#">Active T-Shirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Track Pants & Shorts</a></li>
                                    <li class="hover:font-bold"><a href="#">Tracksuits</a></li>
                                    <li class="hover:font-bold"><a href="#">Jackets & Sweatshirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Sports Accessories</a></li>
                                    <li class="hover:font-bold"><a href="#">Swimwear</a></li>
                                </ul>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Gadgets</h3>
                                <ul class="text-sm text-gray-700 space-y-1">    
                                    <li class="hover:font-bold"><a href="#">Smart Wearables</a></li>
                                    <li class="hover:font-bold"><a href="#">Fitness Gadgets</a></li>
                                    <li class="hover:font-bold"><a href="#">Headphones</a></li>
                                    <li class="hover:font-bold"><a href="#">Speakers</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#EE5F73] text-[14px]">Fashion Accessories</h3>
                                <ul class="text-sm text-gray-700 space-y-1">        
                                    <li class="hover:font-bold"><a href="#">Wallets</a></li>
                                    <li class="hover:font-bold"><a href="#">Belts</a></li>
                                    <li class="hover:font-bold"><a href="#">Perfumes & Body Mists</a></li>
                                    <li class="hover:font-bold"><a href="#">Trimmers</a></li>
                                    <li class="hover:font-bold"><a href="#">Deodorants</a></li>
                                    <li class="hover:font-bold"><a href="#">Ties, Cufflinks & Pocket Squares</a></li>
                                    <li class="hover:font-bold"><a href="#">Accessory Gift Sets</a></li>
                                    <li class="hover:font-bold"><a href="#">Caps & Hats</a></li>
                                    <li class="hover:font-bold"><a href="#">Mufflers, Scarves & Gloves</a></li>
                                    <li class="hover:font-bold"><a href="#">Phone Cases</a></li>
                                    <li class="hover:font-bold"><a href="#">Rings & Wristwear</a></li>
                                    <li class="hover:font-bold"><a href="#">Helmets</a></li>
                                </ul>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Bags & Backpacks</h3>
                                <h3 class="font-bold text-[#EE5F73] text-[14px] pt-4">Luggages & Trolleys</h3>
                            </div>
                        </div>
                    </div>
                    <div class="relative group h-full lg:flex lg:items-center">
                        <a href="./woman_m.html" class="item2 uppercase text-[14px] py-1.5 font-[700] text-[#282C3F]">Women</a>
                        <div class="absolute left-0 top-[80px] hidden group-hover:flex bg-white shadow-lg p-4 space-x-4 w-[900px] border border-gray-200">
                            <div class="w-full">
                                <h3 class="font-bold text-[#FB56C1] text-[14px]">Indian & Fusion Wear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Kurtas & Suits</a></li>
                                    <li class="hover:font-bold"><a href="#">Kurtis, Tunics & Tops</a></li>
                                    <li class="hover:font-bold"><a href="#">Sarees</a></li>
                                    <li class="hover:font-bold"><a href="#">Ethnic Wear</a></li>
                                    <li class="hover:font-bold"><a href="#">Leggings, Salwars & Churidars</a></li>
                                    <li class="hover:font-bold"><a href="#">Skirts & Palazzos</a></li>
                                    <li class="hover:font-bold"><a href="#">Dress Materials</a></li>
                                    <li class="hover:font-bold"><a href="#">Lehenga Cholis</a></li>
                                    <li class="hover:font-bold"><a href="#">Dupattas & Shawls</a></li>
                                    <li class="hover:font-bold"><a href="#">Jackets</a></li>
                                </ul>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Belts, Scarves & More</h3>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Watches & Wearables</h3>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#FB56C1] text-[14px]">Western Wear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Dresses</a></li>
                                    <li class="hover:font-bold"><a href="#">Tops</a></li>
                                    <li class="hover:font-bold"><a href="#">Tshirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Jeans</a></li>
                                    <li class="hover:font-bold"><a href="#">Trousers & Capris</a></li>
                                    <li class="hover:font-bold"><a href="#">Shorts & Skirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Co-ords</a></li>
                                    <li class="hover:font-bold"><a href="#">Playsuits</a></li>
                                    <li class="hover:font-bold"><a href="#">Jumpsuits</a></li>
                                    <li class="hover:font-bold"><a href="#">Shrugs</a></li>
                                    <li class="hover:font-bold"><a href="#">Sweaters & Sweatshirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Jackets & Coats</a></li>
                                    <li class="hover:font-bold"><a href="#">Blazers & Waistcoats</a></li>
                                </ul>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Plus Size</h3>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#FB56C1] text-[14px]">Maternity</h3>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Sunglasses & Frames</h3>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Footwear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Flats</a></li>
                                    <li class="hover:font-bold"><a href="#">Casual Shoes</a></li>
                                    <li class="hover:font-bold"><a href="#">Heels</a></li>
                                    <li class="hover:font-bold"><a href="#">Boots</a></li>
                                    <li class="hover:font-bold"><a href="#">Sports Shoes & Floaters</a></li>
                                </ul>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Sports & Active Wear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Clothing</a></li>
                                    <li class="hover:font-bold"><a href="#">Footwear</a></li>
                                    <li class="hover:font-bold"><a href="#">Sports Accessories</a></li>
                                    <li class="hover:font-bold"><a href="#">Sports Equipment</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#FB56C1] text-[14px]">Lingerie & Sleepwear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Bra</a></li>
                                    <li class="hover:font-bold"><a href="#">Briefs</a></li>
                                    <li class="hover:font-bold"><a href="#">Shapewear</a></li>
                                    <li class="hover:font-bold"><a href="#">Sleepwear & Loungewear</a></li>
                                    <li class="hover:font-bold"><a href="#">Swimwear</a></li>
                                    <li class="hover:font-bold"><a href="#">Camisoles & Thermals</a></li>
                                </ul>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Beauty & Personal Care</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Makeup</a></li>
                                    <li class="hover:font-bold"><a href="#">Skincare</a></li>
                                    <li class="hover:font-bold"><a href="#">Premium Beauty</a></li>
                                    <li class="hover:font-bold"><a href="#">Lipsticks</a></li>
                                    <li class="hover:font-bold"><a href="#">Fragrances</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#FB56C1] text-[14px]">Gadgets</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Smart Wearables</a></li>
                                    <li class="hover:font-bold"><a href="#">Fitness Gadgets</a></li>
                                    <li class="hover:font-bold"><a href="#">Headphones</a></li>
                                    <li class="hover:font-bold"><a href="#">Speakers</a></li>
                                </ul>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Jewellery</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Fashion Jewellery</a></li>
                                    <li class="hover:font-bold"><a href="#">Fine Jewellery</a></li>
                                    <li class="hover:font-bold"><a href="#">Earrings</a></li>
                                </ul>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Backpacks</h3>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Handbags, Bags & Wallets</h3>
                                <h3 class="font-bold text-[#FB56C1] text-[14px] pt-4">Luggages & Trolleys</h3>
                            </div>
                        </div>
                    </div>
                    <div class="relative group h-full lg:flex lg:items-center">
                        <a href="#" class="item3 uppercase text-[14px] py-1.5 font-[700] text-[#282C3F]">kids</a>
                        <div class="absolute left-0 top-[80px] hidden group-hover:flex bg-white shadow-lg p-4 space-x-4 w-[900px] border border-gray-200">
                            <div class="w-full">
                                <h3 class="font-bold text-[#F26A10] text-[14px]">Boys Clothing</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">T-Shirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Shirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Shorts</a></li>
                                    <li class="hover:font-bold"><a href="#">Jeans</a></li>
                                    <li class="hover:font-bold"><a href="#">Trousers</a></li>
                                    <li class="hover:font-bold"><a href="#">Clothing Sets</a></li>
                                    <li class="hover:font-bold"><a href="#">Ethnic Wear</a></li>
                                    <li class="hover:font-bold"><a href="#">Track Pants & Pyjamas</a></li>
                                    <li class="hover:font-bold"><a href="#">Jacket, Sweater & Sweatshirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Party Wear</a></li>
                                    <li class="hover:font-bold"><a href="#">Innerwear & Thermals</a></li>
                                    <li class="hover:font-bold"><a href="#">Nightwear & Loungewear</a></li>
                                    <li class="hover:font-bold"><a href="#">Value Packs</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#F26A10] text-[14px]">Girls Clothing</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Dresses</a></li>
                                    <li class="hover:font-bold"><a href="#">Tops</a></li>
                                    <li class="hover:font-bold"><a href="#">T-shirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Clothing Sets</a></li>
                                    <li class="hover:font-bold"><a href="#">Lehenga choli</a></li>
                                    <li class="hover:font-bold"><a href="#">Kurta Sets</a></li>
                                    <li class="hover:font-bold"><a href="#">Party wear</a></li>
                                    <li class="hover:font-bold"><a href="#">Dungarees & Jumpsuits</a></li>
                                    <li class="hover:font-bold"><a href="#">Skirts & shorts</a></li>
                                    <li class="hover:font-bold"><a href="#">Tights & Leggings</a></li>
                                    <li class="hover:font-bold"><a href="#">Jeans, Trousers & Capris</a></li>
                                    <li class="hover:font-bold"><a href="#">Jacket, Sweater & Sweatshirts</a></li>
                                    <li class="hover:font-bold"><a href="#">Innerwear & Thermals</a></li>
                                    <li class="hover:font-bold"><a href="#">Nightwear & Loungewear</a></li>
                                    <li class="hover:font-bold"><a href="#">Value Packs</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#F26A10] text-[14px]">Footwear</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Casual Shoes</a></li>
                                    <li class="hover:font-bold"><a href="#">Flipflops</a></li>
                                    <li class="hover:font-bold"><a href="#">Sports Shoes</a></li>
                                    <li class="hover:font-bold"><a href="#">Flats</a></li>
                                    <li class="hover:font-bold"><a href="#">Sandals</a></li>
                                    <li class="hover:font-bold"><a href="#">Heels</a></li>
                                    <li class="hover:font-bold"><a href="#">School Shoes</a></li>
                                    <li class="hover:font-bold"><a href="#">Socks</a></li>
                                </ul>
                                <h3 class="font-bold text-[#F26A10] text-[14px] pt-4">Toys & Games</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Learning & Development</a></li>
                                    <li class="hover:font-bold"><a href="#">Activity Toys</a></li>
                                    <li class="hover:font-bold"><a href="#">Soft Toys</a></li>
                                    <li class="hover:font-bold"><a href="#">Action Figure / Play set</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#F26A10] text-[14px]">Infants</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Bodysuits</a></li>
                                    <li class="hover:font-bold"><a href="#">Rompers & Sleepsuits</a></li>
                                    <li class="hover:font-bold"><a href="#">Clothing Sets</a></li>
                                    <li class="hover:font-bold"><a href="#">Tshirts & Tops</a></li>
                                    <li class="hover:font-bold"><a href="#">Dresses</a></li>
                                    <li class="hover:font-bold"><a href="#">Bottom wear</a></li>
                                    <li class="hover:font-bold"><a href="#">Winter Wear</a></li>
                                    <li class="hover:font-bold"><a href="#">Innerwear & Sleepwear</a></li>
                                    <li class="hover:font-bold"><a href="#">Infant Care</a></li>
                                </ul>
                                <h3 class="font-bold text-[#F26A10] text-[14px] pt-4">Home & Bath</h3>
                                <h3 class="font-bold text-[#F26A10] text-[14px] pt-4">Personal Care</h3>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#F26A10] text-[14px]">Kids Accessories</h3>
                                <ul class="text-sm text-gray-700 space-y-1">        
                                    <li class="hover:font-bold"><a href="#">Bags & Backpacks</a></li>
                                    <li class="hover:font-bold"><a href="#">Watches</a></li>
                                    <li class="hover:font-bold"><a href="#">Jewellery & Hair accessory</a></li>
                                    <li class="hover:font-bold"><a href="#">Sunglasses</a></li>
                                    <li class="hover:font-bold"><a href="#">Masks & Protective Gears</a></li>
                                    <li class="hover:font-bold"><a href="#">Caps & Hats </a></li>
                                </ul>
                                <h3 class="font-bold text-[#F26A10] text-[14px] pt-4">Brands</h3>
                                <ul class="text-sm text-gray-700 space-y-1">        
                                    <li class="hover:font-bold"><a href="#">H&M</a></li>
                                    <li class="hover:font-bold"><a href="#">Max Kids</a></li>
                                    <li class="hover:font-bold"><a href="#">Pantaloons</a></li>
                                    <li class="hover:font-bold"><a href="#">United Colors Of Benetton Kids</a></li>
                                    <li class="hover:font-bold"><a href="#">YK</a></li>
                                    <li class="hover:font-bold"><a href="#">U.S. Polo Assn. Kids</a></li>
                                    <li class="hover:font-bold"><a href="#">Mothercare</a></li>
                                    <li class="hover:font-bold"><a href="#">HRX</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="relative group h-full lg:flex lg:items-center">
                        <a href="#" class="item4 uppercase text-[14px] py-1.5 font-[700] text-[#282C3F]">Home & Living</a>
                        <div class="absolute left-0 top-[80px] hidden group-hover:flex bg-white shadow-lg p-4 space-x-4 w-[900px] border border-gray-200">
                            <div class="w-full">
                                <h3 class="font-bold text-[#F2C210] text-[14px]">Bed Linen & Furnishing</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Bed Runners</a></li>
                                    <li class="hover:font-bold"><a href="#">Mattress Protectors</a></li>
                                    <li class="hover:font-bold"><a href="#">Bedsheets</a></li>
                                    <li class="hover:font-bold"><a href="#">Bedding Sets</a></li>
                                    <li class="hover:font-bold"><a href="#">Blankets, Quilts & Dohars</a></li>
                                    <li class="hover:font-bold"><a href="#">Pillows & Pillow Covers</a></li>
                                    <li class="hover:font-bold"><a href="#">Bed Covers</a></li>
                                    <li class="hover:font-bold"><a href="#">Diwan Sets</a></li>
                                    <li class="hover:font-bold"><a href="#">Chair Pads & Covers</a></li>
                                    <li class="hover:font-bold"><a href="#">Sofa Covers</a></li>
                                </ul>
                                <h3 class="font-bold text-[#F2C210] text-[14px] pt-4">Flooring</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Carpets</a></li>
                                    <li class="hover:font-bold"><a href="#">Rugs</a></li>
                                    <li class="hover:font-bold"><a href="#">Doormats</a></li>
                                    <li class="hover:font-bold"><a href="#">Floor Runners</a></li>
                                    <li class="hover:font-bold"><a href="#">Vinyl Flooring</a></li>
                                    <li class="hover:font-bold"><a href="#">Wooden Flooring</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#F2C210] text-[14px]">Bath</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Bath Towels</a></li>
                                    <li class="hover:font-bold"><a href="#">Hand & Face Towels</a></li>
                                    <li class="hover:font-bold"><a href="#">Beach Towels</a></li>
                                    <li class="hover:font-bold"><a href="#">Towels Set</a></li>
                                    <li class="hover:font-bold"><a href="#">Bath Rugs</a></li>
                                    <li class="hover:font-bold"><a href="#">Bath Robes</a></li>
                                    <li class="hover:font-bold"><a href="#">Bathroom Accessories</a></li>
                                    <li class="hover:font-bold"><a href="#">Shower Curtains</a></li>
                                </ul>
                                <h3 class="font-bold text-[#F2C210] text-[14px] pt-4">Lamps & Lighting</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Floor Lamps</a></li>
                                    <li class="hover:font-bold"><a href="#">Ceiling Lamps</a></li>
                                    <li class="hover:font-bold"><a href="#">Table Lamps</a></li>
                                    <li class="hover:font-bold"><a href="#">Wall Lamps</a></li>
                                    <li class="hover:font-bold"><a href="#">Outdoor Lamps</a></li>
                                    <li class="hover:font-bold"><a href="#">String Lights</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#F2C210] text-[14px]">Home Décor</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Plants & Planters</a></li>
                                    <li class="hover:font-bold"><a href="#">Aromas & Candles</a></li>
                                    <li class="hover:font-bold"><a href="#">Clocks</a></li>
                                    <li class="hover:font-bold"><a href="#">Mirrors</a></li>
                                    <li class="hover:font-bold"><a href="#">Wall Décor</a></li>
                                    <li class="hover:font-bold"><a href="#">Festive Decor</a></li>
                                    <li class="hover:font-bold"><a href="#">Pooja Essentials</a></li>
                                    <li class="hover:font-bold"><a href="#">Wall Shelves</a></li>
                                    <li class="hover:font-bold"><a href="#">Fountains</a></li>
                                    <li class="hover:font-bold"><a href="#">Showpieces & Vases</a></li>
                                    <li class="hover:font-bold"><a href="#">Ottoman</a></li>
                                </ul>
                                <h3 class="font-bold text-[#F2C210] text-[14px] pt-4">Cushions & Cushion Covers</h3>
                                <h3 class="font-bold text-[#F2C210] text-[14px] pt-4">Curtains</h3>
                            </div>
                            
                            <div class="w-full">
                                <h3 class="font-bold text-[#F2C210] text-[14px]">Furniture</h3>
                                <h3 class="font-bold text-[#F2C210] text-[14px] pt-4">Home Gift Sets</h3>
                                <h3 class="font-bold text-[#F2C210] text-[14px] pt-4">Kitchen & Table</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Table Runners</a></li>
                                    <li class="hover:font-bold"><a href="#">Dinnerware & Serveware</a></li>
                                    <li class="hover:font-bold"><a href="#">Cups and Mugs</a></li>
                                    <li class="hover:font-bold"><a href="#">Bakeware & Cookware</a></li>
                                    <li class="hover:font-bold"><a href="#">Kitchen Storage & Tools</a></li>
                                    <li class="hover:font-bold"><a href="#">Bar & Drinkware</a></li>
                                    <li class="hover:font-bold"><a href="#">Table Covers & Furnishings</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#F2C210] text-[14px]">Storage</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Bins</a></li>
                                    <li class="hover:font-bold"><a href="#">Hangers</a></li>
                                    <li class="hover:font-bold"><a href="#">Organisers</a></li>
                                    <li class="hover:font-bold"><a href="#">Hooks & Holders</a></li>
                                    <li class="hover:font-bold"><a href="#">Laundry Bags</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>                    
                    <div class="relative group h-full lg:flex lg:items-center"> 
                        <a href="#" class="item5 uppercase text-[14px] py-1.5 font-[700] text-[#282C3F]">Beauty</a>
                        <div class="absolute left-0 top-[80px] hidden group-hover:flex bg-white shadow-lg p-4 space-x-4 w-[900px] border border-gray-200">
                            <div class="w-full">
                                <h3 class="font-bold text-[#0DB7AF] text-[14px]">Makeup</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Lipstick</a></li>
                                    <li class="hover:font-bold"><a href="#">Lip Gloss</a></li>
                                    <li class="hover:font-bold"><a href="#">Lip Liner</a></li>
                                    <li class="hover:font-bold"><a href="#">Mascara</a></li>
                                    <li class="hover:font-bold"><a href="#">Eyeliner</a></li>
                                    <li class="hover:font-bold"><a href="#">Kajal</a></li>
                                    <li class="hover:font-bold"><a href="#">Eyeshadow</a></li>
                                    <li class="hover:font-bold"><a href="#">Foundation</a></li>
                                    <li class="hover:font-bold"><a href="#">Primer</a></li>
                                    <li class="hover:font-bold"><a href="#">Concealer</a></li>
                                    <li class="hover:font-bold"><a href="#">Compact</a></li>
                                    <li class="hover:font-bold"><a href="#">Nail Polish</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#0DB7AF] text-[14px]">Skincare, Bath & Body</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Face Moisturiser</a></li>
                                    <li class="hover:font-bold"><a href="#">Cleanser</a></li>
                                    <li class="hover:font-bold"><a href="#">Masks & Peel</a></li>
                                    <li class="hover:font-bold"><a href="#">Sunscreen</a></li>
                                    <li class="hover:font-bold"><a href="#">Serum</a></li>
                                    <li class="hover:font-bold"><a href="#">Face Wash</a></li>
                                    <li class="hover:font-bold"><a href="#">Eye Cream</a></li>
                                    <li class="hover:font-bold"><a href="#">Lip Balm</a></li>
                                    <li class="hover:font-bold"><a href="#">Body Lotion</a></li>
                                    <li class="hover:font-bold"><a href="#">Body Wash</a></li>
                                    <li class="hover:font-bold"><a href="#">Body Scrub</a></li>
                                    <li class="hover:font-bold"><a href="#">Hand Cream</a></li>
                                </ul>
                                <h3 class="font-bold text-[#0DB7AF] text-[14px] pt-4">Baby Care</h3>
                                <h3 class="font-bold text-[#0DB7AF] text-[14px] pt-4">Masks</h3>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#0DB7AF] text-[14px]">Haircare</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Shampoo</a></li>
                                    <li class="hover:font-bold"><a href="#">Conditioner</a></li>
                                    <li class="hover:font-bold"><a href="#">Hair Cream</a></li>
                                    <li class="hover:font-bold"><a href="#">Hair Oil</a></li>
                                    <li class="hover:font-bold"><a href="#">Hair Gel</a></li>
                                    <li class="hover:font-bold"><a href="#">Hair Color</a></li>
                                    <li class="hover:font-bold"><a href="#">Hair Serum</a></li>
                                    <li class="hover:font-bold"><a href="#">Hair Accessory</a></li>
                                </ul>
                                <h3 class="font-bold text-[#0DB7AF] text-[14px] pt-4">Fragrances</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Perfume</a></li>
                                    <li class="hover:font-bold"><a href="#">Deodorant</a></li>
                                    <li class="hover:font-bold"><a href="#">Body Mist</a></li>
                                </ul>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#0DB7AF] text-[14px]">Appliances</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Hair Straightener</a></li>
                                    <li class="hover:font-bold"><a href="#">Hair Dryer</a></li>
                                    <li class="hover:font-bold"><a href="#">Epilator</a></li>
                                </ul>
                                <h3 class="font-bold text-[#0DB7AF] text-[14px] pt-4">Men's Grooming</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Trimmers</a></li>
                                    <li class="hover:font-bold"><a href="#">Beard Oil</a></li>
                                    <li class="hover:font-bold"><a href="#">Hair Wax</a></li>
                                </ul>
                                <h3 class="font-bold text-[#0DB7AF] text-[14px] pt-4">Beauty Gift & Makeup Set</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Beauty Gift</a></li>
                                    <li class="hover:font-bold"><a href="#">Makeup Kit</a></li>
                                </ul>
                                <h3 class="font-bold text-[#0DB7AF] text-[14px] pt-4">Premium Beauty</h3>
                                <h3 class="font-bold text-[#0DB7AF] text-[14px] pt-4">Wellness & Hygiene</h3>
                            </div>
                            <div class="w-full">
                                <h3 class="font-bold text-[#0DB7AF] text-[14px]">Top Brands</h3>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    <li class="hover:font-bold"><a href="#">Lakme</a></li>
                                    <li class="hover:font-bold"><a href="#">Maybelline</a></li>
                                    <li class="hover:font-bold"><a href="#">LOreal</a></li>
                                    <li class="hover:font-bold"><a href="#">Philips</a></li>
                                    <li class="hover:font-bold"><a href="#">Bath & Body Works</a></li>
                                    <li class="hover:font-bold"><a href="#">THE BODY SHOP</a></li>
                                    <li class="hover:font-bold"><a href="#">Biotique</a></li>
                                    <li class="hover:font-bold"><a href="#">Mamaearth</a></li>
                                    <li class="hover:font-bold"><a href="#">MCaffeine</a></li>
                                    <li class="hover:font-bold"><a href="#">Nivea</a></li>
                                    <li class="hover:font-bold"><a href="#">Lotus Herbals</a></li>
                                    <li class="hover:font-bold"><a href="#">LOreal Professionnel</a></li>
                                    <li class="hover:font-bold"><a href="#">KAMA AYURVEDA</a></li>
                                    <li class="hover:font-bold"><a href="#">M.A.C</a></li>
                                    <li class="hover:font-bold"><a href="#">Forest Essentials</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="relative group h-full lg:flex lg:items-center">
                        <a href="#" class="item6 uppercase text-[14px] py-1.5 font-[700] text-[#282C3F]">Studio <sup class="text-[#FF3F6C]">new</sup></a>
                        <div class="absolute left-0 top-[80px] hidden group-hover:flex bg-white shadow-lg p-4 space-x-4 w-[500px] border border-gray-200">
                            <div class="w-full flex flex-col items-center space-y-4">
                                <img src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg" class="w-[110px]" alt="">
                                <p class="text-[#535766]">Your daily inspiration for everything fashion</p>
                                <img src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png" alt="">
                                <button class="uppercase text-[14px] font-[700] border-[1px] border-[#b9bac0] text-[#282C3F] px-7 py-0.5 flex items-center justify-center cursor-pointer">Explore studio <i class="ri-arrow-right-s-line text-[25px] font-[100]"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="nav-icon lg:hidden flex">
                        <div class="icon-box flex gap-8 mb-2">
                            <div class="icon flex flex-col items-center">
                                <i class="ri-user-3-line text-[20px] relative top-[5px]"></i>
                                <a href="./profile.html"><p class="text-[12px] font-[700]">Profile</p></a>
                            </div>
                            <div class="icon flex flex-col items-center">
                                <i class="ri-heart-line text-[20px] relative top-[5px]"></i>
                                <p class="text-[12px] font-[700]">Wishlist</p>
                            </div>
                            <div class="relative cursor-pointer">
                                <div class="flex flex-col items-center">
                                    <a href="./addtocart.html">
                                        <div class="relative">
                                            <i class="ri-shopping-bag-line text-[20px] relative top-[5px]"></i>
                                        </div>
                                        <p class="text-[12px] font-[700]">Bag</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav-input bg-[#F5F5F6] h-[40px] rounded-[5px] xl:w-[36%] w-[30%] hidden lg:flex items-center pl-3">
                    <i class="fa-solid fa-magnifying-glass text-[#282C3F] text-[14px]"></i>
                    <input type="search" class="sProduct w-full text-[14px] pl-4 border-0 outline-0 bg-transparent" placeholder="Search for products, brand and more" onInput="searchProduct()">
                </div>
                <div class="nav-icon hidden lg:flex">
                    <div class="icon-box flex gap-8 mb-2">
                        <div class="relative group inline-block">
                            <div class="icon flex flex-col items-center cursor-pointer">
                                <a href="./profile.html" class="flex flex-col justify-center items-center pb-0.5 cursor-pointer">
                                    <i class="ri-user-3-line text-[20px] relative top-[5px] cursor-pointer"></i>
                                    <p class="text-[12px] font-[700] cursor-pointer">Profile</p>
                                </a>

                                <div class="absolute top-[68px] w-max shadow-lg border border-gray-200 bg-white text-black p-5 z-10 hidden group-hover:block">
                                    <p class="text-[15px] font-[700] text-[#282C3F]">Welcome</p>
                                    <p class="font-[300] text-[14px]">To access account and manage orders</p>
                                    <a href="./profile.html"><button class="text-[#FF3F6C] border-[1px] border-[#d7d7d7] hover:border-[#FF3F6C] duration-300 text-[14.5px] font-[700] mt-3 px-4 py-1.5 cursor-pointer">LOGIN / SIGN UP</button></a>
                                    <div class="line h-[1px] w-full bg-[#d7d7d7] mt-5 mb-3"></div>
                                    <ul class="text-sm text-gray-700 space-y-1">
                                        <li class="hover:font-bold"><a href="#">Orders</a></li>
                                        <li class="hover:font-bold"><a href="#">Wishlist</a></li>
                                        <li class="hover:font-bold"><a href="#">Gift Cards</a></li>
                                        <li class="hover:font-bold"><a href="#">Contact Us</a></li>
                                        <li class="hover:font-bold"><a href="#">Myntra Insider</a></li>
                                    </ul>
                                    <div class="line h-[1px] w-full bg-[#d7d7d7] mt-4 mb-3"></div>
                                    <ul class="text-sm text-gray-700 space-y-1">
                                        <li class="hover:font-bold"><a href="#">Myntra Credit</a></li>
                                        <li class="hover:font-bold"><a href="#">Coupons</a></li>
                                        <li class="hover:font-bold"><a href="#">Saved Cards</a></li>
                                        <li class="hover:font-bold"><a href="#">Saved VPA</a></li>
                                        <li class="hover:font-bold"><a href="#">Saved Addresses</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="icon flex flex-col items-center">
                            <i class="ri-heart-line text-[20px] relative top-[5px]"></i>
                            <p class="text-[12px] font-[700]">Wishlist</p>
                        </div>
                        <div class="relative cursor-pointer">
                            <div class="flex flex-col items-center">
                                <a href="./addtocart.html">
                                    <div class="relative">
                                        <i class="ri-shopping-bag-line text-[20px] relative top-[5px]"></i>
                                    </div>
                                    <p class="text-[12px] font-[700]">Bag</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="input-box flex justify-center pt-24">
            <div class="nav-input bg-white shadow-lg h-[40px] rounded-3xl sm:w-[75%] w-[95%] lg:hidden flex items-center pl-3">
                <i class="fa-solid fa-magnifying-glass text-[#282C3F] text-[14px]"></i>
                <input type="search" class="sProduct2 w-full text-[14px] pl-4 border-0 outline-0" placeholder="Search for products, brand and more" onInput="searchProduct()">
            </div>
        </div>
        <div class="nav-icon fixed bottom-0 sm:hidden w-full bg-white z-10">
            <div class="icon-box flex justify-between items-center gap-8 pt-3 pb-1 px-[6vw]" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
                <div class="icon flex flex-col justify-center items-center pt-1">
                    <img src="./Assets/myntra_logo-removebg-preview.png" width="30px" alt="">
                    <p class="text-[12px] font-[700]">Home</p>
                </div>
                <div class="icon flex flex-col justify-center items-center pt-0.5">
                    <img src="./Assets/fwd.jpeg" width="37.5px" alt="">
                    <p class="text-[12px] font-[700]">Wishlist</p>
                </div>
                <div class="relative cursor-pointer">
                    <div class="flex flex-col items-center">
                        <a href="./addtocart.html">
                            <div class="relative">
                                <i class="ri-shopping-bag-line text-[20px] relative top-[5px]"></i>
                            </div>
                            <p class="text-[12px] font-[700]">Bag</p>
                        </a>
                    </div>
                </div>
                <div class="icon flex flex-col justify-center items-center pb-0.5 cursor-pointer">
                    <a href="./profile.html" class="flex flex-col justify-center items-center pb-0.5 cursor-pointer">
                        <i class="ri-user-3-line text-[20px] relative top-[5px] cursor-pointer"></i>
                        <p class="text-[12px] font-[700] cursor-pointer">Profile</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
`;
let footerbox = document.getElementById('footerbox');
footerbox.innerHTML = `
  <footer class="bg-[#FAFBFC] py-10 text-[#282C3F] sm:pb-10 pb-28">
        <div class="footer max-w-6xl mx-auto px-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div class="">
                    <h3 class="text-xs font-bold uppercase mb-5">Online Shopping</h3>
                        <ul class="space-y-[5px] text-sm text-[#696B79]">
                            <li><a href="#" class="hover:text-[#282C3F]">Men</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Women</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Kids</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Home & Living</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Beauty</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Gift Cards</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Myntra Insider</a></li>
                            <div class="footer-section mt-6">
                                <h3 class="text-xs font-bold uppercase mb-5 text-black">Useful Links</h3>
                                <ul class="space-y-[5px] text-sm text-[#696B79]">
                                    <li><a href="#" class="hover:text-[#282C3F]">Blog</a></li>
                                    <li><a href="#" class="hover:text-[#282C3F]">Careers</a></li>
                                    <li><a href="#" class="hover:text-[#282C3F]">Site Map</a></li>
                                    <li><a href="#" class="hover:text-[#282C3F]">Corporate Information</a></li>
                                    <li><a href="#" class="hover:text-[#282C3F]">Whitehat</a></li>
                                    <li><a href="#" class="hover:text-[#282C3F]">Cleartrip</a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold uppercase mb-5">Customer Policies</h3>
                        <ul class="space-y-[5px] text-sm text-[#696B79]">
                            <li><a href="#" class="hover:text-[#282C3F]">Contact Us</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">FAQ</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">T&C</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Terms of Use</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Track Orders</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Shipping</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Cancellation</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Returns</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-[#282C3F]">Grievance Redressal</a></li>
                        </ul>
                    </div>
                    <div class="col-span-2">
                        <h3 class="text-xs font-bold uppercase mb-5">Experience Myntra App on Mobile</h3>
                        <div class="flex gap-3 mt-2">
                            <a href="#"><img class="h-10" src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play"></a>
                            <a href="#"><img class="h-10" src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="App Store"></a>
                        </div>
                        <h3 class="text-xs font-bold uppercase mt-6 mb-3">Keep in Touch</h3>
                        <div class="flex gap-2">
                            <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center">
                                <img src="./Assets/facebook.png" class="w-[23px]" alt="Facebook">
                            </a>
                            <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center">
                                <img src="./Assets/twitter'.png" class="w-[23px]" alt="Twitter">
                            </a>
                            <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center">
                                <img src="./Assets/youtube.png" class="w-[23px]" alt="YouTube">
                            </a>
                            <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center">
                                <img src="./Assets/instagram.png" class="w-[23px]" alt="Instagram">
                            </a>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="footer-part">
                            <div class="flex gap-4">
                                <img class="w-12 mb-2" src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="100% Original">
                                <p class="text-xs text-[16px] text-[#696B79]"><b class="text-[16px] font-[700] text-[#282C3F]">100% ORIGINAL</b> guarantee for all products</p>
                            </div>
                            <div class="flex gap-4">
                                <img class="w-12 mb-2" src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="Return Policy">
                                <p class="text-xs text-[16px] text-[#696B79]"><b class="text-[16px] font-[700] text-[#282C3F]">Return within 30 days</b> of receiving your order</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="heading flex items-center justify-between mt-6">
                    <h3 class="text-xs col-span-1 font-bold uppercase">POPULAR SEARCHES</h3>
                    <div class="line h-[1px] lg:w-[89%] bg-[#dfdfdf]"></div>
                </div>
                <p class="text-[#696B79] text-[15px] leading-[27px] pt-4 cursor-pointer">Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses| Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</p>
                <div class="grid md:grid-cols-3 grid-cols-1 mt-8">
                    <div class="box flex"><p class="text-[#696B79]">In case of any concern, <span class="text-[#526CD0] font-[700] cursor-pointer">Contact Us</span>
                    </p></div>
                    <div class="box flex md:justify-center"><p class="text-[#696B79]">© 2025 www.myntra.com. All rights reserved.</p></div>
                    <div class="box flex md:justify-end"><p class="text-[#696B79]">A Flipkart company</p></div>
                </div>
                <div class="line h-[1px] w-full mt-7 bg-[#dfdfdf]"></div>
                <div class="heading mt-9">
                    <h3 class="text-[15px] col-span-1 font-bold">Registered Office Address</h3>
                    <div class="grid sm:grid-cols-2">
                        <div class="address">
                            <p class="text-[#696B79] text-[15px] pt-1">Buildings Alyssa,</p>
                            <p class="text-[#696B79] text-[15px]">Begonia and Clover situated in Embassy Tech Village,</p>
                            <p class="text-[#696B79] text-[15px]">Outer Ring Road,</p>
                            <p class="text-[#696B79] text-[15px]">Devarabeesanahalli Village,</p>
                            <p class="text-[#696B79] text-[15px]">Varthur Hobli,</p>
                            <p class="text-[#696B79] text-[15px]">Bengaluru - 560103, India</p>
                        </div>
                        <div class="contact flex flex-col justify-end sm:items-center">
                            <p class="text-[#696B79] text-[15px]">CIN: U72300KA2007PTC041799</p>
                            <p class="text-[#696B79] text-[15px]">Telephone: <span class="text-[#526CD0] font-[700] cursor-pointer">+91-80-61561999</span></p>
                        </div>
                    </div>
                </div>
                <div class="line h-[1px] w-full mt-7 bg-[#dfdfdf]"></div>
                <h3 class="text-[14px] col-span-1 font-bold uppercase pt-8">ONLINE SHOPPING MADE EASY AT MYNTRA</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</p>
                <h3 class="text-[14px] col-span-1 font-bold uppercase pt-8">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">1.</span> <span class="text-[#696B79] text-[14px]"><span class="text-[14px] font-bold text-[#282C3F]">Smart men’s clothing</span>- At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</span></p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">2.</span> <span class="text-[#696B79] text-[14px]"><span class="text-[14px] font-bold text-[#282C3F]">Trendy women’s clothing</span> - Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</span></p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">3.</span> <span class="text-[#696B79] text-[14px]"><span class="text-[14px] font-bold text-[#282C3F]">Fashionable footwear</span> - While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</span></p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">4.</span> <span class="text-[#696B79] text-[14px]"><span class="text-[14px] font-bold text-[#282C3F]">Stylish accessories </span> - Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</span></p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">5.</span> <span class="text-[#696B79] text-[14px]"><span class="text-[14px] font-bold text-[#282C3F]">Fun and frolic</span>- Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.</span></p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">6.</span> <span class="text-[#696B79] text-[14px]"><span class="text-[14px] font-bold text-[#282C3F]">Beauty begins here</span> - You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</span></p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-3">Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</p>
                <h3 class="text-[14px] col-span-1 font-bold uppercase pt-6">AFFORDABLE FASHION AT YOUR FINGERTIPS</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
                <h3 class="text-[14px] col-span-1 font-bold uppercase pt-6">MYNTRA INSIDER</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.</p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-3">There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.</p>
                <h3 class="text-[14px] col-span-1 font-bold pt-6">Insider</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-2 flex items-center gap-3"><i class="ri-circle-fill text-[7px] pl-6"></i>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-2 flex items-center gap-3"><i class="ri-circle-fill text-[7px] pl-6"></i>Curated collections from celeb stylists.</p>
                <h3 class="text-[14px] col-span-1 font-bold pt-6">Elite</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-2 flex items-center gap-3"><i class="ri-circle-fill text-[7px] pl-6"></i>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-2 flex items-center gap-3"><i class="ri-circle-fill text-[7px] pl-6"></i>Exclusive early access to Limited Edition products</p>
                <h3 class="text-[14px] col-span-1 font-bold pt-6">Icon</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-2 flex items-center gap-3"><i class="ri-circle-fill text-[7px] pl-6"></i>Chance to get on guest lists for special events.</p>
                <h3 class="text-[14px] col-span-1 font-bold pt-6">Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.</p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-3">Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.</p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-3">Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.</p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-3">If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.</p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">1.</span> <span class="text-[14px] font-bold text-[#282C3F]">Keep Up With What Your Favourite Fashion Icons Are Upto</span></p>
                <p class="pl-11 text-[#696B79] text-[14px] leading-[18px] pt-3">The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.</p>
                <p class="pl-11 text-[#696B79] text-[14px] leading-[18px] pt-3">Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.</p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">2.</span> <span class="text-[14px] font-bold text-[#282C3F]">Quick Fashion Tip And Tricks</span></p>
                <p class="pl-11 text-[#696B79] text-[14px] leading-[18px] pt-3">Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">3.</span> <span class="text-[14px] font-bold text-[#282C3F]">Updates on What Is Trending and New Product Launches</span></p>
                <p class="pl-11 text-[#696B79] text-[14px] leading-[18px] pt-3">Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.</p>
                <p class="pl-11 text-[#696B79] text-[14px] leading-[18px] pt-3">Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.</p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">4.</span> <span class="text-[14px] font-bold text-[#282C3F]">Explicit Step-By-Step Beauty Routines From Experts</span></p>
                <p class="pl-11 text-[#696B79] text-[14px] leading-[18px] pt-3">Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.</p>
                <p class="pt-3 leading-[18px] flex gap-1 pl-7"><span class="text-[#696b79]">5.</span> <span class="text-[14px] font-bold text-[#282C3F]">Celebrity Confessions And A Look Into Their Lives</span></p>
                <p class="pl-11 text-[#696B79] text-[14px] leading-[18px] pt-3">A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.</p>
                <p class="pl-11 text-[#696B79] text-[14px] leading-[18px] pt-3">If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</p>
                <h3 class="text-[14px] col-span-1 font-bold uppercase pt-8">MYNTRA APP</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!</p>
                <h3 class="text-[14px] col-span-1 font-bold uppercase pt-8">HISTORY OF MYNTRA</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</p>
                <h3 class="text-[14px] col-span-1 font-bold uppercase pt-8">SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h3>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.</p>
                <p class="text-[#696B79] text-[14px] leading-[18px] pt-1">Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
         </div>
           </footer>
`;