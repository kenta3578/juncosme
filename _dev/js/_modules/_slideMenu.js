export function slideMenu(windowWidth) {
  const $slideTriger = $(".js-SliedTriger");

  $slideTriger.on("click", function(ev) {
    ev.preventDefault();
    const NowShowMenu = $(".toggleShowAnime-isPc");
    const $thisSlideMenus = $(this)
      .parent()
      .next();
    if (windowWidth < 800) {
      $thisSlideMenus.toggle("swing");
    } else if ($thisSlideMenus.hasClass("toggleShowAnime-isPc")) {
      $thisSlideMenus.removeClass("toggleShowAnime-isPc");
      $thisSlideMenus.addClass("toggleHideAnime-isPc");
    } else {
      NowShowMenu.removeClass("toggleShowAnime-isPc");
      $thisSlideMenus.addClass("toggleShowAnime-isPc");
      $thisSlideMenus.removeClass("toggleHideAnime-isPc");
    }
    $(this).toggleClass("toggleMenu_link-Nav-Toggle");
  });

  const clsBtn = $(".toggleClose-isPc");
  clsBtn.on("click", function(ev) {
    ev.preventDefault();
    console.log("OK");
    const nowShowMenu = $(".toggleShowAnime-isPc");
    nowShowMenu
      .removeClass("toggleShowAnime-isPc")
      .addClass("toggleHideAnime-isPc");
  });
}
