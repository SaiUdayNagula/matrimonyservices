import React from "react";
import {Input,Select} from "antd";
import FooterComponent from "@/components/footer";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const ContactUs = () => {
  const { TextArea } = Input;
  const purpose = [
    {
        value : 'Payment',
        label : 'Payment'
    },
    {
        value : 'Enquiry',
        label : 'enquiry'
    },
    {
        value : 'others',
        label : 'Others'
    }
];
  return (
    <main>
      <section className="p-24 flex items-center h-[70vh] bg-[url('/assets/contact-banner.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-[65%] mx-auto flex flex-col items-center">
          <p className="text-white text-5xl text-center">Contact Us</p>
        </div>
      </section>
      <section className="w-[80%] mx-auto pt-14 pb-6">
        <p className="font-size-18 font-[300] pb-3 border-solid border-b-2 border-[#C9C9C9] flex items-center mx-6 ms-12 me-12"><span className="font-semibold">Note: </span>Before contacting us, please visit our FAQ page to see if your question has already been answered.</p>
      </section>
      <section className="w-[80%] mx-auto py-5 mb-14">
        <div className="flex gap-4 ms-12">
            <div className="w-[31%]"> 
                <p>First Name</p>
                <Input type="text" className="h-[40px]" placeholder="First Name" />
            </div>
            <div className="w-[31%]">
                <p>Last Name</p>
                <Input type="text" className="h-[40px]" placeholder="Last Name" />
            </div>
            <div className="w-[31%]">
                <p>Purpose</p>
                <Select className="w-full" size="large" options={purpose} placeholder="Select Purpose"/>
            </div>
        </div>
        <div className="flex pt-6 gap-5 ms-12">
            <div className="w-[47%]">
                <p>Email</p>
                <Input type="text" className="h-[40px]" placeholder="Enter email id" />
            </div>
            <div className="w-[47%]">
                <p>Phone</p>
                <PhoneInput
            inputClass="intlphoneinput"
            country="us"
            placeholder="Enter phone number" />
                {/* <Input type="text" className="h-[40px]" placeholder="Phone Number" /> */}
            </div>
        </div>
        <div className="flex ms-12">
        <div className="pt-6 w-[96%]">
            <p>Your Message</p>
            <TextArea rows={5}/>
        </div>
        </div>
        <div className="flex ms-12"><button className="btn-primary mt-5 ">Submit</button></div>
      </section>
      <FooterComponent/>
    </main>
  );
};

export default ContactUs;
