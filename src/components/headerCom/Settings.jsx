import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import settings from "../../assets/header/setting-icon.svg";
import module from "../../assets/header/settings/module.svg";
import social from "../../assets/header/settings/social.svg";
import location from "../../assets/header/settings/location.svg";
import business from "../../assets/header/settings/business.svg";
import thirdParty from "../../assets/header/settings/third-party.svg";

const Settings = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(true)}
      onMouseLeave={() => setOpenDropdown(false)}
    >
      {/* Trigger */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img src={settings} alt="settings" className="h-6 w-6 object-contain" />
        <p>Settings</p>
        <MdOutlineKeyboardArrowDown />
      </div>

      {/* Invisible bridge to prevent hover loss */}
      <div className="absolute top-full left-0 w-full h-8"></div>

      {/* Dropdown */}
      {openDropdown && (
        // <div className="absolute top-full mt-8 right-[-4] bg-white shadow-lg p-2 rounded z-50 w-100">
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 shadow-lg rounded z-50 w-80 ">
          <div
            className=" p-4 bg-[rgb(0,97,97)] text-white
 rounded-t"
          >
            <h1 className="text-2xl font-bold mb-2">Settings</h1>
            <p className="text-sm">
              Monition your business general settings from here
            </p>
          </div>
          <ul className="p-4 space-y-4 bg-white">
            <li className="flex gap-2">
              <img src={location} alt="" />
              System Module Setup
            </li>
            <li className="flex gap-2">
              <img src={module} alt="" />
              Zone Setup
            </li>
            <li className="flex gap-2">
              <img src={business} alt="" />
              Business Settings
            </li>
            <li className="flex gap-2">
              <img src={thirdParty} alt="" />
              3rd Party
            </li>
            <li className="flex gap-2">
              <img src={social} alt="" />
              Social Media and Page Setup
            </li>
          </ul>
          <h1 className="text-center text-2xl p-4">View All</h1>
        </div>
      )}
    </div>
  );
};

export default Settings;
