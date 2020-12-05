export function toggleMenu(windowWidth) {
  const headerTitle = document.querySelector(".js-Header__Title");
  const header = document.querySelector(".js-Header");
  const toggleWindow = document.querySelector(".js-toggleMenu");
  const toggleButton = document.querySelector(".menuButton");
  const $toggleClsLink = $(".js-ToggleCls");
  if (header.classList.contains("js-Header-Sub")) {
    headerColorOnContents();
  } else {
    headerScrollChange();
  }
  // トグルボタンによる制御
  toggleButton.addEventListener("click", function(ev) {
    ev.preventDefault();
    toggleWindow.classList.toggle("toggleShowAnime");
    this.classList.toggle("active");
    headerButtonChange();
  });
  $toggleClsLink.click(function() {
    toggleWindow.classList.toggle("toggleShowAnime");
    headerColorOnContents();
    toggleButton.classList.toggle("active");
    // headerButtonChange()
  });
  // スクロール量による制御
  function headerButtonChange() {
    let windowYOffset = jQuery(document).scrollTop();

    if (!headerTitle.classList.contains("header__Title-OnToggle")) {
      headerColorOnToggle();
      console.log("NO");
      toggleColor();
    } else if (
      windowYOffset < 800 &&
      !header.classList.contains("js-Header-Sub")
    ) {
      headerColorOnTop();
    } else {
      headerColorOnContents();
    }
  }
  function headerScrollChange() {
    jQuery(window).scroll(function() {
      // スクロール毎にイベントが発火します。
      let windowYOffset = jQuery(document).scrollTop();
      if (
        windowWidth < 769 &&
        windowYOffset > 800 &&
        !toggleWindow.classList.contains("toggleShowAnime")
      ) {
        headerColorOnContents();
      } else if (
        windowWidth > 769 &&
        windowYOffset > 200 &&
        !toggleWindow.classList.contains("toggleShowAnime")
      ) {
        headerColorOnContents();
      } else {
        hideHeader();
      }
    });
  }
  // 色変更機能群
  function headerColorOnToggle() {
    headerTitle.classList.add("header__Title-OnToggle");
    header.classList.add("header-OnToggle");
  }
  function headerColorOnTop() {
    headerTitle.classList.remove("header__Title-OnToggle");
    header.classList.remove("header-OnToggle");
  }
  function headerColorOnContents() {
    headerTitle.classList.remove("header__Title-OnToggle");
    header.classList.remove("header-OnToggle");
    header.classList.add("header-OnContens");
    headerTitle.classList.add("header__Title-OnContens");
    toggleButton.classList.add("menuButton-OnContents");
  }
  function toggleColor() {
    toggleButton.classList.remove("menuButton-OnContents");
  }
  function hideHeader() {
    header.classList.remove("header-OnContens");
    headerTitle.classList.remove("header__Title-OnContens");
    toggleButton.classList.remove("menuButton-OnContents");
  }
}
