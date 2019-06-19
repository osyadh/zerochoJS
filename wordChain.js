const body = document.body;
const word = document.createElement("div");
word.textContent = "zerocho";
body.append(word);
const form = document.createElement("form");
body.append(form);
const input = document.createElement("input");
form.append(input);
const button = document.createElement("button");
button.textContent = "input";
form.append(button);
const result = document.createElement("div");
body.append(result);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (word.textContent[word.textContent.length - 1] === input.value[0]) {
    result.textContent = "OK!";
    word.textContent = input.value;
    input.value = "";
    input.focus();
  } else {
    result.textContent = "NO!";
    input.value = "";
    input.focus();
  }
});

// for (let word = "제로초"; true; ) {
//   const answer = prompt(word);
//   if (word[word.length - 1] === answer[0]) {
//     alert("딩동댕!");
//     word = answer;
//   } else {
//     alert("땡!");
//   }
// }
