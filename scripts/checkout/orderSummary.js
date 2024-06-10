/*5.1.2 in order to do checkout we give this empty cart[ ] some information from the product [ id ] data in order to write code such as cart[ 
{
productID:''2134-sasa",
quantity:2}
]  to do 
the checkout page ,export this cart=[ ] variable import this cart [ ]variable into the page which needed such as checkout.Js */
import {cart, removeFromCart,updateDeliveryOption} from '../../data/cart.js';
import {products,getProduct} from '../../data/products.js';
import {formatCurrency} from '../utlis/money.js';
/* 6  avoiding naming conflict instead of using  <script src="https://unpkg.com/dayjs@1.11.10/esm/index.js"> esm version of external Library */
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions,getDeliveryOption} from '../../data/deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';

/*6 external Library you only have a documentation page that shows us how to use the library we can find the documentation page by searching on Google the library name like dayjs documentation we can ask AI tool how to use the library 
for ours project to get the states 
1 get today's date
2 do calculations add 7 days 
3 displayed date in easy to read format*/

/* 5.2.6 combine all the HTML together let's create a variable to store the result each time I loop through the array I'm going to add this HTML up here*/


/*6.3.2.2.4 how to update to our page right now I need to refresh page I want it to immediately update so we already have generated HTML function to have another way we rerun all this code and the regenerate all the HTML first put all of this code inside a  function so we can rerun it */
export function renderOderSummary() {

    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
      /*5.2.1 generate the HTML let's get the caritem.product ID out of the cart array first */
        const productId = cartItem.productId;
      /*5.2.2 we need to use the product ID to search the full product which is in the product JS file products=[ ],import products from product.js */
      // console.log(typeof productId);
      /*5.2.2 create a variable for storing the result from in search the product[ ] */
      const matchingProduct = getProduct(productId);

        
      /*6.2.9 let's use the selected delivery date to replace the delivery-date above the picture,remember in cart[ ] we only saved the deliveryOptionId so let's use this to get the full deliveryOption */
      const deliveryOptionId = cartItem.deliveryOptionId;

      const deliveryOption = getDeliveryOption(deliveryOptionId);

      const today = dayjs();

      const deliveryDate = today.add(deliveryOption.deliveryDay,'days');
      
      const dataString = deliveryDate.format('dddd,MMMM,D');
      /*6.2.10 instead of always use the same delivery date we can insert  data string */    

      cartSummaryHTML = cartSummaryHTML + `          
        <div class="cart-item-container 
        js-cart-item-container
        js-cart-item-container-${matchingProduct.id}">
          <div class="delivery-date">
            Delivery date: ${dataString}
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchingProduct.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-price">
                $ ${matchingProduct.getPrice()}
              </div>
              <div class="product-quantity 
              js-product-quantity-${matchingProduct.id}">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link
                js-delete-link-${matchingProduct.id}" 
                data-product-id=${matchingProduct.id}>
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              ${deliveryOptionHTML(matchingProduct,cartItem)}
              
            </div>
          </div>
        </div>
        `;
    /*5.2.7 radio selector is an attribute of input element if all the input element have all the same name the radio selector only can choose one of them,because of the product ID is unique so we can use to protect ID to substitute delivery option one you have to use matching product to insert the value*/
    });

    /* 6.2 generate HTML for our code organized write a function for generating HTML steps 
    1 loop through the delivery options which we create earlier
    2 for each option we are going to generate some HTML 
    3 combined stomach together*/

    /* 6.2.7 because the matchingproduct is not accessible inside this function so let's just passing the matchingproduct into here */

    /* 6.2.8.1 in this function we actually don't have caritem so let's pass it in as a parameter */
    function deliveryOptionHTML(matchingProduct,cartItem) {


        /*6.2.3 create a variable to store the HTML*/
      let html='';
      deliveryOptions.forEach((deliveryOption) => {
        const today = dayjs();

        const deliveryDate = today.add(deliveryOption.deliveryDay,'days');
        
      const dataString = deliveryDate.format('dddd,MMMM,D');
        /*6.2.1 if priceCents is 0 we want to display the price is free if priceCents is not 0 we want to display the price as a dollar with a dash,
        if the first part is true the value is whatever is after this ? if the first part is false then the value is whatever is after the  :  */

      const priceString = deliveryOption.priceCents === 0
      ? 'FREE'
      : `$${formatCurrency(deliveryOption.priceCents)} -`;

      /*6.2.2 substitute HTML by datastring and pricestring*/
      /*6.2.4 create a variable to store the HTML*/

      /*6.2.8 when we enter into the car page check out section the delivery option was empty instead of doing that we want to one of them is selected 1:give the radio selector attract a checked attribute 2 however we don't want all the radio selector to be checkd we only want it to be checked if it matches the delivery option ID that is saved in the cart */   
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      /*6.2.9 now we have ischecked variable we can  use a ternary operator insert it into radio selector checked attribute */
        /*6.3.2 update the page
        steps 
        2 update the deliveryOptionId of the product
        2.1 give to delivery section element a class in order to add event listener*/

        /*6.3.2.2.2 how do we get this two values if we scrool up we have access to the productId they also have access to the deliveryOptionId so we can use data attributes to attach it to this element*/
      html = html +
        `
            <div class="delivery-option js-delivery-option"
            data-product-id="${matchingProduct.id}"
            data-delivery-option-id="${deliveryOption.id}">
              <input type="radio"
                ${isChecked ? 'checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                ${dataString}
                </div>
                <div class="delivery-option-price">
                  $${priceString} Shipping
                </div>
              </div>
            </div>
        `
      });
      /*6.2.5 after  create HTML return html to this function*/
      return html;
      /*6.2.6 after generate  this sanction of HTML go to the part of product HTML replace it */

    } 

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


    /*5.3.2.3 let's create a remove function inside of card.JS fire we want our code organized */
    /*5.3.1 make the delete button reactive not even listening to order delete buttons*/
    document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{

    /*5.3.2 when we click the link we do two steps 1 remove the product from cart 2 we also going to update our HTML and removed product from the page */
    /*5.3.2.1 how do we know which product to move from the cart , we can attach the productId to the link element by typing data-..  back to link element*/
    /*5.3.2.2 we can use the link.dataset.product ID access to link elements value which is product ID and make it saved in a variable for using it later */
    const productId = link.dataset.productId;

    removeFromCart(productId);


    /*5.3.2.7 delete the product from HTML they have 2 way 1 is use the dom to get the element to remove 2 we can use it a method .remove() every element that we got from the dom has a method called remove which removes it from the page ,how do we know which product we should  to remove let us go to the website check product contains in which element and add a special class to this element which contains product ID grab it in the JavaScript,because we want to insert something in here we're going to switch this into template string */
    const container = document.querySelector(`.js-cart-item-container-${productId}`)

    container.remove();
    /* 8.3 make it Interactive make payment summary interactive with order summary */
    renderPaymentSummary ();

    });
    })

    /*6.3.2 update the page
    steps 
    2 update the deliveryOptionId of the product
    2.1 give to delivery section element a class in order to add event listener
    2.2  add event listener*/
    document.querySelectorAll('.js-delivery-option')
    .forEach((element) =>{
      element.addEventListener('click',()=>{
        /*6.3.2.2.3
        use an object to save the elements property which be touched early */
        const {productId,deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId,deliveryOptionId)
        /*6.3.2.2.2 how do we get this two values if we scrool up we have access to the productId they also have access to the deliveryOptionId so we can use data attributes to attach it to this element*/

        /*6.3.2.2.6 put all of this code inside a  function so we can rerun it */

        /*6.3.2.2.7 two things I want to point out here
        1 we put our event listeners into this big function that's because when we are regenerating all the HTML we essentially deleting the previous HTML and the replacing it so we need to addeventlistener again and replacing it 
        2 I want to point out is that inside the renderordersummary function we can call render order summary function a function can call itself or rerun itself this  is called recursion is useful when they function needs to rerun all the codes*/
        renderOderSummary();
        renderPaymentSummary ();
      });
    });
}
/*6.3.2.2.6 put all of this code inside a  function so we can rerun it */
// renderOderSummary();

/*7 regenerates all HTML this technique is called MVC MVC stands for model view controller in MVC split code into three parts first part is model this is all the code that saves and managers the data second part of MVC is View this is code that takes the data and the displays it on the page the last part of MVC  is controller it run some code when we interact with page and then they interact with each other in the loop first we use the model to generate View then we interact with view it will run the controler then the controller will update the model 
that's how MVC works instead of updating the page directly with DOM we just update our data and we just and then regenerate all HTML so we use MVC because doing this make sure that the page always matches the data so MVC is known as a design pattern it's a way to organize and Design our code in the future you might use the  technology called a JavaScript framework to build website manage our JavaScript framework are based on MVC so is useful to know how it works*/

/* 7.1 view our checkout page we can split into two part the left part , right part so it makes our website more organized and let's create a new Javascript file for the right part of checkout page*/

/*7.2
1:checkout.html still running with checkout.js so we need to export renderorderSummary() and  import renderorderSummary() into checkout.js
2:we moved to this file into a folder so all of the fire paths need to be update */