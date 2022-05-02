// customer swiper
const customerSlides = [
  {
    image: "../public/assets/images/code-gym.jpg",
  },
  {
    image: "../public/assets/images/iviettech.jpg",
  },
  {
    image: "../public/assets/images/codegym-hue.jpg",
  },
  {
    image: "../public/assets/images/dai-hoc-khoa-hoc-hue.jpeg",
  },
  {
    image: "../public/assets/images/client-1.jpg",
  },
  {
    image: "../public/assets/images/client-2.jpg",
  },
  {
    image: "../public/assets/images/client-3.jpg",
  },
];

const customerSwiperWapper = document.querySelector(".customer-swiper-wrapper");
customerSlides.forEach((item) => {
  customerSwiperWapper.appendChild(Customer(item));
});

function Customer(data) {
  const { image } = data;
  const customer = document.createElement("div");
  customer.className = "swiper-slide";
  customer.innerHTML = `
                  <div class="item swiper-slide-item">
                            <img src="${image}" />
                          </div>`;
  return customer;
}

// activity swiper
const activitySlides = [
  {
    image: "../public/assets/images/upbeat-music.jpg",
  },
  {
    image: "../public/assets/images/ao-dai-fashion-show.jpg",
  },
  {
    image: "../public/assets/images/core-member-and-partner.jpg",
  },
  {
    image: "../public/assets/images/customer-at-the-party.jpg",
  },
  {
    image: "../public/assets/images/individuals-who-are-attached.jpg",
  },
];

const activitySwiperWapper = document.querySelector(".activity-swiper-wrapper");
activitySlides.forEach((item) => {
  activitySwiperWapper.appendChild(Activity(item));
});

function Activity(data) {
  const { image } = data;
  const activity = document.createElement("div");
  activity.className = "swiper-slide";
  activity.innerHTML = `
                  <div class="item swiper-slide-item">
                            <img src="${image}" />
                          </div>`;
  return activity;
}

// employee swiper
const employeeSlides = [
  {
    image: "../public/assets/images/new-year-lucky-money-activities.jpg",
  },
  {
    image: "../public/assets/images/rocking-activity.jpg",
  },
  {
    image: "../public/assets/images/intership.jpg",
  },
  {
    image: "../public/assets/images/team-building-in-work-space.jpg",
  },
  {
    image: "../public/assets/images/staff-achievements-8.jpg",
  },
];

const employeeSwiperWapper = document.querySelector(".employee-swiper-wrapper");
employeeSlides.forEach((item) => {
  employeeSwiperWapper.appendChild(Employee(item));
});

function Employee(data) {
  const { image } = data;
  const employee = document.createElement("div");
  employee.className = "swiper-slide";
  employee.innerHTML = `
                  <div class="item swiper-slide-item">
                            <img src="${image}" />
                          </div>`;
  return employee;
}

// company swiper
const companySlides = [
  {
    image: "../public/assets/images/top10-ai-iot.jpg",
  },
  {
    image: "../public/assets/images/reception-area.jpg",
  },
  {
    image: "../public/assets/images/relax-room-hui.jpg",
  },
  {
    image: "../public/assets/images/bap-dad-office.jpg",
  },
  {
    image: "../public/assets/images/bap-hcm-office.jpg",
  },
  {
    image: "../public/assets/images/dad-work-area.jpg",
  },
];

const companySwiperWapper = document.querySelector(".company-swiper-wrapper");
companySlides.forEach((item) => {
  companySwiperWapper.appendChild(company(item));
});

function company(data) {
  const { image } = data;
  const company = document.createElement("div");
  company.className = "swiper-slide";
  company.innerHTML = `
                  <div class="item swiper-slide-item">
                            <img src="${image}" />
                          </div>`;
  return company;
}
