const userInput = document.querySelector('input[type="checkbox"]');
const cardEL = document.querySelectorAll(".card");
const bgDiv = document.querySelector(".bg-div");
const overViewCard = document.querySelectorAll(".overview-card");
const topDiv = document.querySelector(".top-div");
const userNameEl = document.querySelectorAll(".user-name");
const OverviewEl = document.querySelector(".Overview");
const attribution = document.querySelector('.attribution');
const body = document.body;

userInput.addEventListener("click", () => {
  bgDiv.classList.toggle("dark");
  topDiv.classList.toggle("dark");
  body.classList.toggle("dark");
  cardEL.forEach((ele) => {
    ele.classList.toggle("dark");
  });
  userNameEl.forEach((ele) => {
    ele.classList.toggle("dark");
  });
  overViewCard.forEach((ele) => {
    ele.classList.toggle("dark");
  });
  OverviewEl.classList.toggle("dark");

  attribution.classList.toggle('dark');
});
