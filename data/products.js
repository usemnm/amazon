import {formatCurrency} from '../scripts/utils/money.js';

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `¥:${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    // super.extraInfoHTML();
    return `
      <a href="${this.sizeChartLink}" target="_blank">
        Size chart
      </a>
    `;
  }
}

/*
const date = new Date();
console.log(date);
console.log(date.toLocaleTimeString());
*/

/*
console.log(this);

const object2 = {
  a: 2,
  b: this.a
};
*/

/*
function logThis() {
  console.log(this);
}
logThis();
logThis.call('hello');

this
const object3 = {
  method: () => {
    console.log(this);
  }
};
object3.method();
*/

export const products = [
  {
    id: "d5f378e8-7e7e-4580-ab1f-6e8d801bebec",
    image: "images/products/chanpingjianjie.jpg",
    name: "商品简介",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 0,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "3538e827-af13-4542-be83-3046f6f705d8",
    image: "images/products/honghuadajinyuan.jpg",
    name: "红花大金元",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 6800,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "3de6cb84-e42e-4d5a-8dc0-e1412b1ba1b7",
    image: "images/products/xinjiangmoheyan.jpg",
    name: "新疆莫合烟",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 7800,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "deabe123-33d6-47cb-89f0-64d476e0800c",
    image: "images/products/jingxuantaozhuang.jpg",
    name: "精选套装",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 19600,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
    {
    id: "54060522-34be-4a46-838d-390d811e8083",
    image: "images/products/tiyantaozhuang.jpg",
    name: "体验套装",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 7000,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "2857eac0-fa42-4f35-96d6-e4726a164f5f",
    image: "images/products/kongyanguan.jpg",
    name: "空烟管",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1000,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "54060522-34be-4a46-838d-390d811e8083",
    image: "images/products/shoudonglayanqi.jpg",
    name: "手动拉烟器",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1000,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "54060522-34be-4a46-838d-390d811e8083",
    image: "images/products/shoudongshuangdaoguijuanyanji.jpg",
    name: "手动双导轨卷烟器",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 4800,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "be10f7a8-fbc5-467e-90b1-69b48e341710",
    image: "images/products/xiaoxiongmao.jpg",
    name: "小熊猫",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 11800,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
].map((productDetails) => {
  if (productDetails.type === 'clothing') {
    return new Clothing(productDetails);
  }
  return new Product(productDetails);
});
