let cartCount = document.querySelector(".bag_count");
let cartProducts;
const onLoad = async()=>{
    getProducts();
    getLsProducts();
    showCartCount();
}
const getLsProducts = async()=>{
    let lsProducts = localStorage.getItem("products");
    cartProducts = lsProducts ? JSON.parse(lsProducts) : [];
};

cartProducts =getLsProducts();

const showCartCount = async()=>{
    if(cartProducts.length === 0){
        cartCount.style.visibility = "hidden";
    }else{
        cartCount.style.visibility = "visible";
        cartCount.innerText = cartProducts.length;
    }
}
// adding products to the cart 

const addToCart = async(productId)=>{
    if(cartProducts.includes(productId)){
        showAlert(); // if product is already in cart , simply showing a alert with some advanced css.
    }else{
        cartProducts.push(productId);
        localStorage.setItem("products",JSON.stringify(cartProducts));
        showCartCount();
        // console.log(cartProducts);
    }
}

const showAlert = async()=>{
    document.querySelector(".custom-alert").classList.add("show");
    document.body.style.overflow = "hidden";
};

const closeAlert = async()=>{
    document.querySelector(".custom-alert").classList.remove("show");
    document.body.style.overflow = "auto";
};

// getting products from product array and rendering them .
const getProducts = async()=>{
    const container = document.querySelector(".items_container");
    if(!container){
        return;
    }
    products.map((item)=>{
    let discount = parseInt((item.originalPrice - item.currentPrice) / item.originalPrice * 100);
    // console.log(discount);
    container.innerHTML+=`<div class="item_container">
                <img class="item_image" src="${item.image}" alt="imageee" />
            <div class="rating">
                ${item.rating} ⭐ | 1.2K
            </div>
            <div class="company_name">${item.companyName}</div>
            <div class="item_name">${item.itemName}</div>
            <div class="price">
                <span class="curr_price">₹ ${item.currentPrice}</span>
                <span class="orig_price">₹ ${item.originalPrice}</span>
                <span class="discount">(${discount}% OFF)</span>
            </div>
            <button class="cart_btn" onclick="addToCart(${item.id})">add to Wishlist</button>
            </div>`;
});
};

onLoad();