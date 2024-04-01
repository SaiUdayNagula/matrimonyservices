import React, { useState } from "react";
import { FaBell, FaAngleDown } from "react-icons/fa6";
import { Badge,Menu, Dropdown } from 'antd';
import { useRouter } from "next/router";
const LoginHeader = () => {
  const router = useRouter()
  const [activeLink,setActiveLink] = useState('dashboard');
  const menu = (
    <Menu>
      <Menu.Item key="profile" onClick={() => router.push("/biodata/1/edit")}>
        Profile
      </Menu.Item>
      <Menu.Item key="profile" onClick={() => router.push("/change-password")}>
        Change Password
      </Menu.Item>
      <Menu.Item key="profile" onClick={() => router.push("/")}>
       Logout
      </Menu.Item>
    </Menu>
  );
  const menuLinks = [
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Profiles",
      link: "/dashboard/profiles",
    },
    {
      title: "Partner Preferences",
      link: "/partner-preferences",
    },
    {
      title: "Search & Match",
      link: "/match",
    },
    {
      title: "Recommendation",
      link: "/dashboard/recomendition",
    },
    {
      title: "Reviews",
      link: "/reviews",
    },
  ];
  return (
    <div className="bg-[#1E2C0E] py-4">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div>
        <a href="/"> <img src="/assets/LogoHome.png" alt="" className="cursor-pointer"/></a>
        </div>
        <div>
          <ul className="flex gap-10">
            {menuLinks.map((e, i) => {
              return (
                <li className={`text-white`}>
                  <a href={e.link}>{e.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-4 items-center">
            <a href="/dashboard/plans" className="underline text-[#FFB000]">Upgrade Now</a>
            <Badge count={2} size="small">
                <FaBell className="text-white" size={18}/>
            </Badge>
            <div className="cursor-pointer">
              <img src="/assets/profiles/vishal.png" width={38} className="border-white border-solid border-[2px] rounded-full" alt="" />
            </div>
          <Dropdown overlay={menu} placement="bottomRight">
            <FaAngleDown className="text-white cursor-pointer"/>
          </Dropdown>

        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
