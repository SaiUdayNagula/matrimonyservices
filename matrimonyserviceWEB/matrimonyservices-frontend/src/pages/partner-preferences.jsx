import React from "react";
import Profiles from "@/components/Common/Profiles";
import { Select, Slider } from "antd";
import { religions } from "@/config/constants";
import CopyRight from "@/components/Common/CopyRight";
const PartnerPrefernces = () => {
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
  const ProfileSection = ({ title, value, children }) => {
    return (
      <div className="bg-[#F3F3F3] mt-10 rounded-xl overflow-hidden">
        <div className="bg-[#2F3C1F] px-6 py-4 flex justify-between items-center">
          <p className="text-white text-xl">{title}</p>
          <p className="text-[#FFAC0A] text-xl">{value}</p>
        </div>
        <div className="p-6">{children}</div>
      </div>
    );
  };
  return (
    <div className="bg-[url('/assets/bg-pattern.png')] bg-cover min-h-[90vh]">
      <p className="text-center text-3xl font-bold pt-6 mb-10">
        Partner Preferences
      </p>
      <div className="mx-auto w-[80%] mb-10">
        <Profiles profiles={profiles} />
        <div>
          <ProfileSection
            title={"Age Range"}
            value={"Selected age Range 24-28"}
          >
            <div className="my-10">
              <div className="w-[55%] mx-auto">
                <Slider
                  range
                  min={21}
                  max={40}
                  defaultValue={[24, 28]}
                  className="custom-slider"
                />
              </div>
              <div className="flex justify-between w-[60%] mx-auto">
                <p className="font-semibold text-lg">21 Years</p>
                <p className="font-semibold text-lg">40 Years</p>
              </div>
            </div>
          </ProfileSection>
          <div className="grid grid-cols-2 gap-10">
            <ProfileSection title={"Religion"} value={"Hindu"}>
              <div className="flex justify-center gap-2 items-center">
                <p>Select Religion</p>
                <div className="w-[50%]">
                  <Select
                    options={religions}
                    size="large"
                    className="w-full"
                    placeholder="Select Religion"
                  />
                </div>
              </div>
            </ProfileSection>
            <ProfileSection title={"Education"} value={"B-Tech"}>
              <div className="flex justify-center gap-2 items-center">
                <p>Select Education</p>
                <div className="w-[50%]">
                  <Select
                    options={[]}
                    size="large"
                    className="w-full"
                    placeholder="Select Education"
                  />
                </div>
              </div>
            </ProfileSection>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <ProfileSection title={"Occupation"} value={"Software"}>
              <div className="flex justify-center gap-2 items-center">
                <p>Select Occupation</p>
                <div className="w-[50%]">
                  <Select
                    options={[]}
                    size="large"
                    className="w-full"
                    placeholder="Select Occupation"
                  />
                </div>
              </div>
            </ProfileSection>
            <ProfileSection title={"Location"} value={"Hyderabad"}>
              <div className="flex justify-center gap-2 items-center">
                <p>Select Location</p>
                <div className="w-[50%]">
                  <Select
                    options={religions}
                    size="large"
                    className="w-full"
                    placeholder="Select Location"
                  />
                </div>
              </div>
            </ProfileSection>
          </div>
          <div className="flex gap-10 justify-end mt-10">
            <button className="bg-[#82807C] px-12 py-2 text-white rounded">
              Cancel
            </button>
            <button className="bg-[#FFB000] px-12 py-2 text-white rounded">
              Save
            </button>
          </div>
        </div>
      </div>
      <CopyRight/>
    </div>
  );
};

export default PartnerPrefernces;
