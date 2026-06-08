import logo from "../assets/logo.png";
import { TbArrowBarRight, TbArrowBarLeft } from "react-icons/tb"; // Import both icons
import Order from "./sidebarCom/Order";
import Promotion from "./sidebarCom/Promotion";
import Product from "./sidebarCom/Product";
import Store from "./sidebarCom/Store";
import User from "./sidebarCom/User";
import Search from "./sidebarCom/sidebarSearch";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const background = {
    backgroundColor: "#005555",
  };

  return (
    <nav
      style={background}
      className={`fixed top-0 left-0 h-full ${
        collapsed ? "w-20" : "w-60"
      } z-50 flex flex-col transition-all duration-300`}
    >
      {/* Top bar */}
      <div className="flex justify-center items-center bg-white p-2 h-14 shadow-xl">
        {!collapsed && (
          <img src={logo} alt="logo" className="h-10 w-5/6 object-contain" />
        )}
        {collapsed ? (
          <TbArrowBarRight
            className="text-2xl cursor-pointer transition-transform duration-300 "
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <TbArrowBarLeft
            className="text-2xl cursor-pointer transition-transform duration-300"
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
      </div>

      {!collapsed && <Search />}
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin relative ">
        <div className="space-y-10 p-2">
          <Order collapsed={collapsed} />
          <Promotion collapsed={collapsed} />
          <Product collapsed={collapsed} />
          <Store collapsed={collapsed} />

          {!collapsed && <User />}
        </div>
      </div>

      {/* Scrollbar styles */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
        }
      `}</style>
    </nav>
  );
};

export default Sidebar;
