/*14.1 create a new HTTP message to send to the backend message = request */
const xhr = new XMLHttpRequest();

/*14.4 in order to wait response we're going to use this code xhr.addeEventlistener and  this function takes two parameters the first parameter is the event that we want to listen for in this case we will give it  load the second is function that we want to run after this event happens */
xhr.addEventListener('load',()=>{
  console.log(xhr.response);
});
/*14.2 where can I give open to parameters 1 is what type of HTTP message to send one type of message we can send is the string get 2 we're going to give open the second parameter this parameter tells a computer where to send this HTTP message so using HTTP we can send the message to any computer that's connected to the internet we need to use  URL stands for uniform resource locator it's kind of like an address but for the internet URL helps us locate another computer on the internet*/
xhr.open('GET','https://supersimplebackend.dev');

xhr.send();


/*14.5 we can send different messages what different the request to the backend using URL path a URL path is the part that comes after the domain name there's no URL at the end the URL path is /  you can send a message to the URL path and each URL path will give us a different response */

/*14.3 xhr.response it takes time for the request to travel across the internet so the response is not  variable right away and it will be undefined at first send() is asynchronous code  */

/*14.6 the status code starter with 4 ;5 means failed 4 means our program 5 minutes backhand problem ,status code start with 2 means succeed */

/*14.7 how do I know which URL path are supported and which are not there is actually no way to figure out all the URL path that are supported this is for security reason however some backends provide a documentation page that list the URL path that I supported and what kind of response that they give the, list that all the URL path are supported is called the backend API API = application programming interface interface means how we interact with something backend can respond with different types of data one type of data  the backend  respond with is text;JSON;html;image ,once we got this type of JSON we can use JSON.parse() converted back into a JavaScript objectbasically this allows us to send JavaScript object across the internet to the back end*/

/*14.8 typing url in browser did the samething with get a request in JavaScript request images/html in browser it will display the actual images/html in the browser but if you request images/html  in JavaScript it will display raw data*/