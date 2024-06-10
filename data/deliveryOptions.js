/*6.2 main idea of JavaScript
1 save the data 
each product have delivery time like 7 days or 3 days and each option have a price we could save delivery option details inside the cart however this data gets duplicated for each product in the cart instead we're going to save delivery options separately and then just save an ID points to the delivery option as a reminder this technique called normalizing the data we save delivery separately and then just points to the full delivery option
2 generate the HTML 
3 make it Interactive */

/*6.2.1.1 save the data about delivery option */
export const deliveryOptions = [
  {
    id: '1',
    deliveryDay: 7,
    priceCents: 0
  },
  {
    id: '2',
    deliveryDay: 3,
    priceCents: 499
  },
  {
    id: '3',
    deliveryDay: 1,
    priceCents: 999
    },
  ];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption ;
  deliveryOptions.forEach((option) =>{
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  /*give the deliveryoption a default value in case didn't find a deliveryoption*/
  return deliveryOption || deliveryOption [0];
}  
