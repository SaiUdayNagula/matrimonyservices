import { SwitcherOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useTheme } from "@/utils/ThemeProvider";
import { useLanguage } from "@/utils/LanguageProvider";
import { Divider, Select, Menu, Button } from "antd";
import images from "@/config/images";
import { useAuth } from "@/utils/AuthProvider";
import { FaAddressCard,FaUser } from "react-icons/fa6";
import { useRouter } from "next/router";

const menus = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/aboutus",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Events",
    url: "/events",
  },
  {
    title: "Gallery",
    url: "/gallery",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

const MainHeader = () => {
  const { isLogged, logout } = useAuth();
  const { toggleTheme } = useTheme();
  const router = useRouter()
  const { language, changeLanguage } = useLanguage();

  return (
    <header className="top-0 left-0 right-0 z-50 header-bg w-full py-2">
      <div className="flex items-center justify-between w-[90%] mx-auto py-2">
      <a href="/">  <img className="mr-10 cursor-pointer" src={images.logo} alt="Chaturvarnam" /></a>
       

        <nav className="flex-grow flex items-center justify-between space-x-5">
          <ul className="flex gap-5 items-center space-x-5 !font-[SF UI Display] color">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link href={menu.url} className={router.pathname === menu.url ? "text-[#FFB000]" : ""}>{menu.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center space-x-4">
            {/* Other menu items, if any */}
            {/* <li>
              <button onClick={toggleTheme}>
                <SwitcherOutlined />
              </button>
            </li>
            <Select
              placeholder="Language"
              style={{ width: 60 }}
              options={[
                { label: "EN", value: "english" },
                { label: "BN", value: "bangla" },
              ]}
              onChange={(value) => changeLanguage(value)}
              value={language}
            /> */}
            {isLogged() ? (
              <li>
                <Button onClick={logout}>Logout</Button>
              </li>
            ) : (
              <>
                <li className="text-black bg-white px-3 py-1 rounded">
                  <Link href="/signup" className="flex gap-2 items-center font-size-14"> <FaAddressCard/> Registration</Link>
                </li>
                <li className="bg-[#FFB000] px-4 py-1 rounded ">
                  <Link href="/login" className="flex gap-2 items-center font-size-14"> <FaUser/> Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      {/* <Divider style={{ margin: '0 24px' }} /> */}
    </header>
  );
};

export default MainHeader;
