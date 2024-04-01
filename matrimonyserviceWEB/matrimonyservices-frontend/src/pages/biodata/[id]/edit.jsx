import CopyRight from "@/components/Common/CopyRight";
import {
  genders,
  languages,
  maritalStatuses,
  religions,
  socialMedias,
} from "@/config/constants";
import { DatePicker, Input, Select } from "antd";
// import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React from "react";

const Edit = () => {
  const { TextArea } = Input;
  const ProfileSection = ({ title, children }) => {
    return (
      <div className="bg-[#F3F3F3] mt-10 rounded-xl overflow-hidden">
        <div className="flex justify-between items-center bg-[#2F3C1F] px-6 py-4">
          <p className="text-white text-xl">{title}</p>
          <img src="/assets/edit.svg" width={18} alt="" />
        </div>
        <div className="p-6">{children}</div>
      </div>
    );
  };
  const ProfileDetail = ({ title, value, colspan = null, type, options }) => {
    return (
      <div className={colspan ? `col-span-${colspan}` : ""}>
        <p className="text- text-slate-500 mb-2">{title}</p>
        {/* <p className="text-black font-semibold mt-1 text-xl">{value}</p> */}
        {/* <Input type="text" placeholder={title} value={value} /> */}
        {type === "select" ? (
          <Select
            options={options}
            defaultValue={value}
            className="w-full border-none"
            size="large"
          />
        ) : type === "date" ? (
          <DatePicker
            className="w-full !border-none"
            size="large"
            format={"DD-MM-YYYY"}
            value={dayjs(value, "DD-MM-YYYY")}
          />
        ) : (
          <Input type="text" value={value} className="h-[40px] rounded-[8px] !border-none" />
        )}
      </div>
    );
  };
  const profileImages = [
    "/assets/profiles/vishal/1.png",
    "/assets/profiles/vishal/2.png",
    "/assets/profiles/vishal/3.png",
    "/assets/profiles/vishal/4.png",
    "/assets/profiles/vishal/5.png",
  ];

  return (
    <main className="bg-[url('/assets/bg-pattern.png')] bg-cover">
      {/* Profile banenr */}
      <div className="bg-[url('/assets/profiles/vishal-m.png')] h-[380px] bg-cover bg-center bg-no-repeat"></div>
      {/* Porfile Picture */}
      <div className=" -mt-[8%] flex flex-col items-center">
        <div className="relative">
          <img
            src="/assets/profiles/vishal.png"
            className="w-[250px] h-[250px] rounded-full border-white border-[15px] border-solid object-cover"
            alt=""
          />
          <div className="p-3 bg-white absolute top-0 right-0 mt-[65%] shadow-md rounded-full cursor-pointer">
            <img src="/assets/edit-yellow.svg" width={18} className="" alt="" />
          </div>
        </div>
        <h3 className="text-4xl font-semibold mt-3">Vishal M</h3>
      </div>
      <div className="w-[80%] mx-auto mb-10">
        {/* Profile Images */}
        <div className="grid-cols-5 gap-8 grid mt-14 mb-10">
          {profileImages.map((e) => (
            <img src={e} alt="" />
          ))}
        </div>
        <div className="border-slate-400 border"></div>
        {/* Personal Information */}
        <ProfileSection title={"Profile Information"}>
          <div className="grid grid-cols-5 gap-6">
            <ProfileDetail title={"First Name"} value={"Shruti"} />
            <ProfileDetail title={"Last name"} value={"Kinnera"} />
            <ProfileDetail
              title={"Gender"}
              value={"female"}
              options={genders}
              type={"select"}
            />
            <ProfileDetail title={"DOB"} value={"21-04-1995"} type={"date"} />
            <ProfileDetail
              title={"Religion"}
              value={"hindu"}
              type={"select"}
              options={religions}
            />
          </div>
          <div className="my-5 border"></div>
          <div className="grid grid-cols-5 gap-6">
            <ProfileDetail
              title={"Mother Tounge"}
              value={"telugu"}
              type={"select"}
              options={languages}
            />
            <ProfileDetail
              title={"Marital Status"}
              value={"unmarried"}
              type={"select"}
              options={maritalStatuses}
            />
            <ProfileDetail title={"Height"} value={"5'9''"} />
            <ProfileDetail title={"Weight"} value={"75kg"} />
          </div>
        </ProfileSection>

        {/* Contact Information */}
        <ProfileSection title={"Contact Information"}>
          <div className="grid grid-cols-5 gap-6">
            <ProfileDetail title={"Email"} value={"Shruthi@gmail.com"} />
            <ProfileDetail
              title={"Address"}
              value={"Apt. 459 78727 Littel Estates, Hyderabad"}
              colspan={"2"}
            />
            <ProfileDetail title={"Mobile"} value={"+91 0123456789"} />
            <ProfileDetail
              title={"Social Media"}
              value={"facebook"}
              type={"select"}
              options={socialMedias}
            />
          </div>
        </ProfileSection>

        {/* Educational Details */}
        <ProfileSection title={"Educational Details"}>
          <div className="grid grid-cols-5 gap-6">
            <ProfileDetail
              title={"Highest Qualification"}
              value={"btech"}
              type={"select"}
              options={[{ value: "btech", label: "B-Tech" }]}
            />
            <ProfileDetail
              title={"College/University"}
              value={"JNTU College"}
            />
            <ProfileDetail
              title={"Field of Study"}
              value={"Software Development"}
            />
          </div>
        </ProfileSection>

        {/* Professional Details */}
        <ProfileSection title={"Professional Details"}>
          <div className="grid grid-cols-4 gap-6">
            <ProfileDetail
              title={"Job Title"}
              value={"UI / UX Developer"}
              type={"select"}
            />
            <ProfileDetail title={"Company"} value={"Wipro"} />
            <ProfileDetail title={"Annual Income"} value={"10 LPA"} />
          </div>
        </ProfileSection>

        {/* Lifestyle and Hobbies */}
        <ProfileSection title={"Lifestyle and Hobbies"}>
          <div className="grid grid-cols-5 gap-6">
            <ProfileDetail
              title={"Dietary preferences"}
              value={"Vegitarian"}
              type={"select"}
            />
            <ProfileDetail
              title={"Smoking habits"}
              value={"No"}
              type={"select"}
            />
            <ProfileDetail
              title={"Drinking Habits"}
              value={"No"}
              type={"select"}
            />
            <ProfileDetail
              title={"Other Hobbies"}
              value={"Eat Egg"}
              type={"select"}
            />
            <ProfileDetail title={"Interests"} value={"Gym"} type={"select"} />
          </div>
        </ProfileSection>

        {/* Partner Preferences */}
        <ProfileSection title={"Partner Preferences"}>
          <div className="grid grid-cols-5 gap-10">
            <ProfileDetail
              title={"Age Range"}
              value={"28-33"}
              type={"select"}
            />
            <ProfileDetail title={"Religion"} value={"Hindu"} type={"select"} />
            <ProfileDetail
              title={"Location"}
              value={"Hyderabad"}
              type={"select"}
            />
            <ProfileDetail
              title={"Professional"}
              value={"Software"}
              type={"select"}
            />
          </div>
        </ProfileSection>
        {/* Family information */}
        <ProfileSection title={"Family information"}>
          <div className="grid grid-cols-4 gap-10">
            <ProfileDetail
              title={"Parents"}
              value={"Father, Mother"}
              type={"select"}
            />
            <ProfileDetail
              title={"Siblings"}
              value={"Brother"}
              type={"select"}
            />
            <ProfileDetail
              title={"Parents siblings details"}
              value={"1 Sister, 1 Brother"}
              type={"select"}
            />
          </div>
        </ProfileSection>

        {/* Profile Summary */}
        <ProfileSection title={"Profile Summary"}>
          <TextArea
            rows={3}
            className="!border-none"
            defaultValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          `}
          />
        </ProfileSection>

        <div className="flex justify-end mt-5">
          <button className="bg-[#FFB000] px-8 py-2 text-white rounded">
            Update
          </button>
        </div>
      </div>
      <CopyRight/>
    </main>
  );
};

export default Edit;
