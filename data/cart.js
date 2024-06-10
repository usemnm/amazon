/* 4.2 first export I'm going to go to the cart.js file to choose which variables can be accessed out of it this file for example we want to access the variable cart outside of this file to do this  in front of the variable type the word export and space and save now this variable can be used outside of cart.js the last step is important we're going to go to the place where we are going to go to use this variable which is inside amazon.js at the top I'm going to tell the computer which variable we want to get from another file so we will type import  { } between this bracket I'm going to give the name of the variable we want to get which is the cart variable and then I'm going to tell the computer which file we want to get this variable from so  type from '  ';  inside this '  ' we're going to locate the file using a file path */

/*5.1 in order to do checkout we give this empty cart[ ] some information from the product [ id ] data in order to write code such as cart[ 
{
productID:''2134-sasa",
quantity:2}
]  to do 
the checkout page ,export this cart=[ ] variable import this cart [ ]variable into the page which needed such as checkout.Js*/

/*5.6 we're going to get the cart from localstorage getitem() takes one string that is the name of what we saved early which is the cart localstorage can only save strings it will give us string version of our cart we need to convert it back into an array version to convert it back to an array you can use the code JSON.parse()*/

/*17 object oriented programming means organizing our code into object */
export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart =  JSON.parse(localStorage.getItem('cart'));

    /*6.2.1.4 after deliveryID add to addtocart ()  we need to add deliveryID to the local storage as well but it keeps things simple that's just a shortcut,save the data about delivery option go to inspect-console by typing localStorage.removeItem('cart') ,if you have some error about localstorage you can go to inspect-console by typing localStorage.clear()*/
if (!cart) {
  cart = [
    {
      productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: '1'
      },

    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: '2'
    }
  ];
}

}

/*5.4  variables already set when we refresh the page or go to different page so let's use local storage creative function to save it we might reuse it, 5.5whenever we update the card we need to save it to local storage so it doesn't get a reset when we refresh page*/
function saveToStorage(){
  /* 5.4.1 setitem take 2 string 1 string is the name whatever we want to save 2 string is the data that we want to save local storage can only store strings to save our cart we need to convert it into a string we can do that use JSON.stringify inside we're going to give it to cart */
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;
  /*3:c5 steps 1: check if the product is already in the cart ,if it is in the court increase the quantity 2: if it's not in the court added to cart */
 /* 3:c6 the parameter item include product name and quantity */
  cart.forEach((item) =>{
   if(productId === item.productId) {
     /*3:c8 if we find the item product name we can save it in this matchingitem */
     matchingItem = item;
   };
  })
  /* 3:c9 if the product is already in the cart ,if it is in the court increase the quantity,we can just leave the matchingitem like this because if it is have the matching item is going to be true keep going the function next  if we didn't find the matching item we are going to run in there car.push() in else {car.push() }  */

  /*3:c10 it's not good to use product name to identify product because in ecomers website you might have the same name product but they are from different brands so to fix this can give each product and ID this ID should be unique so no products should have the same ID */
  if(matchingItem){
   matchingItem.quantity += 1;
  }else {
   cart.push({
     productId: productId,
     quantity: 1,
     /*6.2.1.3 save the data about delivery option */
     deliveryOptionId: '1'
    });
  }
  /*5.5whenever we update the card we need to save it to local storage so it doesn't get a reset when we refresh page*/
  saveToStorage();
};

/*5.3.2.3 let's create a remove function inside of card.JS fire we want our code organized */
/*remove each of the product is selected steps 
1 create a new array 
2 then we can look through the cart 
3 add each product to new array except for this delete product */

/*5.3.2.6 use it in the checkout JS file */
export function removeFromCart(productId) {
const newCart = [];
cart.forEach((cartItem) => {
  if (cartItem.productId !==productId)
/*5.3.2.4 it is the same thing with the cart will keep order product except the product with this productId product */
  newCart.push(cartItem);
});
/*5.3.2.5 because we changed the cart variable go to about make it to be declared to by let*/
cart = newCart
  /*5.5whenever we update the card we need to save it to local storage so it doesn't get a reset when we refresh page*/
saveToStorage();
}

/*6.3 make it an interactive 1 update delivery option ID in the cart array 2 update the page*/
 /*6.3.1 update delivery option ID in the cart array
  steps 
  1 Loop through the cart and find product
  2 update the deliveryOptionId of the product*/
export function updateDeliveryOption(productId,deliveryOptionId) {
 /*6.3.1 update delivery option ID in the cart array
  steps 
  1 Loop through the cart and find product*/
  let matchingItem;
  cart.forEach((item) =>{
   if(productId === item.productId) {
     matchingItem = item;
   };
  })
  /*6.3.1 update the page
  steps 
  2 update the deliveryOptionId of the product*/
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
 }

 export function loadCart(fun) {
  const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',()=>{    
    console.log(xhr.response);
    fun();
    });
    /*normally when we load cart it will give us an array however since we are just practicing my backend will give us some text*/
    xhr.open('GET','https://supersimplebackend.dev/cart');
    xhr.send();
  }
  