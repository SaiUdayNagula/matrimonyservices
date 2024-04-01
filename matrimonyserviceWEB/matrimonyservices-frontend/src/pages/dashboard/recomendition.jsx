import CopyRight from "@/components/Common/CopyRight";
import FAQ from "@/components/Common/FAQ";
import Profiles from "@/components/Common/Profiles";
import PrivateLayout from "@/components/Layouts/PrivateLayout";
import React from "react";

const Recomendition = () => {
  const profiles = [
    {
      image: "/assets/profiles/shruti.png",
      name: "Shruti K",
      age: "24yrs",
      height: "5'4''",
      city: "Hyderabad",
      locality: "Jubilihills",
      language: "Telugu",
      caste: "Chowdary",
    },
    {
      image: "/assets/profiles/kaushik.png",
      name: "Kaushik M",
      age: "27yrs",
      height: "5'9''",
      city: "Hyderabad",
      locality: "Kukatpally",
      language: "Telugu",
      caste: "Brahman",
    },
    {
      image: "/assets/profiles/keerthi.png",
      name: "Shruti K",
      age: "24yrs",
      height: "5'4''",
      city: "Hyderabad",
      locality: "Jubilihills",
      language: "Telugu",
      caste: "Chowdary",
    },
    {
      image: "/assets/profiles/areef.png",
      name: "Shruti K",
      age: "24yrs",
      height: "5'4''",
      city: "Hyderabad",
      locality: "Jubilihills",
      language: "Telugu",
      caste: "Chowdary",
    },
  ];
  const StatCard = (props) => {
    return (
      <div
        style={{ backgroundColor: props.bg1 }}
        className="rounded-xl overflow-hidden flex flex-col justify-between"
      >
        <p className="text-center py-4 text-3xl font-bold">{props.number}</p>
        <p
          className="py-2 px-3 text-sm h-[50%] flex items-center justify-center text-center"
          style={{ backgroundColor: props.bg2 }}
        >
          {props.name}
        </p>
      </div>
    );
  };
  return (
    <PrivateLayout>
      <main className="relative pb-8">
        <div className="bg-[url('/assets/recomendition-banner.png')] bg-no-repeat bg-center bg-cover flex items-center py-40">
          <p className="text-white w-[60%] ms-28 text-[27px]">
            Marriage creates afinancial partnership, shared responsibilities,
            pooling of resources, jointdecision-making, planning, budgeting,
            investments, savings, and securing thefamily's economic future,
            prosperity, well-being, and success.
          </p>
        </div>
        {/* Profile Cards */}
        <div className="bg-[url('/assets/bg-pattern.png')] py-10">
          <div className="w-[80%] mx-auto">
            <div className="">
              <Profiles profiles={profiles} />
            </div>
          </div>
        </div>
        {/* FAQ */}
        {/* <FAQ /> */}
        <CopyRight/>
      </main>
    </PrivateLayout>
  );
};

// TODO: add with auth
export default Recomendition;
