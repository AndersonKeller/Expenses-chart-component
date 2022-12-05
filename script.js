import { getData } from "./src/scripts/requests.js";
const data = await getData();
console.log(data);

function getTotal(list, pre) {
  const total = list.reduce((acc, value) => {
    return acc + value.amount;
  }, pre);

  return total * 4;
}

function renderTotal() {
  const header = document.querySelector("header");
  const h2Value = document.createElement("h2");
  h2Value.innerText = `$${getTotal(data, 10)}`;

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
function renderResume() {
  const resumeDiv = document.querySelector(".resume");
  const p = document.createElement("p");
  p.innerText = "Total this month";
  const h2 = document.createElement("h2");
  h2.innerText = `$${getTotal(data, 0) / 2}`;
  console.log(h2);
  const percentage = calculateDiference();
  console.log(percentage);

  const pDif = document.createElement("p");
  pDif.innerText = "from last month";
  const h3 = document.createElement("h3");
  h3.innerText = `+${percentage}%`;
  const divLeft = document.createElement("div");
  divLeft.append(p, h2);
  const divRigth = document.createElement("div");
  divRigth.classList.add("div-rigth");
  divRigth.append(h3, pDif);

  resumeDiv.append(divLeft, divRigth);
}
renderResume();
function calculateDiference() {
  const total = getTotal(data, 10);
  const actual = getTotal(data, 0) / 2;
  const res = total - actual * 2;
  const dif = (res * 100) / total;

  return dif.toFixed(1);
}
calculateDiference();
