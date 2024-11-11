import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import imgChatluong from "../../assets/img/spChatluong.png";
import imgToandien from "../../assets/img/giaiphaptoandien.jpg";
import imgChuyennghiep from "../../assets/img/doinguchuyennghiep.jpg";
import imgDoimoi from "../../assets/img/tantamdoimoi.jpg";
import imgDichvu from "../../assets/img/dich-vu-khach-hang.jpg";

import imgTrannhua from "../../assets/img/trannhua.jpg";
import imgTuongnhua from "../../assets/img/tuongnhua.jpg";
import imgThachcao from "../../assets/img/thachcao.jpg";
import imgTubep from "../../assets/img/tubep.jpg";
import imgVachsango from "../../assets/img/vachsango.jpg";

const Home = () => {
  const content = [
    {
      title: "Phong cách & Chất lượng",
      content:
        "An Nam Interior là đơn vị thiết kế và thi công trang trí nội thất chuyên nghiệp, với phong cách hiện đại và sang trọng. Chúng tôi mang đến không gian sống và làm việc không chỉ đẹp mắt mà còn tối ưu hóa công năng, đáp ứng nhu cầu cá nhân của mỗi khách hàng.",
      img: imgChatluong,
    },
    {
      title: "Giải pháp Toàn diện",
      content:
        "An Nam Interior cung cấp các giải pháp nội thất toàn diện, từ khâu lên ý tưởng, thiết kế, đến thi công và hoàn thiện. Chúng tôi cam kết mang đến cho khách hàng một không gian sống lý tưởng, hài hòa về thẩm mỹ và tối ưu về công năng.",
      img: imgToandien,
    },
    {
      title: "Đội ngũ Chuyên nghiệp",
      content:
        "Với đội ngũ kiến trúc sư và kỹ sư có nhiều năm kinh nghiệm, An Nam Interior luôn sáng tạo ra những thiết kế độc đáo, đáp ứng mọi mong đợi của khách hàng. Chúng tôi tin rằng mỗi không gian là một tác phẩm nghệ thuật riêng, phản ánh phong cách và cá tính của người sở hữu.",
      img: imgChuyennghiep,
    },
    {
      title: "Tận tâm và Đổi mới",
      content:
        "Sự hài lòng của khách hàng là niềm tự hào và động lực của An Nam Interior. Chúng tôi không ngừng đổi mới và phát triển để mang đến các giải pháp nội thất tối ưu, chất lượng và bền vững.",
      img: imgDoimoi,
    },
    {
      title: "Dịch vụ Khách hàng Hàng Đầu",
      content:
        "An Nam Interior cam kết mang đến trải nghiệm khách hàng tuyệt vời từ tư vấn đến hậu mãi. Mỗi dự án là một sự đầu tư tâm huyết của chúng tôi, đảm bảo hoàn thiện đúng tiến độ và vượt trên sự mong đợi của khách hàng.",
      img: imgDichvu,
    },
  ];

  const product = [
    {
      title: "Trần nhựa",
      content: "Bài viết về trần nhựa",
      img: imgTrannhua,
    },
    {
      title: "Tường nhựa ",
      content: "Bài viết về Tường nhựa",
      img: imgTuongnhua,
    },
    {
      title: "Thạch cao",
      content: "Bài viết về thạch cao",
      img: imgThachcao,
    },
    {
      title: "Tủ bếp",
      content: "Bài viết về Tủ bếp",
      img: imgTubep,
    },
    {
      title: "Vách sàn gỗ",
      content: "Bài viết về vách sàn gỗ",
      img: imgVachsango,
    },
  ];
  return (
    <div>
      <marquee className="bg-blue-400 text-white py-[10px]" direction="">
        Welcome to website An Nam Noi That
      </marquee>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        {content.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt="bg"
                  class="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div class="absolute inset-0 bg-black/70"></div>
                <div class="p-6 relative flex flex-col justify-end">
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                    {item.title}
                  </h4>
                  <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                    {item.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h1 className="mt-[15px] py-[5px] bg-blue-400 text-white text-center">
        Các hạng mục và sản phẩm
      </h1>
      <div className="mt-[15px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          {product.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt="bg"
                    class="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div class="absolute inset-0 bg-black/70"></div>
                  <div class="p-6 relative flex flex-col justify-end">
                    <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                      {item.title}
                    </h4>
                    <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                      {item.content}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
