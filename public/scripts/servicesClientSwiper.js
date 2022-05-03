// clients swiper
const clientSlides = [
  {
    image: "../public/assets/images/mediotec-director.jpg",
    name: "Mediotec Co.,Ltd Matsumoto Hidemori CEO",
    mess: "BAP thật sự đã xây dựng được một thể chế mà có thể uyển chuyển đối ứng tốt với các vấn đề của việc phát triển offshore",
  },
  {
    image: "../public/assets/images/ogawa-1.jpg",
    name: "Mr. Ogawa - Trợ lý Giám đốc, Tập đoàn NTT DATA NJK",
    mess: "Chỉ có thể là BAP. Tôi đã có 1 comtor tuyệt vời và 1 đội phản hồi rất nhanh.",
  },
  {
    image: "../public/assets/images/mr-sugimoto-1.jpg",
    name: "Mr. Sugimoto - Phó Quản lý, Tập đoàn iXIT",
    mess: "Hiệu suất công việc luôn cao hơn chúng tôi yêu cầu, đó là lý do chúng tôi chọn BAP.",
  },
];

const clientSwiperWapper = document.querySelector(".client-swiper-wrapper");
clientSlides.forEach((item) => {
  clientSwiperWapper.appendChild(Client(item));
});

function Client(data) {
  const { image, name, mess } = data;
  const client = document.createElement("li");
  client.className = "swiper-slide customer-items";
  client.innerHTML = `<div class="recomment-items swiper-slide-item">
                  <div class="client-name">
                    <img src="${image}" />
                    <p>${name}</p>
                  </div>
                  <h4>
                    ${mess}
                  </h4>
                </div>`;

  return client;
}
