// Button 1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  const taskNumber = getValueInNumber("taskNumber");
  const headerNumber = getValueInNumber("headerNumber");
  alert("Thanks");
  const result = taskNumber - 1;
  const headerValue = headerNumber + 1;
  document.getElementById("taskNumber").innerText = result;
  if (result === 0) {
    alert("completed");
  }
  document.getElementById("headerNumber").innerText = headerValue;
  const txtTitle = document.getElementById("title").innerText;
  const div = document.createElement("div");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;
  const createHistory = document.getElementById("history");
  div.classList.add("new");
  div.innerHTML = `
  <p class="my-6">You have completed the task ${txtTitle} at ${timeString}</p>
  `;
  createHistory.appendChild(div);
  btn1.disabled = true;
});
// Button 2
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  const taskNumber = getValueInNumber("taskNumber");
  const headerNumber = getValueInNumber("headerNumber");
  alert("Thanks");
  const result = taskNumber - 1;
  const headerValue = headerNumber + 1;
  document.getElementById("taskNumber").innerText = result;
  if (result === 0) {
    alert("completed");
  }
  document.getElementById("headerNumber").innerText = headerValue;
  const txtTitle = document.getElementById("title2").innerText;
  const div = document.createElement("div");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;
  const createHistory = document.getElementById("history");
  div.innerHTML = `
  <p class="my-6">You have completed the task ${txtTitle} at ${timeString}</p>
  `;
  createHistory.appendChild(div);
  btn2.disabled = true;
});
// Button 3
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
  const taskNumber = getValueInNumber("taskNumber");
  const headerNumber = getValueInNumber("headerNumber");
  alert("Thanks");
  const result = taskNumber - 1;
  const headerValue = headerNumber + 1;
  document.getElementById("taskNumber").innerText = result;
  if (result === 0) {
    alert("completed");
  }
  document.getElementById("headerNumber").innerText = headerValue;
  const txtTitle = document.getElementById("title3").innerText;
  const div = document.createElement("div");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;
  const createHistory = document.getElementById("history");
  div.innerHTML = `
  <p class="my-6">You have completed the task ${txtTitle} at ${timeString}</p>
  `;
  createHistory.appendChild(div);
  btn3.disabled = true;
});
// Button 4
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
  const taskNumber = getValueInNumber("taskNumber");
  const headerNumber = getValueInNumber("headerNumber");
  alert("Thanks");
  const result = taskNumber - 1;
  const headerValue = headerNumber + 1;
  document.getElementById("taskNumber").innerText = result;
  if (result === 0) {
    alert("completed");
  }
  document.getElementById("headerNumber").innerText = headerValue;
  const txtTitle = document.getElementById("title4").innerText;
  const div = document.createElement("div");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;
  const createHistory = document.getElementById("history");
  div.innerHTML = `
  <p class="my-6">You have completed the task ${txtTitle} at ${timeString}</p>
  `;
  createHistory.appendChild(div);
  btn4.disabled = true;
});
// Button 5
const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function () {
  const taskNumber = getValueInNumber("taskNumber");
  const headerNumber = getValueInNumber("headerNumber");
  alert("Thanks");
  const result = taskNumber - 1;
  const headerValue = headerNumber + 1;
  document.getElementById("taskNumber").innerText = result;
  if (result === 0) {
    alert("completed");
  }
  document.getElementById("headerNumber").innerText = headerValue;
  const txtTitle = document.getElementById("title5").innerText;
  const div = document.createElement("div");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;
  const createHistory = document.getElementById("history");
  div.innerHTML = `
  <p class="my-6">You have completed the task ${txtTitle} at ${timeString}</p>
  `;
  createHistory.appendChild(div);
  btn5.disabled = true;
});
// Button 6
const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function () {
  const taskNumber = getValueInNumber("taskNumber");
  const headerNumber = getValueInNumber("headerNumber");
  alert("Thanks");
  const result = taskNumber - 1;
  const headerValue = headerNumber + 1;
  document.getElementById("taskNumber").innerText = result;
  if (result === 0) {
    alert("completed");
  }
  document.getElementById("headerNumber").innerText = headerValue;
  const txtTitle = document.getElementById("title6").innerText;
  const div = document.createElement("div");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;
  const createHistory = document.getElementById("history");
  div.innerHTML = `
  <p class="my-6">You have completed the task ${txtTitle} at ${timeString}</p>
  `;
  createHistory.appendChild(div);

  btn6.disabled = true;
});
