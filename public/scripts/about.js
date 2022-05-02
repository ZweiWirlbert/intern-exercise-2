const buttonCeoMess = document.getElementById("btn-ceo-messages-readmore");

const contentCeoMess = document.getElementById("ceo-messages-more-info");

buttonCeoMess.addEventListener("click", function () {
  const content = contentCeoMess.children[0];
  console.log(content.getBoundingClientRect().height);
  if (contentCeoMess.getBoundingClientRect().height <= 1) {
    contentCeoMess.style.height = `${content.getBoundingClientRect().height}px`;
    contentCeoMess.style.marginBottom = "15px";
    buttonCeoMess.innerText = "Ẩn bớt";
  } else {
    contentCeoMess.style.height = "0px";
    contentCeoMess.style.marginBottom = "0px";
    buttonCeoMess.innerText = "Xem thêm";
  }
  console.log(contentCeoMess.getBoundingClientRect().height);
});
