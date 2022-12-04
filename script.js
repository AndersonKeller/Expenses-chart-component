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
function renderDay(list = []) {
  const main = document.querySelector(".div-content");
  list.forEach((element) => {
    console.log(element);
    const divMain = document.createElement("div");
    divMain.classList.add("div-main");
    divMain.id = element.day;
    const divAmount = document.createElement("div");
    divAmount.classList.add("div-value");
    divAmount.id = element.amount;
    divAmount.style.height = `${element.amount * 4}px`;
    const spanDay = document.createElement("span");
    spanDay.innerText = element.day;

    const spanAmountOver = document.createElement("span");
    spanAmountOver.classList.add("span-over");
    spanAmountOver.id = element.amount;
    spanAmountOver.innerText = `$${element.amount}`;

    divMain.append(spanAmountOver, divAmount, spanDay);
    main.appendChild(divMain);
  });
}
renderDay(data);

function majorValue() {
  const divs = Array.from(document.querySelectorAll(".div-value"));

  const major = divs.find((div) => {
    return div.id > 50;
  });
  major.style.backgroundColor = "#76b5bc";
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      const divOver = document.getElementById(`${div.id}`);
      divOver.classList.toggle("span-over-show");
      console.log(div.id);
    });
  });
  divs.forEach((div) => {
    div.addEventListener("mouseout", () => {
      const divOver = document.getElementById(`${div.id}`);
      divOver.classList.toggle("span-over-show");
      console.log(div.id);
    });
  });
}

majorValue();
