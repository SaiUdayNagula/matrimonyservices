import FAQ from "@/components/Common/FAQ";
import Profiles from "@/components/Common/Profiles";
import PrivateLayout from "@/components/Layouts/PrivateLayout";
import React from "react";

const Dashboard = () => {
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
      image: "/assets/profiles/shruti.png",
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
      <main>
        <div className="bg-[url('/assets/profiles-head-bg.png')] bg-no-repeat bg-center bg-cover flex items-center py-40">
          <p className="text-black w-[50%] ms-24 text-[27px]">
            Marriage ensures thecontinuation of family lineage, ancestral
            traditions, cultural heritage,customs, rituals, values, beliefs,
            practices, and passes on family legacy, stories,wisdom, and
            teachings to future generations.
          </p>
        </div>
        {/* Profile Cards */}
        <div className="bg-[url('/assets/bg-pattern.png')] py-10">
          <div className="mx-auto">
            <div className="bg-[url('/assets/bg-pattern.png')] py-10">
              <div className="w-[80%] mx-auto">
                <div className="flex justify-between items-center pb-2 mt-5 border-b-2 mb-8">
                  <p className="font-semibold text-2xl">Profiles</p>
                </div>
                <Profiles profiles={profiles} />
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </PrivateLayout>
  );
};

// TODO: add with auth
export default Dashboard;
