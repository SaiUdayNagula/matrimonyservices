import FooterComponent from "@/components/footer";
import React from "react";

const Services = () => {
  const services = [
    {
      icon: "/assets/background-check.png",
      title: "Background Check",
      desc: "Prioritizing safety, the Background Check feature verifies users' education, employment, relationship, family, criminal, financial, and medical backgrounds, enhancing the authenticity of the platform.",
      link: "",
    },
    {
      icon: "/assets/chat.png",
      title: "Video Calling Arrangement",
      desc: "Modernizing the matchmaking experience, Video Calling Arrangements allow users to connect virtually, fostering a sense of familiarity and comfort before in-person meetings.",
      link: "",
    },
    {
      icon: "/assets/collaborate.png",
      title: "Messaging and Notification",
      desc: "Users communicate seamlessly through the Messaging feature. Real-time notifications keep users informed about new messages, profile views, and other activities, ensuring an engaged experience.",
      link: "",
    },
  ];
  const expertServices = [
    {
      icon: "/assets/conversation.png",
      title: "Family Meeting Arrangement",
      desc: "Facilitating real-world connections, the platform assists in arranging Meetings and Family Meetings, ensuring a smooth transition from online interactions to real-life connections",
      link: "",
    },
    {
      icon: "/assets/meeting.png",
      title: "Partner Preferences",
      desc: "In the quest for a life partner, users outline specific Partner Preferences. From personality traits to lifestyle choices, this feature streamlines the matchmaking process, ensuring compatibility.",
      link: "",
    },
    {
      icon: "/assets/video-call.png",
      title: "Matchmaking meetings",
      desc: "We will conduct weekends matchmaking online meeting based on available schedules. We introduce families, bride and groom in the call(s).",
      link: "",
    },
  ];
  return (
    <main>
      <section className="p-24 flex items-center h-[70vh] bg-[url('/assets/services-hero.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[65%] mx-auto flex flex-col items-center">
          <p className="text-white text-5xl text-center">
            Your love story, our expertise let the journey toforever begin.
          </p>
        </div>
      </section>
      <section className="w-[90%] mx-auto pb-24 pt-20">
        <div className=" text-center">
          <h1 className="text-4xl font-semibold mb-10">-Our Services-</h1>
        </div>
        <p className="w-[65%] text-center mx-auto">
          You will get access to platform's features which redefine the
          matrimony experience. From ensuring security through Two-Factor
          Authentication to facilitating real-world connections, each feature
          plays a pivotal role in creating a holistic and personalized approach
          to online matchmaking. It's a testament to the evolving nature of
          matrimony services, where technology converges with tradition to
          redefine the journey of finding a life partner.
        </p>
      </section>
      <section>
        <div className="rounded-full bg-[#FFB000] px-16 py-6 flex gap-10 w-fit items-center mx-auto -mb-[4%] z-10 relative">
          <img src="/assets/register-free.png" alt="" width={120} />
          <div>
            <p className="text-3xl font-bold">Free Registration</p>
            <p className="text-2xl">
              Registration and most of our services are free.
            </p>
          </div>
        </div>
        <div className="bg-[#2F3C1F]">
          <div className="w-[90%] mx-auto pt-[10%] pb-[5%] flex gap-10 justify-between">
            {services.map((e, i) => {
              return (
                <div
                  key={`services-card-${i}`}
                  className="w-[30%] h-100 flex flex-col justify-between items-start"
                >
                  <img src={e.icon} alt="" className="mb-6" />
                  <p className="text-2xl text-white mb-3">{e.title}</p>
                  <p className="text-white mb-3">{e.desc}</p>
                  {/* <button className="btn-outline-white">Explore Now</button> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-[5%]">
          <div className="w-[90%] mx-auto flex gap-10 justify-between">
            {expertServices.map((e, i) => {
              return (
                <div
                  key={`services-card-${i}`}
                  className="w-[30%] h-100 flex flex-col justify-between items-start"
                >
                  <img src={e.icon} alt="" className="mb-6" />
                  <p className="text-3xl mb-3">{e.title}</p>
                  <p className="mb-3">{e.desc}</p>
                  {/* <button className="btn-outline-dark">Explore Now</button> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterComponent />
    </main>
  );
};

export default Services;
