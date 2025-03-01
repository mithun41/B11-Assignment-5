const clearH = document.getElementById("clear");
const createHistory = document.getElementById("history");
clearH.addEventListener("click", function () {
  createHistory.innerHTML = "";
});

const goback = document.getElementById("blog");
goback.addEventListener("click", function () {
  window.location.href = "./blog.html";
});
