const input = document.querySelector("#temp-input");
const fromUnit = document.querySelector("#from-select");
const toUnit = document.querySelector("#to-select");
const btn = document.querySelector("#con-btn");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let temp = parseFloat(input.value);
  let from = fromUnit.value;
  let to = toUnit.value;

  let celsius;
  if(from === "celsius"){
    celsius = temp;
  } else if(from === "fahrenheit"){
    celsius = (temp - 32) * 5/9;
  } else if (from === "kelvin"){
    celsius = temp - 273.15;
  }


  let answer;
  if(to === "celsius"){
    answer = celsius;
  } else if(to === "fahrenheit"){
    answer = (celsius * 9/5) + 32;
  } else if(to === "kelvin"){
    answer = celsius + 273.15;
  }


  result.innerText = `${temp} ${from} = ${answer.toFixed(2)} ${to}`;
});

