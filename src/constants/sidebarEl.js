import { CgComponents } from "react-icons/cg"; 
import { FaMoneyBill } from "react-icons/fa"; 
import { IoMdApps } from "react-icons/io"; 
import { HiUserGroup } from "react-icons/hi"; 
import { BiCategory } from "react-icons/bi"; 
const dataSidebarEl = [
    {
        id: 1,
        icon: IoMdApps,
        title: "Продукты",
    },
    {
        id: 2,
        icon: HiUserGroup,
        title: "Пользователи",
    },
    {
        id: 3,
        icon: BiCategory,
        title: "Категории",
    },
    {
        id: 4,
        icon: FaMoneyBill,
        title: "Покупки",
    },
    {
        id: 5,
        icon: CgComponents,
        title: "Компании",
    },

];

export default dataSidebarEl;
