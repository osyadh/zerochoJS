const body = document.body;

let candidate = [];
let arrangement = [];
let leftTimeNum = 10;

function selectNumber() {
  candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arrangement = [];
  for (let i = 0; i < 4; i += 1) {
    const pickUp = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arrangement.push(pickUp);
  }
}

selectNumber();
console.log(arrangement);

const form = document.createElement("form");
body.append(form);
const input = document.createElement("input");
form.append(input);
input.maxLength = 4;
const button = document.createElement("button");
button.textContent = "input";
form.append(button);

const result = document.createElement("h1");
body.append(result);
const leftTime = document.createElement("h3");
body.append(leftTime);
const answerList = document.createElement("h3");
body.append(answerList);

let wrong = 0;

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const answer = input.value;
  console.log(answer);
  if (answer === arrangement.join("")) {
    result.textContent = "Homerun!!";
    input.value = "";
    input.focus();
    selectNumber();
    wrong = 0;
    leftTimeNum = 10;
    answerList.textContent = "";
    console.log(arrangement);
  } else {
    const answerArrangement = answer.split("");
    let strike = 0;
    let ball = 0;
    wrong += 1;
    leftTimeNum -= 1;
    leftTime.textContent = `leftTime is ${leftTimeNum}`;
    if (wrong > 9) {
      result.textContent = `FAIL! Answer is ${arrangement.join("")}`;
      input.value = "";
      input.focus();
      selectNumber();
      wrong = 0;
      leftTimeNum = 10;
      answerList.textContent = "";
      console.log(arrangement);
    } else {
      for (let i = 0; i < 4; i += 1) {
        if (Number(answerArrangement[i]) === arrangement[i]) {
          strike += 1;
        } else if (arrangement.indexOf(Number(answerArrangement[i])) > -1) {
          ball += 1;
        }
      }
      result.textContent = `${strike} Strike ${ball} ball`;
      answerList.append(`${answer} / ${strike} Strike ${ball} ball // `);
      input.value = "";
      input.focus();
    }
  }
});
