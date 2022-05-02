// news swiper
const newsSlides = [
  {
    image: "../public/assets/images/newstaptheduc-1.jpg",
    text: "Nhiều cách tập thể dục phù hợp với dân văn phòng",
  },
  {
    image: "../public/assets/images/smart-fashion-app-on-vtv9-channel.jpg",
    text: " Ứng dụng thử đồ trực tuyến đầu tiên tại Việt Nam",
  },
  {
    image: "../public/assets/images/smartfashion-app-on-the-htv7.jpg",
    text: " Ứng dụng công nghệ AI vào doanh nghiệp thời đại công nghệ 4.0",
  },
  {
    image: "../public/assets/images/スクリーンショット-2021-06-24-10.57.32.png",
    text: " Youtube của nhà BAPers",
  },
];

const newsSwiperWapper = document.querySelector(".news-swiper-wrapper");
newsSlides.forEach((item) => {
  newsSwiperWapper.appendChild(News(item));
});

function News(data) {
  const { image, text } = data;
  const news = document.createElement("div");
  news.className = "swiper-slide";
  news.innerHTML = `<div class="item swiper-slide-item">
                <img src="${image}" />
                <h5 class="chanel-item-title ">${text}</h5>
                          </div>`;
  return news;
}
