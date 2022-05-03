// partner swiper
const partnerSlides = [
  {
    image: "../public/assets/images/logo-parner.png",
  },
  {
    image: "../public/assets/images/NTTDATA_NJK.png",
  },
  {
    image: "../public/assets/images/supportas.png",
  },
  {
    image: "../public/assets/images/Jimofuru.png",
  },
  {
    image: "../public/assets/images/UnivOfTokyo.png",
  },
  {
    image: "../public/assets/images/fujitomi_logo.png",
  },
  {
    image: "../public/assets/images/Hitachi.png",
  },
  {
    image: "../public/assets/images/dokidoki.png",
  },
  {
    image: "../public/assets/images/KPMG.png",
  },
  {
    image: "../public/assets/images/logo-pn.png",
  },
  {
    image: "../public/assets/images/wellup-logo-1.png",
  },
  {
    image: "../public/assets/images/MURC.png",
  },
  {
    image: "../public/assets/images/rakuten-logo.png",
  },
  {
    image: "../public/assets/images/CyberAgent.png",
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
