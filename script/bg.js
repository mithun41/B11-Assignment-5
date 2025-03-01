const bg = document.getElementById("bg");
bg.addEventListener("click", function () {
  const blue = Math.random() * 255;
  const green = Math.random() * 255;
  const red = Math.random() * 255;

  const bgColor = `rgb(${blue}, ${green}, ${red})`;
  document.body.style.background = bgColor;
});
