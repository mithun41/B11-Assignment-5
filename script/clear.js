const clearH = document.getElementById("clear");
const createHistory = document.getElementById("history");
clearH.addEventListener("click", function () {
  createHistory.innerHTML = "";
});

// Go to Blog Page
const goback = document.getElementById("blog");
goback.addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// Dynamic Date set

const currentDate1 = document.getElementById("date").innerText;
const now = new Date();
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayOfWeek = daysOfWeek[now.getDay()];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = months[now.getMonth()];
const dayOfMonth = now.getDate();
const year = now.getFullYear();
const dateString = `${dayOfWeek}, ${month} ${dayOfMonth} ${year}`;
document.getElementById("date").innerText = dateString;
