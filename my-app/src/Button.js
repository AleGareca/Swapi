document.getElementById("add").onclick = () => {
  let counter = document.getElementById("count");
  counter.innerHTML = Number(counter.innerHTML) + 1;
};
document.getElementById("sub").onclick = () => {
  let counter = document.getElementById("count");
  counter.innerHTML = Number(counter.innerHTML) - 1;
};