import { Footer } from "flowbite-react";
import images from "@/config/images";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import CopyRight from "./Common/CopyRight";

function FooterComponent() {
  return (
    <Footer>
      <div className="bg-[#1E2C0E] py-8">
        <p className="text-white text-center font-light fontSize-larger">Need assistance? Feel free to contact us at <a href="" className="font-bold text-[#FFAC0A]">(000) 012-3456</a> and <a href="" className=" font-bold text-[#FFAC0A]">info@cms.com</a></p>
      </div>
      <div className="py-6">
        <ul className="flex justify-center">
          <li className=" text-[#5F5F5F] px-8 fontSize-footer">
            <a href="/">Home</a>
          </li>
          <li className="border-[#5F5F5F] border-solid border-r-2 my-1"></li>
          <li className="text-[#5F5F5F] px-8 fontSize-footer">
            <a href="/aboutus">About Us</a>
          </li>
          <li className="border-[#5F5F5F] border-solid border-r-2 my-1"></li>
          <li className="text-[#5F5F5F] px-8 fontSize-footer">
            <a href="/services">Services</a>
          </li>
          <li className="border-[#5F5F5F] border-solid border-r-2 my-1"></li>
          <li className="text-[#5F5F5F] px-8 fontSize-footer">
            <a href="/events">Events</a>
          </li>
          <li className="border-[#5F5F5F] border-solid border-r-2 my-1"></li>
          <li className="text-[#5F5F5F] px-8 fontSize-footer">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="border-[#5F5F5F] border-solid border-r-2 my-1"></li>
          <li className="text-[#5F5F5F] px-8 fontSize-footer">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <CopyRight/>
    </Footer>
  );
}
export default FooterComponent;
