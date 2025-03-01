const clearH = document.getElementById("clear");
const createHistory = document.getElementById("history");
clearH.addEventListener("click", function () {
  createHistory.innerHTML = "";
});
