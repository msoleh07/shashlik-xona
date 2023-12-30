import { IoHomeOutline } from "react-icons/io5";
import { IoInformationOutline } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";

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
];

const menuDataId = (id) => {
  return id?.map((i, index) => (i ? { ...i, id: index } : i));
};

const menu = menuDataId(menuData);

export default menu;
