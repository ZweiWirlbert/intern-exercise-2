// product swiper
const productSlides = [
  {
    image: "../public/assets/images/smart-anime-270x180.jpg",
    title: "SMART ANIME",
    desc: "Trí tuệ nhân tạo tự động tạo ra hình ảnh minh họa nhân vật",
  },
  {
    image: "../public/assets/images/Smart-eLearning-270x180.jpg",
    title: "Smart E-learning",
    desc: "Thách thức:  Xây dựng nội dung đào tạo là một trong những yếu tố quan trọng nhất của các",
  },
  {
    image: "../public/assets/images/cobol-270x180.jpg",
    title: "Chuyển đổi hệ thống lớn từ Cobol sang Java",
    desc: "Thách thức: COBOL là ngôn ngữ cũ với hơn 40 năm xuất hiện, nhưng vẫn còn được sử dụng",
  },
  {
    image: "../public/assets/images/sap-salesforce-270x180.jpg",
    title: "Ngành cơ khí tại Nhật",
    desc: "Giới thiệu SAP ERP đến các nhà máy tại Nhật (Ibaraki, Mie, Osaka) Chuyển từ hệ thống AS400 sang",
  },
  {
    image: "../public/assets/images/monster-masters-1-270x180.jpg",
    title: "Monster Masters",
    desc: "Monster Master là dạng trò chơi hành động bắn súng với đồ họa 3D và màu sáng ấn tượng",
  },
  {
    image: "../public/assets/images/live-dreamer-2-270x180.jpg",
    title: "Live Dreamer",
    desc: "Thách thức: Phát triển một nền tảng Live Stream không hề đơn giản, vì các doanh nghiệp phải tạo",
  },
  {
    image:
      "../public/assets/images/game-smart-rock-scissor-paper-7-270x180.jpg",
    title: "Game Oẳn tù tì",
    desc: "Hợp đồng thông minh dựa trên trò chơi Búa-giấy-kéo chạy trên Ethereum Blockchain",
  },
  {
    image: "../public/assets/images/cobol-270x180.jpg",
    title: "Chuyển đổi hệ thống lớn từ Cobol sang Java",
    desc: "Thách thức: COBOL là ngôn ngữ cũ với hơn 40 năm xuất hiện, nhưng vẫn còn được sử dụng",
  },
  {
    image: "../public/assets/images/Smart-eLearning-270x180.jpg",
    title: "Smart E-learning",
    desc: "Thách thức:  Xây dựng nội dung đào tạo là một trong những yếu tố quan trọng nhất của các",
  },
  {
    image: "../public/assets/images/sap-1-270x180.jpg",
    title: "Bán Hàng Và Sản Xuất Xe",
    desc: "Tư vấn, phát triển và giới thiệu của báo cáo quản lý BI sử dụng BO SAP gắn với",
  },
  {
    image: "../public/assets/images/music-race-1-270x180.jpg",
    title: "Music Race",
    desc: "Cuộc đua với nhịp điệu, tại sao không? Bạn có bao giờ chơi một trò chơi hành động mà",
  },
  {
    image: "../public/assets/images/rino-270x180.jpg",
    title: "RinoChat",
    desc: "Thách thức: Nếu bạn cảm thấy nhàm chán với nhiều ứng dụng trò chuyện bởi vì chúng thiếu nhiều",
  },
  {
    image: "../public/assets/images/smart-trading-web-1-270x180.jpg",
    title: "SMART TRADING (ARB)",
    desc: "Thách thức: Trong thị trường đối hoái tiền điện tử, nếu bạn chỉ cần hành động giao dịch chậm",
  },
  {
    image: "../public/assets/images/cobol-270x180.jpg",
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
