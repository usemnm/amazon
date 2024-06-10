//17.7 class specifically designed for generating object class basically is an object generator

class Cart{
//17.8 inside of the class we going to put the property in the method that we want for each object that we generate,class use slightly different syntax than object instead of using : we're going to make it =,now add a property to a class now that every object that we generate will have this property,each object that we generate from a class is called an instance of the class ，when we have a property inside of class and is equal undefined we can actually remove equal undefined,without hash in front this is a public property it can be accessed anywhere
cartItems ;

//make local storage key private to add a number sign or called hash at the front this means it can only be used inside of this class
#localStorageKey ;

//17.9.6 we generate an object it will run this Constructor automatically this is a good place to put our setup code，more details about Constructor 1 has to be named Constructor 2 should not return anything

constructor(localStorageKey) {
  this.#localStorageKey = localStorageKey;

  //each object that we create is going to run the contractor so we only need one of each of this line let's remove the setup for the businessCart
  this.#loadFromStorage();

  //17.9.3 we will load the cart from Storage as well as the business cart  
}
      //make a method private at a harsh # in front
    #loadFromStorage() {
      
      //17.9 localstoragekey doesn't exist anymore to fix this we're going to save this in a property instead
      this.cartItems =  JSON.parse(localStorage.getItem(this.#localStorageKey));


    if (!this.cartItems) {
      this.cartItems = [
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

    saveToStorage(){
    
      localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
      }

    addTOCart(productId) {
      let matchingItem;
    
      this.cartItems.forEach((item) =>{
       if(productId === item.productId) {
       };
      })
      
      if(matchingItem){
       matchingItem.quantity += 1;
      }else {
        this.cartItems.push({
         productId: productId,
         quantity: 1,
    
         deliveryOptionId: '1'
        });
      }
     
     this.saveToStorage();
    }

    removeFromCart(productId) {
      const newCart = [];
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !==productId)
      
        newCart.push(cartItem);
      });
      
      this.cartItems = newCart
      
      this.saveToStorage();
      }

    updateDeliveryOption(productId,deliveryOptionId) {

      let matchingItem;
      this.cartItems.forEach((item) =>{
        if(productId === item.productId) {
          matchingItem = item;
        };
      })
    
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
      }
}

//17.9.1 class use the similar syntax as a function except we use a word new in front of it ,this generates a new object using our class this object will have all the properties and the methods that we added above 
const cart = new Cart('cart-oop')
const businessCart = new Cart('cart-bunisess');

//17.9.2 each of the class have property called localstorage key and currently undefined we need to set this property


console.log(cart);
console.log(businessCart);

//17.9.4 you can also check if an object is an instance of a class ,object oriented programming means organizing our code into objects,class = help us generate this object a class is basically an object generator
console.log(businessCart instanceof Cart);

//17.9.5 let's talk about the benefit of using class a class looks like the object that is generates this is cleaner than using a function second class have extra features for object oriented programming the first feature called Constructor which let us run setup code I have to creating an object





