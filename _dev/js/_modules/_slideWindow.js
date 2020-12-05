export function slideWindow() {
  const slideLength = window.innerHeight;
  const $slideTrigger = $(".js-slideButton");
  $slideTrigger.on("click", () => {
    $("html, body").animate({ scrollTop: slideLength }, 500, "");
  });
}
