const tabsLi = document.querySelectorAll(".section");
let tabsArray = Array.from(tabsLi);
const tabsTitle = document.querySelectorAll(".title");
let titleArray = Array.from(tabsTitle);
const tabsArrow = document.querySelectorAll(".arrow");
let arrowArray = Array.from(tabsArrow);
const tabsDesc = document.querySelectorAll(".desc");
let descArray = Array.from(tabsDesc);

titleArray.forEach((Element) => {
  Element.addEventListener("click", function (e) {
    titleArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    arrowArray.forEach((arrow) => {
      arrow.classList.remove("reverse");
    });
    descArray.forEach((desc) => {
      desc.classList.remove("show");
    });
    e.currentTarget.classList.toggle("active");
    let dataFaq = e.currentTarget.dataset.faq;
    document.getElementById(dataFaq).classList.toggle("show");
    document.querySelector("." + dataFaq).classList.toggle("reverse");
  });
});
