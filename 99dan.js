let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);
let cross = num1 * num2;

const body = document.body;
const problem = document.createElement("div");
problem.textContent = `${num1} cross ${num2} = ??`;
body.append(problem);
const form = document.createElement("form");
document.body.append(form);
const input = document.createElement("input");
form.append(input);
const button = document.createElement("button");
button.textContent = "input";
form.append(button);
const result = document.createElement("div");
document.body.append(result);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (cross === Number(input.value)) {
    result.textContent = "OK!";
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    cross = num1 * num2;
    problem.textContent = `${num1} cross ${num2} = ??`;
    input.value = "";
    input.focus();
  } else {
    result.textContent = "NO!";
    input.value = "";
    input.focus();
  }
});

// while (true) {
//   let num1 = Math.floor(Math.random() * 9) + 1;
//   let num2 = Math.floor(Math.random() * 9) + 1;
//   let cross = num1 * num2;
//   let cond = true;
//   while (cond) {
//     let answer = prompt(`${num1} 곱하기 ${num2} 는??`);
//     if (cross === Number(answer)) {
//       alert("딩동댕!");
//       cond = false;
//     } else {
//       alert("땡!");
//     }
//   }
// }
