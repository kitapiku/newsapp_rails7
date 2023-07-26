function Menu() {
  const menu = document.getElementById("menu1");
  const pullDownMenu = document.getElementById("menu1-pull-down");
  menu.addEventListener('mouseover', () => {
    menu.setAttribute("style", "background-color: lightblue;");
  });
  menu.addEventListener('mouseout', () => {
    menu.removeAttribute("style");
  });
  menu.addEventListener('click', () => {
    if (pullDownMenu.getAttribute("style") != "display: block;") {
      pullDownMenu.setAttribute("style", "display: block;");
    } else {
      pullDownMenu.removeAttribute("style");
    };
  })
};

window.addEventListener('load', Menu);