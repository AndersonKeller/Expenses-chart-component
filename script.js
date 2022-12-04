import { getData } from "./src/scripts/requests.js";
const data = await getData();
console.log(data);

function getTotal(list) {
  const total = list.reduce((acc, value) => {
    return acc + value.amount;
  }, 0);

  return total;
}

function renderTotal() {
  const header = document.querySelector("header");
  const h2Value = document.createElement("h2");
  h2Value.innerText = `$${getTotal(data)}`;

  header.appendChild(h2Value);
}
renderTotal();
