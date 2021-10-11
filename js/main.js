const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector(".price-total");
let cost = 800; //это стоимость билета за одно место
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
  /*  console.log (event.target) проверка работы клика*/
  /* event.target.classList.toggle("active"); активное по клику на место*/
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle("active");
    /* totalPrice = 800; тоже проверка в процессе*/
    let totalSeats = schemeSvg.querySelectorAll(".active").length
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
    /* console.log(schemeSvg.querySelectorAll(".active").length); это проверка */
  }
});
 

const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
menuButton.addEventListener('click', () => {
  // console.log('кликнули');
  //menu.style.display = 'block';
  menu.classList.toggle("is-open");
 });