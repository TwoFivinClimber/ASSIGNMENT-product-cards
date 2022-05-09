import { products } from "./data.js";

const cardsOnDom = (divId, renderString) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = renderString;
};

const cardRender = (arr) => {
  let cardString = "";
  for (const productObj of arr) {
    const soldOut = productObj.remainingStock === 0;
    const featProd = productObj.featured === true;
    cardString += `<div class="card" id="product-card">
    <div id="featured" class="featured">${
      featProd ? "Featured Product" : ""
    }</div>
<div class="product-image ${soldOut ? "sold-out" : ""}">
<img src="${productObj.image}" class="card-img-top featured-image" alt="...">
<img src="images/soldOut.png" class="sold-out-image ${
      soldOut ? "display" : ""
    }" alt="sold out">
</div>
<div class="card-body">
  <h3 class="card-title">${productObj.name}</h3>
  <p class="card-text">${productObj.description}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${productObj.availability}</li>
  <li class="list-group-item">${productObj.size}</li>
  <li class="list-group-item">${productObj.price}</li>
  <li class="list-group-item">${productObj.remainingStock} In Stock</li>
</ul>
<div class="card-body">
  <button id="buyBtn--${productObj.id}" ${
      soldOut ? "disabled" : ""
    } class="card-link">Buy Now</button>
  
</div>
</div>`;
  }
  cardsOnDom("#productCards", cardString);
};

const buyNow = () => {
  document.querySelector("#productCards").addEventListener("click", (e) => {
    if (e.target.id) {
      const [method, id] = e.target.id.split("--");
      const index = products.findIndex((find) => find.id === Number(id));
      let value = products[index].remainingStock;
      if (e.target.id.includes("buyBtn")) {
        products[index].remainingStock = value - 1;
      }
      cardRender(products);
    }
  });
};

const onStart = () => {
  cardRender(products);
  // featured(products);
  buyNow();
};

onStart();
