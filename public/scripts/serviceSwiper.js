// service swiper
const serviceSlides = [
  {
    image: "./public/assets/images/lodyhelp.jpg",
    title: "LODYHELP",
    desc: "All expats need in their new town",
  },
  {
    image: "./public/assets/images/logo-top-sinh-vien.jpg",
    title: "Top Students",
    desc: "",
  },
  {
    image: "./public/assets/images/lyberzy.jpg",
    title: "LIBERZY",
    desc: "Social Media platform for travelers",
  },
  {
    image: "./public/assets/images/dayconkieunhat.jpg",
    title: "Dayconkieunhat",
    desc: "Online portal for Vietnamese in Japan's style of raising kids",
  },
  {
    image: "./public/assets/images/danang-services.jpg",
    title: "Danang-services",
    desc: "Real Estate platform for expats in Da Nang",
  },
  {
    image: "./public/assets/images/cosy.jpg",
    title: "Cosy Chat",
    desc: "A chat application",
  },
  {
    image: "./public/assets/images/smart-fashion-logo.jpg",
    title: "Smart Fashion",
    desc: "Fashion fitting App, powered by AI technology",
  },
  {
    image: "./public/assets/images/logo-green-beli.jpg",
    title: "Green Beli",
    desc: "",
  },
];

const serviceProductSwiperWapper = document.querySelector(
  ".service-product-swiper-wrapper"
);
serviceSlides.forEach((item) => {
  serviceProductSwiperWapper.appendChild(ServiceProduct(item));
});

function ServiceProduct(data) {
  const { image, title, desc } = data;
  const client = document.createElement("div");
  client.className = "swiper-slide service-product-items";
  client.innerHTML = `<a href="/" target="_blank">
                  <div
                    class="box-services "
                  >
                    <div class="img-services ">
                      <img
                        src="${image}"
                      />
                    </div>
                    <div class="info-services ">
                      <h4>
                        ${title}
                      </h4>
                      <p>
                        ${desc}
                      </p>
                    </div>
                  </div>
                </a>`;

  return client;
}
