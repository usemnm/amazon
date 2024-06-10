/*8 generate the payment HTML three steps 
  8.1 save the data 
    
    8.1.1:for each product price *quantity 
    8.1.2: add all product price *quantity together
    8.1.3:loop through the cart 
    8.1.4:add all shipping cost together
    8.1.5:add all product price multiple quantity and all shipping cost together
  8.2 generate the HTML 
  8.3 make it Interactive*/

import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utlis/money.js'
import { addOrder } from '../../data/orders.js';
/*8.3 make it Interactive
how to make it interact it is related to the delete element not go to the order summary jazz in the delete element when we click the delete we should regenerate the payment summary create this function renderPaymentSummary (),this will recalculate all the numbers and then regenerate HTML import this function to ordersummary.js delete element*/
export function renderPaymentSummary () {
  /*  8.1.2: add all product price *quantity together*/
  let productpriceCents = 0;
  /*8.1.1:loop through the cart */
  let shippingPriceCents = 0;
  cart.forEach((cartItem)=>{
   const product = getProduct(cartItem.productId);
   productpriceCents += product.priceCents * cartItem.quantity;

   const DeliveryOption = getDeliveryOption(cartItem.deliveryOptionId); 
   shippingPriceCents += DeliveryOption.priceCents;
  });
  const totalBeforTaxCents=productpriceCents + shippingPriceCents;
  const taxCents = totalBeforTaxCents * 10 /100;
  const totalCents = totalBeforTaxCents + taxCents;
  /* 8.2 generate the HTML*/ 
  const paymentSummaryHTML= `
      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">
        $${formatCurrency(productpriceCents)}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">
        $${formatCurrency(shippingPriceCents)}
        </div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">
        $${formatCurrency(totalBeforTaxCents)}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">
        $${formatCurrency(taxCents)}
        </div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">
        $${formatCurrency(totalCents)}
        </div>
      </div>

      <button class="place-order-button button-primary js-place-order">
        Place your order
      </button>
`;
document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

document.querySelector('.js-place-order')
.addEventListener('click',async ()=>{

  try{
    const response = await fetch('https://supersimplebackend.dev/orders',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        cart:cart
      })
    });
  const order = await response.json()
  addOrder(order);
    /*22.1 we need to send some data to the backend we need to send our cart to the backend in order to create an order to send data in a request we need to use a different type of request there are four common types of requests 
    get =get something from the backend
    post =create something let us send data to the backend
    put =update something
    delete =delete something*/
  } catch(error) {
    console.log('unexpected error try again')
  }
  window.location.href ='orders.html';
});
}

    /*22.1.1 URL parameters lets us save data directly in the URL
    http://127.0.0.1:5500/tracking.html?orderId=123
    ? = we are adding a URL parameter to this URL so a parameter is a property value pair right side is the property left the side is the value,we can use & give it a multiple property value pair,we can use JavaScript to get this data out of URL
    */  