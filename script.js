let inputs = document.querySelectorAll("input");
let btn = document.querySelector('button')

inputs.forEach((element, indexOne) => {
  element.addEventListener('keyup', (e) => {
    let CurrentElements = element,
      nextInput = element.nextElementSibling,
      prevInput = element.previousElementSibling;

    if (CurrentElements.value.length > 1) {
      CurrentElements.value = "";
      return;
    }
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      CurrentElements.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((element, indexTwo) => {
        if (indexOne <= indexTwo && prevInput) {
          element.setAttribute("disabled", true);
          element.value = "";
          prevInput.focus();
        }
      });
    }

    if(!inputs[3].disabled && inputs[3].value !== ""){
btn.classList.add('validate')
return
    }
    btn.classList.remove('validate')

  });
});

window.addEventListener("load", () => {
  inputs[0].focus();
});
