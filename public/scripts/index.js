(() =>
  window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", function () {
      this.classList.toggle("collapsed");
      this.nextElementSibling.classList.toggle("navbar-active");
    });

    function closeAvailableSubMenu() {
      submenuToggles.forEach((toggle) => {
        const submenu = toggle.parentElement.children[2];
        submenu.style.height = "0px";
      });
    }

    const submenuToggles = document.querySelectorAll(".sub-menu-toggle");
    submenuToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        closeAvailableSubMenu();
        const submenu = this.parentElement.children[2];
        if (submenu.getBoundingClientRect().height <= 1) {
          submenu.style.height = `${
            submenu.children[0].getBoundingClientRect().height *
            submenu.children.length
          }px`;
        } else {
          submenu.style.height = "0px";
        }
      });
    });

    const sliderItems = document.querySelectorAll(".slider-item");
    setInterval(function () {
      sliderItems.forEach((sliderItem) => {
        sliderItem.classList.toggle("slider-item-active");
      });
    }, 3000);
  }))();

window.onscroll = function () {
  scrollFunction();
};
const navbar = document.getElementById("navbar");
const navbarLogo = document.getElementById("navbar-logo");
const hamburgerSlices = document.querySelectorAll(".hamburger-slice");
const mainMenuItemLink = document.querySelectorAll(".main-menu-item-link");
const navyItem = document.querySelector(".navy-item");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("navbar-scroll");
    navbarLogo.classList.remove("invert");
    navbarLogo.classList.remove("brightness-0");
    hamburgerSlices.forEach((slice) => {
      slice.classList.add("hamburger-slice-scroll");
    });
    mainMenuItemLink.forEach((links) => {
      links.classList.add("main-menu-item-link-scroll");
    });
    navyItem.classList.remove("main-menu-item-link-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
    navbarLogo.classList.add("invert");
    navbarLogo.classList.add("brightness-0");
    hamburgerSlices.forEach((slice) => {
      slice.classList.remove("hamburger-slice-scroll");
    });
    mainMenuItemLink.forEach((links) => {
      links.classList.remove("main-menu-item-link-scroll");
    });
  }
}
// product swiper
const productSlides = [
  {
    image: "./public/assets/images/smart-anime-270x180.jpg",
    title: "SMART ANIME",
    desc: "Trí tuệ nhân tạo tự động tạo ra hình ảnh minh họa nhân vật",
  },
  {
    image: "./public/assets/images/Smart-eLearning-270x180.jpg",
    title: "Smart E-learning",
    desc: "Thách thức:  Xây dựng nội dung đào tạo là một trong những yếu tố quan trọng nhất của các",
  },
  {
    image: "./public/assets/images/cobol-270x180.jpg",
    title: "Chuyển đổi hệ thống lớn từ Cobol sang Java",
    desc: "Thách thức: COBOL là ngôn ngữ cũ với hơn 40 năm xuất hiện, nhưng vẫn còn được sử dụng",
  },
  {
    image: "./public/assets/images/sap-salesforce-270x180.jpg",
    title: "Ngành cơ khí tại Nhật",
    desc: "Giới thiệu SAP ERP đến các nhà máy tại Nhật (Ibaraki, Mie, Osaka) Chuyển từ hệ thống AS400 sang",
  },
  {
    image: "./public/assets/images/monster-masters-1-270x180.jpg",
    title: "Monster Masters",
    desc: "Monster Master là dạng trò chơi hành động bắn súng với đồ họa 3D và màu sáng ấn tượng",
  },
  {
    image: "./public/assets/images/live-dreamer-2-270x180.jpg",
    title: "Live Dreamer",
    desc: "Thách thức: Phát triển một nền tảng Live Stream không hề đơn giản, vì các doanh nghiệp phải tạo",
  },
  {
    image: "./public/assets/images/game-smart-rock-scissor-paper-7-270x180.jpg",
    title: "Game Oẳn tù tì",
    desc: "Hợp đồng thông minh dựa trên trò chơi Búa-giấy-kéo chạy trên Ethereum Blockchain",
  },
  {
    image: "./public/assets/images/cobol-270x180.jpg",
    title: "Chuyển đổi hệ thống lớn từ Cobol sang Java",
    desc: "Thách thức: COBOL là ngôn ngữ cũ với hơn 40 năm xuất hiện, nhưng vẫn còn được sử dụng",
  },
  {
    image: "./public/assets/images/Smart-eLearning-270x180.jpg",
    title: "Smart E-learning",
    desc: "Thách thức:  Xây dựng nội dung đào tạo là một trong những yếu tố quan trọng nhất của các",
  },
  {
    image: "./public/assets/images/sap-1-270x180.jpg",
    title: "Bán Hàng Và Sản Xuất Xe",
    desc: "Tư vấn, phát triển và giới thiệu của báo cáo quản lý BI sử dụng BO SAP gắn với",
  },
  {
    image: "./public/assets/images/music-race-1-270x180.jpg",
    title: "Music Race",
    desc: "Cuộc đua với nhịp điệu, tại sao không? Bạn có bao giờ chơi một trò chơi hành động mà",
  },
  {
    image: "./public/assets/images/rino-270x180.jpg",
    title: "RinoChat",
    desc: "Thách thức: Nếu bạn cảm thấy nhàm chán với nhiều ứng dụng trò chuyện bởi vì chúng thiếu nhiều",
  },
  {
    image: "./public/assets/images/smart-trading-web-1-270x180.jpg",
    title: "SMART TRADING (ARB)",
    desc: "Thách thức: Trong thị trường đối hoái tiền điện tử, nếu bạn chỉ cần hành động giao dịch chậm",
  },
  {
    image: "./public/assets/images/cobol-270x180.jpg",
    title: "Chuyển đổi hệ thống lớn từ Cobol sang Java",
    desc: "Thách thức: COBOL là ngôn ngữ cũ với hơn 40 năm xuất hiện, nhưng vẫn còn được sử dụng",
  },
];

const productSwiperWapper = document.querySelector(".product-swiper-wrapper");
productSlides.forEach((item) => {
  productSwiperWapper.appendChild(Product(item));
});

function Product(data) {
  const { image, title, desc } = data;
  const product = document.createElement("div");
  product.className = "swiper-slide";
  product.innerHTML = `
                  <div class="swiper-slide-item">
                    <a href="/">
                      <div class="item-inner">
                        <div class="item-thumb">
                          <img
                            src="${image}"
                          />
                        </div>
                        <div class="item-inner-text">
                          <h4 class="mb-[5px] text-[16px] font-medium">
                            ${title}
                          </h4>
                          <p>
                            ${desc}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>`;
  return product;
}

// partner swiper
const partnerSlides = [
  {
    image: "./public/assets/images/logo-parner.png",
  },
  {
    image: "./public/assets/images/NTTDATA_NJK.png",
  },
  {
    image: "./public/assets/images/supportas.png",
  },
  {
    image: "./public/assets/images/Jimofuru.png",
  },
  {
    image: "./public/assets/images/UnivOfTokyo.png",
  },
  {
    image: "./public/assets/images/fujitomi_logo.png",
  },
  {
    image: "./public/assets/images/Hitachi.png",
  },
  {
    image: "./public/assets/images/dokidoki.png",
  },
  {
    image: "./public/assets/images/KPMG.png",
  },
  {
    image: "./public/assets/images/logo-pn.png",
  },
  {
    image: "./public/assets/images/wellup-logo-1.png",
  },
  {
    image: "./public/assets/images/MURC.png",
  },
  {
    image: "./public/assets/images/rakuten-logo.png",
  },
  {
    image: "./public/assets/images/CyberAgent.png",
  },
];

const partnerSwiperWapper = document.querySelector(".partner-swiper-wrapper");
partnerSlides.forEach((item) => {
  partnerSwiperWapper.appendChild(Partner(item));
});

function Partner(data) {
  const { image } = data;
  const partner = document.createElement("div");
  partner.className = "swiper-slide";
  partner.innerHTML = `<div class="swiper-slide-item">
                      <img
                        src="${image}"
                        class="block w-full max-w-full object-cover"
                      />
                    </div>`;

  return partner;
}

// clients swiper
const clientSlides = [
  {
    image: "./public/assets/images/mediotec-director.jpg",
    name: "Mediotec Co.,Ltd Matsumoto Hidemori CEO",
    mess: "BAP thật sự đã xây dựng được một thể chế mà có thể uyển chuyển đối ứng tốt với các vấn đề của việc phát triển offshore",
  },
  {
    image: "./public/assets/images/ogawa-1.jpg",
    name: "Mr. Ogawa - Trợ lý Giám đốc, Tập đoàn NTT DATA NJK",
    mess: "Chỉ có thể là BAP. Tôi đã có 1 comtor tuyệt vời và 1 đội phản hồi rất nhanh.",
  },
  {
    image: "./public/assets/images/mr-sugimoto-1.jpg",
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
                    class="box-sevices mb-[16px] rounded-[3px] border-[1px] border-solid border-[#ececec] bg-white p-5 text-center shadow-none"
                  >
                    <div class="img-services my-[15px]">
                      <img
                        src="${image}"
                        class="h-[45px] max-h-[45px] w-full max-w-[175px] object-contain"
                      />
                    </div>
                    <div class="info-services text-center">
                      <h4
                        class="mb-[15px] text-[13px] font-normal leading-[1.2] text-[#393939]"
                      >
                        ${title}
                      </h4>
                      <p
                        class="h-[30px] overflow-hidden text-center text-[10px] text-[#007bff]"
                      >
                        ${desc}
                      </p>
                    </div>
                  </div>
                </a>`;

  return client;
}
