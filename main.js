import { products } from "./data.js";

const prodElem = document.querySelector("#productCards");

products.forEach((productObj) => {
  const soldOut = productObj.remainingStock === 0;
  prodElem.innerHTML += `<div class="card">
<div class="product-image ${soldOut ? "sold-out" : ""}">
<img src="${productObj.image}" class="card-img-top featured-image" alt="...">
<img src="soldOut.png" class="sold-out-image" alt="sold out">
</div>
<div class="card-body">
  <h3 class="card-title">${productObj.name}</h3>
  <p class="card-text">${productObj.description}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${productObj.availability}</li>
  <li class="list-group-item">${productObj.size}</li>
  <li class="list-group-item">${productObj.price}</li>
</ul>
<div class="card-body">
  <button ${soldOut ? "disabled" : ""} class="card-link">Buy Now</button>
  
</div>
</div>`;
});
