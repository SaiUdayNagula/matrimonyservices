import React from "react";
import Profiles from "@/components/Common/Profiles";
import { Form, Select } from "antd";
import CopyRight from "@/components/Common/CopyRight";
const Search = () => {
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

  return (
    <main className="bg-[url('/assets/bg-pattern.png')] bg-cover min-h-[90vh]">
      <section className="w-[90%] mx-auto py-10">
        <p className="text-[#1E2C0E] text-center text-3xl font-semibold">
          Search & Matchmaking
        </p>
        <div className="p-8 bg-[#F3F3F3] rounded-lg mt-10">
          <Form className="search-form font-omega">
            <div className="flex justify-between">
              <div className="w-[20%]">
                <Form.Item>
                  <p className="mb-2 font-semibold">Age</p>
                  <div className="select-group flex">
                    <Select size="large" />
                    <div className="border-[#171717] border my-3"></div>
                    <Select size="large" />
                  </div>
                </Form.Item>
              </div>
              <div className="w-[25%]">
                <Form.Item>
                  <p className="mb-2 font-semibold">Height</p>
                  <div className="select-group flex">
                    <Select size="large" />
                    <div className="border-[#171717] border my-3"></div>
                    <Select size="large" />
                  </div>
                </Form.Item>
              </div>
              <div className="w-[20%]">
                <Form.Item>
                  <p className="mb-2 font-semibold">Marital Status</p>
                  <Select size="large" className="border-none" />
                </Form.Item>
              </div>
              <div className="w-[20%]">
                <Form.Item>
                  <p className="mb-2 font-semibold">Religion</p>
                  <Select size="large" className="border-none" />
                </Form.Item>
              </div>
            </div>
            <div className="flex gap-10 justify-between">
              <div className="w-[20%]">
                <Form.Item>
                  <p className="mb-2 font-semibold">Mother Tounge</p>
                  <Select size="large" className="border-none" />
                </Form.Item>
              </div>
              <div className="w-[25%]">
                <Form.Item>
                  <p className="mb-2 font-semibold">Community</p>
                  <Select size="large" className="border-none" />
                </Form.Item>
              </div>
              <div className="w-[20%]">
                <Form.Item>
                  <p className="mb-2 font-semibold">Country Living In</p>
                  <Select size="large" className="border-none" />
                </Form.Item>
              </div>
              <div className="w-[20%]">
                <Form.Item>
                  <p className="mb-2 font-semibold">State Living In</p>
                  <Select size="large" className="border-none" />
                </Form.Item>
              </div>
            </div>
            <button className="btn-primary">Continue</button>
          </Form>
        </div>
      </section>
      <section className="w-[90%] mx-auto py-10">
        <Profiles profiles={profiles} />
      </section>
      <CopyRight/>
    </main>
  );
};

export default Search;
