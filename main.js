
const avail = document.getElementsByClassName("availability");
const soldOut = document.getElementById("sold-out");

for (let i = 0; i < avail.length; i++){
if (avail[i].innerText === "Available") {
  soldOut.style.display = " ";
}else{
  soldOut.style.display = "none";
}
};


console.log(avail);
