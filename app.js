var evalStr = "";
const clickHandler = (event) => {
  var display = document.querySelector("#display");
  console.log(event.target.innerHTML);
  if (event.target.innerHTML === "=") {
    try {
      display.value = eval(evalStr);
      evalStr = "";
    } catch (e) {}
  } else {
    evalStr = evalStr + event.target.innerHTML;
    display.value = evalStr;
  }
  console.log(evalStr);
};

document.querySelector("#calculator").addEventListener("click", clickHandler);
