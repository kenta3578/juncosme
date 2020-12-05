export function popContents() {
  const $pop = $(".js-Pop")
  const popWindow = document.querySelector(".eventPop")
  let showNum
  $pop.on('click', function (ev) {
    ev.preventDefault();
    showNum = $(this).data("index");
    popWindow.style = "display:block";
    document.querySelector(`.js-PopContent[data-index="${showNum}"]`).classList.toggle("popShow")
    return showNum;
  })
  let closes = document.querySelectorAll(".js-eventPop__Close")
  for (let clsButton of closes) {
    clsButton.addEventListener("click", (ev, ) => {
      if (clsButton.classList.contains("eventPop__CloseOuter")) {
        ev.preventDefault();
      }
      popWindow.style = "display:none";
      document.querySelector(`.js-PopContent[data-index="${showNum}"]`).classList.toggle("popShow")
    })
  }

}