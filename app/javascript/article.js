window.addEventListener('turbo:load', function () {
  const articles = document.querySelectorAll(".article");
  articles.forEach(function (article) {
    article.addEventListener("mouseover", () => {
      article.setAttribute("style", "box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);");
    })
    article.addEventListener("mouseout", () => {
      article.removeAttribute("style", "box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);");
    });
  });
});