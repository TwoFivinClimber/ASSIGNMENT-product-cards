const products = [
  {
    id: 1,
    name: "Dynamic Rope",
    image: (src = "Rope.jpeg"),
    description:
      "This rope is great sport climbing. It features a 9.8mm diameter and is good for wet and dry conditions. It's been noted that it has a smoothe handle, and slightly stiff catch.",
    availability: "Available",
    size: "70 Meter",
    weight: "9.5 Lbs",
    price: "$200",
    remainingStock: 0,
  },
  {
    id: 2,
    name: "Climbing Shoes",
    image: "climbing-shoe.jpeg",
    description:
      "Good stiff climbing shoes for jamming into cracks and hanging on small edges.  Comfortable out of the box and will last you a long time",
    availability: "Available",
    size: "Mens 5-13",
    weight: "1.2 lbs",
    price: "$98",
    remainingStock: 12,
  },
  {
    id: 3,
    name: "Chalk",
    image: (src = "chalk.webp"),
    description:
      "halk for you hands, chalk for you knees, chalk for you to let everyone know that you're a climber.  It keep your fingers dry.  That should be enough.",
    availability: "Available",
    size: "4in x 4in x 1.5in",
    weight: "4oz",
    price: "$3.75",
    remainingStock: 15,
  },
  {
    id: 4,
    name: "Rip Stop Pants",
    image: (src = "pants.jpeg"),
    description:
      "Climbing pants are important when your rubbing all over the rocks.  Keep your knees from bleeding in these rip-stop pants and never give up.",
    availability: "Available",
    size: "XS, S, M, L, XL",
    weight: "12.8oz",
    price: "$98",
    remainingStock: 12,
  },
  {
    id: 5,
    name: "Climbing Harness",
    image: (src = "harness.jpeg"),
    description:
      "Stay off the ground and out of danger in the air when you fall off your project.  This harness is comftorable for all day sitting and looks cool too.",
    availability: "Available",
    size: "XS, S, M, L, XL",
    weight: "8.2oz",
    price: "$68",
    remainingStock: 12,
  },
  {
    id: 6,
    name: "Camming Device",
    image: (src = "cams.jpeg"),
    description:
      "For the trad dad in all of us. Take the fear of falling out of your mind knowing you have this device in below you.",
    availability: "Available",
    size: ".1 to 6",
    weight: "6oz - 32oz",
    price: "$78 - $120",
    remainingStock: 1,
  },
];

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
