const text = document.getElementById("backColorInfo");
const btn = document.getElementById("random");
const input = document.getElementById("textC");
const apply = document.getElementById("apply");

const colors = [
  "red",
  "dodgerblue",
  "chartreuse",
  "blue",
  "hotpink",
  "tomato",
  "purple",
  "aqua",
  "yellow",
  "turquoise",
];

function blackVerify() {
  if (document.body.style.backgroundColor == "black") {
    btn.className = "black";
    apply.className = "black";
    text.style.color = "white";
  } else {
    btn.className = "btn";
    apply.className = "btn";
    text.style.color = document.body.style.backgroundColor;
  }
}

function randomColor() {
  return colors[Math.floor(Math.random() * 10)];
}

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  text.innerHTML = "backgroundcolor: " + document.body.style.backgroundColor;
  blackVerify();
});

apply.addEventListener("click", () => {
  if (input.value.length === 0) {
    alert("Please, insert a valid color");
  } else {
    document.body.style.backgroundColor = input.value;
    text.innerHTML = "backgroundcolor: " + document.body.style.backgroundColor;
    input.value = "";

    blackVerify();
  }
});
