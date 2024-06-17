import {cart, removeFromCart, updateDeliveryOption} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import {formatCurrency} from '../utils/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions, getDeliveryOption} from '../../data/deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';



function orderSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  let productQuantity = 0;
  let orderHtml = '';
 
  cart.forEach((cartItem) => {
  const product = getProduct(cartItem.productId);


    const productID= product.id;
    const productImage =product.image;
    const productName=product.name;
    const productQuantitySingle=cartItem.quantity;
    const productPriceCentsSingle=product.priceCents * cartItem.quantity;

    console.log(productPriceCentsSingle);

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;

    const shippingPriceCentsSingle = deliveryOption.priceCents

    console.log (shippingPriceCentsSingle);

    const productTotalSingleBeforeTaxCents = productPriceCentsSingle + shippingPriceCentsSingle;

    console.log (productTotalSingleBeforeTaxCents);

    const productTotalSingle =productTotalSingleBeforeTaxCents + productTotalSingleBeforeTaxCents*0.1;

    console.log (productTotalSingle);

    productPriceCents += product.priceCents * cartItem.quantity;
    productQuantity += cartItem.quantity;

  

    
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;
  
   orderHtml += `
 
   <div class="amazon-header">
     <div class="amazon-header-left-section">
       <a href="index.html" class="header-link">
         <img class="amazon-logo"
           src="images/amazon-logo-white.png">
         <img class="amazon-mobile-logo"
           src="images/amazon-mobile-logo-white.png">
       </a>
     </div>

     <div class="amazon-header-middle-section">
       <input class="search-bar" type="text" placeholder="Search">

       <button class="search-button">
         <img class="search-icon" src="images/icons/search-icon.png">
       </button>
     </div>

     <div class="amazon-header-right-section">
       <a class="orders-link header-link" href="orders.html">
         <span class="returns-text">Returns</span>
         <span class="orders-text">& Orders</span>
       </a>

       <a class="cart-link header-link" href="checkout.html">
         <img class="cart-icon" src="images/icons/cart-icon.png">
         <div class="cart-quantity">${productQuantity}</div>
         <div class="cart-text">Cart</div>
       </a>
     </div>
   </div>

   <div class="main">
     <div class="page-title">Your Orders</div>

     <div class="orders-grid js-orders-grid">
       
       <div class="order-container">
         <div class="order-header">
           <div class="order-header-left-section">
             <div class="order-date">
               <div class="order-header-label">Order Placed:</div>
               <div>${today}</div>
             </div>
             <div class="order-total">
               <div class="order-header-label">Total:</div>
               <div>${formatCurrency(productTotalSingle)}</div>
             </div>
           </div>
     
           <div class="order-header-right-section">
             <div class="order-header-label">Order ID:</div>
             <div>${productID}</div>
           </div>
         </div>
     
         <div class="order-details-grid">
           <div class="product-image-container">
             <img src="${productImage}">
           </div>
     
           <div class="product-details">
             <div class="product-name">
               ${productName}
             </div>
             <div class="product-delivery-date">
               Arriving on: ${dateString}
             </div>
             <div class="product-quantity">
               Quantity: ${productQuantitySingle}
             </div>
             <button class="buy-again-button button-primary">
               <img class="buy-again-icon" src="images/icons/buy-again.png">
               <span class="buy-again-message">Buy it again</span>
             </button>
           </div>
     
           <div class="product-actions">
             <a href="tracking.html">
               <button class="track-package-button button-secondary">
                 Track package
               </button>
             </a>
           </div>
         </div>
     </div>
     </div>
   </div>
  `
  });

  document.querySelector('.js-body').innerHTML=orderHtml;
}
orderSummary()