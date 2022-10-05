let count = 0;

const plus = document.querySelector(".add");
const minus = document.querySelector(".subtract");
const currentCount = document.querySelector(".current-count");

plus.addEventListener("click", () => {
  count++;
  console.log(count);
  currentCount.textContent = count;
});

minus.addEventListener("click", () => {
  count--;
  console.log(count);
  currentCount.textContent = count;
});
