let cartProductsObject = [];
let cartItemsContainer = document.querySelector(".cart-items-container");
const CONVENIENCE_FEE = 99;
const loading = async () => {
  loadCartProducts();
  showCartProducts();
  showSummary();
};

const loadCartProducts = async () => {
  cartProductsObject = cartProducts.map((productId) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        return products[i];
      }
    }
  });
};

const showCartProducts = async () => {
    cartItemsContainer.innerHTML = "";
  cartProductsObject.map((item) => {
    const discount = parseInt(
      ((item.originalPrice - item.currentPrice) / item.originalPrice) * 100
    );
    cartItemsContainer.innerHTML += `<div class="cart-item-container" key=${item.id}>
      <div class="item-left-part">
      <img class="cart-item-img" src="${item.image}" alt="imagee" />
      </div>
      <div class="item-right-part">
      <div class="company">${item.companyName}</div>
      <div class="item-name">${item.itemName}</div>
      <div class="price-container">
      <span class="curr_price">₹ ${item.currentPrice}</span>
          <span class="orig_price">₹ ${item.originalPrice}</span>
          <span class="discount">(${discount}% OFF)</span>
        </div>

        <div class="return-period">
          <span class="return-period-days">${item.return_period} days</span> return available
          </div>
          <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${item.delivery_date}</span>
          </div>
          </div>
          
          <div class="remove-from-cart" onclick="removefromCart(${item.id})">x</div>
          </div>`;
  });
};


const showSummary = async () => {
  let cart_price = document.querySelector(".cart-summary");

  let totalPrice = 0;
  let totalDiscount = 0;

  cartProductsObject.forEach((cartItem) => {
    totalPrice += cartItem.originalPrice;
    totalDiscount += cartItem.originalPrice - cartItem.currentPrice;
  });

  let finalPrice = totalPrice - totalDiscount + CONVENIENCE_FEE;

  cart_price.innerHTML = `<div class='bag-details-container'>
        <div class='price-header'>PRICE DETAILS (${cartProductsObject.length} ${
    cartProductsObject.length > 1 ? "items" : "item"
  })</div>
        <div class='price-item'>
            <span class='price-item-tag'>Total MRP</span>
            <span class='price-item-value'>₹ ${totalPrice}</span>
        </div>
        <div class='price-item'>
            <span class='price-item-tag'>Discount on MRP</span>
            <span class='price-item-value priceDetail-base-discount'>-₹ ${totalDiscount}</span>
        </div>
        <div class='price-item'>
            <span class='price-item-tag'>Delivery Fee</span>
            <span class='price-item-value'>₹ ${CONVENIENCE_FEE}</span>
        </div>
        <hr />
        <div class='price-footer'>
        <span class='price-item-tag'>Total Amount</span>
        <span class='price-item-value'>₹ ${finalPrice}</span>
        </div>
    </div>
    <button class='btn-place-order'>
        <div class='css-xjhrni'>PLACE ORDER</div>
    </button>`;

    document.querySelector('.btn-place-order').addEventListener('click', () => {
        processPayment();
      });

  if (cartProductsObject.length === 0) {
    document.querySelector(".cart-page").innerHTML =
      "<div class='empty'><h3>Your Cart is Empty!...😒</h3><a href=../index.html>Go To Products</a></div>";
  }

};

const processPayment = () => {
    // Disable the button to prevent multiple clicks during the "payment" process
    const placeOrderBtn = document.querySelector('.btn-place-order');
    placeOrderBtn.disabled = true;
    placeOrderBtn.innerHTML = "Processing...";
  
    // Simulate payment delay of 3-5 seconds
    const paymentDelay = Math.floor(Math.random() * 2000) + 3000;  // Random delay between 3000ms to 5000ms
  
    setTimeout(() => {
      // After the delay, show success message
      placeOrderBtn.innerHTML = "Order Placed Successfully!";
      setTimeout(() => {
        // Optionally reset the button after a short time
        placeOrderBtn.innerHTML = "PLACE ORDER";
        placeOrderBtn.disabled = false;
  
        // Show the custom success alert
        showCustomAlert();
  
        // Clear the cart products from localStorage
        localStorage.removeItem("products");
  
        // Clear the cart data and update UI
        cartProducts = [];  // Empty the cartProducts array
        cartProductsObject = [];  // Empty the cartProductsObject array
  
        // Update the cart summary and cart UI to reflect the empty cart
        showSummary();
        loadCartProducts(); // This will reload the cart and show empty cart state
  
        // Optionally, reset the cart icon/count display
        showCartCount();
        
      }, 2000); // Success message stays for 2 seconds
    }, paymentDelay);  // Simulate delay
  };
  
  // Function to show the custom alert
  const showCustomAlert = () => {
    const alertContainer = document.querySelector('.custom-alert-container');
    alertContainer.style.display = 'flex'; // Show the alert
  };
  
  // Function to close the custom alert
  const closeCustomAlert = () => {
    const alertContainer = document.querySelector('.custom-alert-container');
    alertContainer.style.display = 'none'; // Hide the alert
  };

const removefromCart = async(productId)=>{
    cartProducts = cartProducts.filter((cartProductId)=>{
        return productId !== cartProductId; 
    });
    localStorage.setItem("products",JSON.stringify(cartProducts));
    loadCartProducts();
    showCartProducts();
    showCartCount();
    showSummary();
};
loading();

// console.log(cartProducts);
