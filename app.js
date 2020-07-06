var ifDebug = false;

window.onload = function () {
  if (window.location.protocol !== "https:") return window.location.protocol = "https";
  var websiteTitle = document.getElementById("websiteTitle");
  var websiteIntro = document.getElementById("websiteIntro");
  var headerTitle = document.getElementById("headerTitle");
  var headerIntro = document.getElementById("headerIntro");
  var headerBtn = document.getElementById("headerBtn");
  var footerTitle = document.getElementById("footerTitle");
  var footerIntro = document.getElementById("footerIntro");
  var footerBtn = document.getElementById("footerBtn");
  var mainItems = document.querySelector(".main.items");

  var baseURL =
    "https://script.google.com/macros/s/AKfycbzeyPtkYs2K-P8cTuHROtLqyUNeLE8on4NOi7xooMurG5J8f3I/exec";

  fetch(ifDebug || baseURL)
    .then((res) => res.json())
    .then((json) => {
      const { data } = json;
      const mainBlocks = data.slice(2, 6);
      mainItems.innerHTML = mainBlocks.map(articleItem).join("");

      websiteTitle.innerText = data[0].title;
      websiteIntro.innerText = data[0].intro;
      headerTitle.innerText = data[1].title;
      headerIntro.innerText = data[1].intro;
      headerBtn.innerText = data[1].btn;
      headerBtn.href = data[1].link;
      footerTitle.innerText = data[6].title;
      footerIntro.innerText = data[6].intro;
      footerBtn.innerText = data[6].btn;
      footerBtn.href = data[6].link;
    }).catch(err => alert('網路不穩定'));
};

const articleItem = (item, id) => {
  const { title, intro, btn, link } = item;
  return `<article class="item">
    <header>
        <a href="#"><img width="100%" src="images/pic0${id + 1}.jpg" alt="" /></a>
        <h3>${title}</h3>
    </header>
    <p>${intro}</p>
    <ul class="actions">
        <li><a href="${link}" class="button">${btn}</a></li>
    </ul>
</article>`;
};
