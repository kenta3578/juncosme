// スムーススクロール
export function smoothScroll() {
  $('.js-toTop').click(function () {

    $("html, body").animate({ scrollTop: 0 }, 500, "");
    return false;
  });
}