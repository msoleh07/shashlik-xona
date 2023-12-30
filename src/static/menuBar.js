import { IoHomeOutline } from "react-icons/io5";
import { IoInformationOutline } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";

const menuData = [
  {
    icon: <IoHomeOutline />,
    title: "Bosh sahifaga o'tish",
    link: "/",
  },
  {
    icon: <IoInformationOutline />,
    title: "Biz haqimizda",
    link: "/about",
  },
  {
    icon: <LuClipboardEdit />,
    title: "Zakaz berish",
    link: "/board",
  },
  {
    icon: <PiShoppingCartLight />,
    title: "Sotib olingan mahsulotlar",
    link: "/cart",
  },
  {
    icon: <MdOutlineMessage />,
    title: "Xabarlar",
    link: "/message",
  },
  {
    icon: <IoSettingsOutline />,
    title: "Sozlamalar",
    link: "/settings",
  },
];

const menuDataId = (id) => {
  return id?.map((i, index) => (i ? { ...i, id: index } : i));
};

const menu = menuDataId(menuData);

export default menu;
