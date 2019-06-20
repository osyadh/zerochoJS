const body = document.body;
const table = document.createElement("table");
let lines = [];
let rooms = [];
let turn = "X";
const result = document.createElement("div");

function handleClick(event) {
  const lineNum = lines.indexOf(event.target.parentNode);
  // console.log(lineNum);
  const roomNum = rooms[lineNum].indexOf(event.target);
  // console.log(roomNum);
  if (rooms[lineNum][roomNum].textContent !== "") {
    console.log("not empty");
  } else {
    console.log("empty");
    rooms[lineNum][roomNum].textContent = turn;

    let fullFill = false;

    if (
      rooms[lineNum][0].textContent === turn &&
      rooms[lineNum][1].textContent === turn &&
      rooms[lineNum][2].textContent === turn
    ) {
      fullFill = true;
    }

    if (
      rooms[0][roomNum].textContent === turn &&
      rooms[1][roomNum].textContent === turn &&
      rooms[2][roomNum].textContent === turn
    ) {
      fullFill = true;
    }

    if (lineNum - roomNum === 0) {
      if (
        rooms[0][0].textContent === turn &&
        rooms[1][1].textContent === turn &&
        rooms[2][2].textContent === turn
      ) {
        fullFill = true;
      }
    }

    if (Math.abs(lineNum - roomNum) === 2) {
      if (
        rooms[0][2].textContent === turn &&
        rooms[1][1].textContent === turn &&
        rooms[2][0].textContent === turn
      ) {
        fullFill = true;
      }
    }
    if (fullFill) {
      result.textContent = `${turn} wins the game`;
      turn = "X";
      rooms.forEach(function(lines) {
        lines.forEach(function(room) {
          room.textContent = "";
        });
      });
    } else {
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }
  }
}
for (i = 1; i <= 3; i += 1) {
  const line = document.createElement("tr");
  lines.push(line);
  rooms.push([]);
  for (j = 1; j <= 3; j += 1) {
    const room = document.createElement("td");
    room.addEventListener("click", handleClick);
    rooms[i - 1].push(room);
    line.appendChild(room);
  }
  table.appendChild(line);
}
body.appendChild(table);
body.appendChild(result);
console.log(lines, rooms);

// const firstLine = document.createElement("tr");
// const firstLine_firstRoom = document.createElement("td");
// const firstLine_secondRoom = document.createElement("td");
// const firstLine_thirdRoom = document.createElement("td");
// firstLine.append(firstLine_firstRoom);
// firstLine.append(firstLine_secondRoom);
// firstLine.append(firstLine_thirdRoom);

// const secondLine = document.createElement("tr");
// const secondLine_firstRoom = document.createElement("td");
// const secondLine_secondRoom = document.createElement("td");
// const secondLine_thirdRoom = document.createElement("td");
// secondLine.append(secondLine_firstRoom);
// secondLine.append(secondLine_secondRoom);
// secondLine.append(secondLine_thirdRoom);

// const thirdLine = document.createElement("tr");
// const thirdLine_firstRoom = document.createElement("td");
// const thirdLine_secondRoom = document.createElement("td");
// const thirdLine_thirdRoom = document.createElement("td");
// thirdLine.append(thirdLine_firstRoom);
// thirdLine.append(thirdLine_secondRoom);
// thirdLine.append(thirdLine_thirdRoom);
