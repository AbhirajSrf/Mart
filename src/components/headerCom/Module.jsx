// export default Module;
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiPlus } from "react-icons/hi";

import moduleIcon from "../../assets/header/module-icon.svg";
import pharmacy from "../../assets/header/modules/pharmacy.png";
import food from "../../assets/header/modules/food.png";
import grocery from "../../assets/header/modules/grocery.png";
import parcel from "../../assets/header/modules/parcel.png";
import rental from "../../assets/header/modules/rental.png";
import shop from "../../assets/header/modules/shop.png";

const modules = [
  { name: "Grocery", icon: grocery },
  { name: "Shop", icon: shop },
  { name: "Pharmacy", icon: pharmacy },
  { name: "Rental", icon: rental },
  { name: "Food", icon: food },
  { name: "Parcel", icon: parcel },
];

const Module = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(true)}
      onMouseLeave={() => setOpenDropdown(false)}
    >
      <div className="flex justify-center items-center p-4 w-40 text-white cursor-pointer gap-2">
        <img src={moduleIcon} alt="Module" />
        Module <MdOutlineKeyboardArrowDown />
      </div>

      <div className="absolute top-full left-0 w-full h-8" />

      {openDropdown && (
        <div className="absolute top-full right-4 mt-8 shadow-lg rounded z-50 w-100 border border-blue-300 bg-white">
          <div className="p-5 rounded-t">
            <h1 className="text-xl font-semibold mb-2">Modules Section</h1>
            <p className="text-sm text-blue-400">
              Select Module & Monitor <br />
              your business module wise
            </p>
          </div>

          <ul className="grid grid-cols-3 gap-4 p-4">
            {modules.map((module, index) => (
              <li
                key={index}
                className="flex flex-col items-center border border-blue-300 p-4 rounded"
              >
                <img
                  src={module.icon}
                  alt={module.name}
                  className="h-10 w-10 mb-2"
                />
                <span>{module.name}</span>
              </li>
            ))}
            <li className="flex flex-col items-center border border-blue-300 p-4 rounded">
              <HiPlus className="text-6xl text-blue-400" />
              <span className="text-sm mt-2">Add Module</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Module;
