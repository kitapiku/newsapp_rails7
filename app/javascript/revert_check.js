window.addEventListener('turbo:load', function () { 
  const kidoku = document.querySelectorAll(".article-check-button");
  kidoku.forEach(function (button) {
    button.addEventListener("click", () => {
      if (window.confirm('記事を未読状態に戻しますか？')) {
        const articleId = button.getAttribute("data");
        const XHR = new XMLHttpRequest();
        XHR.open("GET", `/checks/revert/${articleId}`, true);
        XHR.send();
        XHR.onload = () => {
          button.remove()
        }
      } else {
        ;
      };
    });
  });
});