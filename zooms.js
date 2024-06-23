document.querySelectorAll(".zoomable").forEach((item) => {
  item.addEventListener("click", (event) => {
    const overlay = document.getElementById("overlay");
    overlay.innerHTML = `<img src="${event.target.src}" />`;
    overlay.style.display = "flex";
  });
});

document.getElementById("overlay").addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) return;
  event.currentTarget.style.display = "none";
});
