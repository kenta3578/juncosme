import { toggleMenu } from "./_modules/_toggleMenu.js";
import { slideMenu } from "./_modules/_slideMenu.js";
import { showElementAnimation } from "./_modules/_showElementAnimation.js";
import { popContents } from "./_modules/_popContents.js";
import { smoothScroll } from "./_modules/_smoothScroll.js";
import { slideWindow } from "./_modules/_slideWindow.js";

const windowWidth = $(window).width();
document.addEventListener(
  "DOMContentLoaded",
  () => {
    popContents();
    toggleMenu(windowWidth);
    slideMenu(windowWidth);
    smoothScroll();
    slideWindow();
    //let thisUrl = location.href
    // if (thisUrl.indexOf("#") == -1) {
    //   $(".js-animation").removeClass(".js-animation")
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
      window.addEventListener("scroll", showElementAnimation);
    }
    if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
      showElementAnimation();
      window.addEventListener("scroll", showElementAnimation);
    }

    //}

    // トグルオープナーescToggle
  },
  false
);
