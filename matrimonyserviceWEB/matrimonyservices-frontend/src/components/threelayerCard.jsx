import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import { Pagination } from "swiper/modules";
import images from "@/config/images";

const ThreeLayerCard = () => {
  const testimonials = [
    {
      message: "“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's”.",
      profile: {
        name: "Vivek & Madhavi",
        profilePictureUrl: images.cat,
      },
      backgroundImage: images.blog_1,
    },
    {
        message: "“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's”.",
      profile: {
        name: "Emely & Joseph",
        profilePictureUrl: images.cat,
      },
      backgroundImage: images.blog_2,
    },
    {
        message: "“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's”.",
      profile: {
        name: "Rajesh & Mounika",
        profilePictureUrl: images.cat,
      },
      backgroundImage: images.blog_3,
    },
  ];

  return (
    <div className="swiper-container py-20 w-[80%] mx-auto" >
      <div className="text-center">
        <p className="text-4xl mb-5">Our <span className="font-semibold">Success Stories</span> </p>
      </div>

      <div >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper p-4 m-4"
          slidesPerView={3}
          spaceBetween={20}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={`swiper-slide`}
            >
              <div
                className={`select-none flex items-center justify-center flex-col gap-4 shadow-xl my-10 px-5 py-5 rounded-xl border ${index != 1 ? 'scale-75' : ''}`}
              >
                <div className="font-medium text-secondary text-base">
                  {testimonial.message}
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className="h-10 w-10">
                    <img
                      className="rounded-full"
                      src={testimonial.profile.profilePictureUrl}
                      alt={`profile-${index}`}
                    />
                  </div>
                  <p className="font-normal">
                    {testimonial.profile.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center gap-4">
          <div className="shadow-md  w-fit p-3 rounded-full cursor-pointer">
            <img src="assets/angle-left.svg" alt="" className='w-[10px] h-[10px]' />
          </div>
          <div className="shadow-md  w-fit p-3 rounded-full cursor-pointer">
            <img src="assets/angle-left.svg" alt="" className='w-[10px] h-[10px] rotate-180' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeLayerCard;
