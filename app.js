const clickHandler = (event) => {
  console.log(event);
  if (event.target.classList[1] === "digit") console.log("number");
};

document.querySelector("#calculator").addEventListener("click", clickHandler);
