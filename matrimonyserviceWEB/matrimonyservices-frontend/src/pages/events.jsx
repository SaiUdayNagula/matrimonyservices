
import FooterComponent from "@/components/footer";
import React from "react";

const Events = () => {
  return (
    <main>
      <section className="p-24 flex items-center h-[70vh] bg-[url('/assets/events-hero.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[65%] mx-auto flex flex-col items-center">
          <p className="text-white text-5xl text-center">
            Empowering parents to help their children find love
          </p>
        </div>
      </section>
      <section className="w-[85%] pt-24 mx-auto">
        <h3 className="text-4xl font-semibold text-center">
          Promotional Events
        </h3>
        <p className="text-center mt-5 w-[60%] mx-auto mb-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy textLorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="flex justify-center -mb-10">
          <div className="p-6 shadow-md rounded-full w-fit bg-white">
            <img src="/assets/calender.png" width={50} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4] pt-36 pb-24">
        <div className="mx-auto w-[85%] flex justify-between">
          <div className="w-[30%]">
            <h4 className="text-2xl font-semibold mb-2">Weekly Events</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="w-[30%]">
            <h4 className="text-2xl font-semibold mb-2">Monthly Events</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="w-[30%]">
            <h4 className="text-2xl font-semibold mb-2">Annual Events</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
      </section>
      <FooterComponent/>
    </main>
  );
};

export default Events;
