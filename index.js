const btnElm = document.querySelector(".btn");

btnElm.addEventListener("mouseover", (event)=> {
  const x = event.pageX - btnElm.offsetLeft;
  const y = event.pageY - btnElm.offsetTop;

  btnElm.style.setProperty("--xPos", x + "px");
  btnElm.style.setProperty("--yPos", y + "px");
});