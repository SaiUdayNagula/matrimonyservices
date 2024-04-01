import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
// import required modules
import { Pagination } from "swiper/modules";
import { useEffect } from "react";
import images from "@/config/images";
const Testimonial = () => {
  const testimonials = [
    {
      title: "Blog 1",
      message:
        "Chaturvarnam is a great platform for finding a suitable partner. I found my partner through this site and I am thankful to the team for creating this platform.",
      profile: {
        name: "Maurice",
        profilePictureUrl: images.cat,
      },
      backgroundImage: images.blog_1, // Add your background image URL
    },
    {
      title: "Blog 2",
      message:
        "Chaturvarnam is a great platform for finding a suitable partner. I found my partner through this site and I am thankful to the team for creating this platform.",
      profile: {
        name: "Maurice",
        profilePictureUrl: images.cat,
      },
      // date: "January 20, 2024",
      backgroundImage: images.blog_2, // Add your background image URL
    },
    {
      title: "Blog 3",
      message:
        "Chaturvarnam is a great platform for finding a suitable partner. I found my partner through this site and I am thankful to the team for creating this platform.",
      profile: {
        name: "Maurice",
        profilePictureUrl: images.cat,
      },
      // date: "January 20, 2024",
      backgroundImage: images.blog_3, // Add your background image URL
    },
    
    // Add more testimonials as needed
  ];

  return (
    <div className="swiper-container my-[4rem] w-[75%] mx-auto">
      <div className=" text-center">
        <h1 className="text-4xl font-semibold mb-10">-Our Blogs-</h1>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper sm-4"
        slidesPerView={3} // Display 3 testimonials simultaneously
        spaceBetween={40}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
          >
            {/* Image above each slide */}
            <div >
              <img
                src={testimonial.backgroundImage}
                alt={`profile-${index}`}
                className="w-full"
              />
              <div
                className="select-none bg-[#f5f5f6] px-8 pb-8 rounded-md"
              >
                <p className="text-sm text-slate-500 pt-2 text-end"> {testimonial.date} </p>
                <p className="text-left mb-2 mt-2 font-[600] text-[2rem]">{testimonial.title}</p>
                <p className="text-left font-medium text-secondary text-base">
                  {testimonial.message}
                </p>
                <p className="text-sm text-start mt-5 text-[#B37B0E]" > <a href="">View More</a> </p>
                <div className="flex justify-center items-center gap-4">
                  {/* <div className="h-10 w-10">
                                    <img
                                        className="rounded-full"
                                        src={testimonial.profile.profilePictureUrl}
                                        alt={`profile-${index}`}
                                    />
                                </div> */}
                  {/* <p className="font-normal">
                                    {testimonial.profile.name}
                                </p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
