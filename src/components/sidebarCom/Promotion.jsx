// import { useState, useRef, useEffect } from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
// import { BsImageAlt } from "react-icons/bs";
// import { GoGift } from "react-icons/go";
// import { IoIosNotifications } from "react-icons/io";
// import { PiTelevision } from "react-icons/pi";
// import { RiCheckboxMultipleBlankLine } from "react-icons/ri";

// const Promotion = ({ collapsed }) => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [hoveredSection, setHoveredSection] = useState(null);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

//   const campaignsRef = useRef(null);
//   const adsRef = useRef(null);

//   const toggleDropdown = (section) => {
//     setActiveDropdown((prev) => (prev === section ? null : section));
//   };

//   const updateDropdownPosition = (ref) => {
//     if (collapsed && ref?.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setDropdownPosition({
//         top: rect.top + rect.height / 2 - 20,
//         left: rect.right + 20,
//       });
//     }
//   };

//   useEffect(() => {
//     if (hoveredSection === "campaigns") updateDropdownPosition(campaignsRef);
//     else if (hoveredSection === "advertisement") updateDropdownPosition(adsRef);
//   }, [hoveredSection, collapsed]);

//   const handleMouseEnter = (section) => setHoveredSection(section);
//   const handleMouseLeave = () => setHoveredSection(null);

//   return (
//     <div className="overflow-visible px-4">
//       {!collapsed ? (
//         <h1 className="text-xs text-gray-400 font-semibold mb-2 mt-4">
//           PROMOTION MANAGEMENT
//         </h1>
//       ) : (
//         <BsThreeDots className="text-gray-400 text-lg" />
//       )}

//       <ul className="space-y-2 relative">
//         {/* Campaigns */}
//         <li
//           className="relative mt-4"
//           onMouseEnter={() => handleMouseEnter("campaigns")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             onClick={() => toggleDropdown("campaigns")}
//             ref={campaignsRef}
//             className="flex items-center cursor-pointer text-sm font-medium text-white"
//           >
//             {collapsed && hoveredSection === "campaigns" && (
//               <span className="w-2 h-2 bg-white rounded-full mr-2 ml-[-4px]"></span>
//             )}
//             <div className="flex items-center gap-2">
//               <RiCheckboxMultipleBlankLine />
//               <div className="w-40 flex justify-between items-center">
//                 {!collapsed && "Campaigns"}
//                 {!collapsed && (
//                   <MdOutlineKeyboardArrowDown
//                     className={`transition-transform duration-300 ${
//                       activeDropdown === "campaigns" ? "rotate-180" : "rotate-0"
//                     }`}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>

//           {collapsed && (
//             <div className="absolute top-0 left-full w-[60px] h-full bg-transparent z-40" />
//           )}

//           {!collapsed && activeDropdown === "campaigns" && (
//             <ul className="ml-6 list-disc pl-4 text-xs text-white space-y-2">
//               <li className="mt-2">Basic Campaigns</li>
//               <li className="mt-2">Item Campaigns</li>
//             </ul>
//           )}

//           {collapsed && hoveredSection === "campaigns" && (
//             <ul
//               className="absolute bg-[#005555] shadow-lg rounded-md p-2 list-disc pl-6 text-xs text-white z-[9999] space-y-2"
//               style={{
//                 position: "fixed",
//                 top: `${dropdownPosition.top}px`,
//                 left: `${dropdownPosition.left}px`,
//                 width: "180px",
//               }}
//             >
//               <li className="mt-2">Basic Campaigns</li>
//               <li className="mt-2">Item Campaigns</li>
//             </ul>
//           )}
//         </li>

//         {/* Banners */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <BsImageAlt />
//           {!collapsed && "Banners"}
//         </li>

//         {/* Other Banners */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <BsImageAlt />
//           {!collapsed && "Other Banners"}
//         </li>

//         {/* Coupons */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <GoGift />
//           {!collapsed && "Coupons"}
//         </li>

//         {/* Push Notification */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <IoIosNotifications />
//           {!collapsed && "Push Notification"}
//         </li>

//         {/* Advertisement */}
//         <li
//           className="relative mt-4"
//           onMouseEnter={() => handleMouseEnter("advertisement")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             onClick={() => toggleDropdown("advertisement")}
//             ref={adsRef}
//             className="flex items-center cursor-pointer text-sm font-medium text-white"
//           >
//             {collapsed && hoveredSection === "advertisement" && (
//               <span className="w-2 h-2 bg-white rounded-full mr-2 ml-[-4px]"></span>
//             )}
//             <div className="flex items-center gap-2">
//               <PiTelevision />
//               <div className="w-40 flex justify-between items-center">
//                 {!collapsed && "Advertisement"}
//                 {!collapsed && (
//                   <MdOutlineKeyboardArrowDown
//                     className={`transition-transform duration-300 ${
//                       activeDropdown === "advertisement"
//                         ? "rotate-180"
//                         : "rotate-0"
//                     }`}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>

//           {collapsed && (
//             <div className="absolute top-0 left-full w-[60px] h-full bg-transparent z-40" />
//           )}

//           {!collapsed && activeDropdown === "advertisement" && (
//             <ul className="ml-6 list-disc pl-4 text-xs text-white space-y-2">
//               <li className="mt-2">New Advertisement</li>
//               <li className="mt-2">Ad Request</li>
//               <li className="mt-2">Ads List</li>
//             </ul>
//           )}

//           {collapsed && hoveredSection === "advertisement" && (
//             <ul
//               className="absolute bg-[#005555] shadow-lg rounded-md p-2 list-disc pl-6 text-xs text-white z-[9999] space-y-2"
//               style={{
//                 position: "fixed",
//                 top: `${dropdownPosition.top}px`,
//                 left: `${dropdownPosition.left}px`,
//                 width: "180px",
//               }}
//             >
//               <li className="mt-2">New Advertisement</li>
//               <li className="mt-2">Ad Request</li>
//               <li className="mt-2">Ads List</li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Promotion;
import { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsThreeDots, BsImageAlt } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";
import { PiTelevision } from "react-icons/pi";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";

const DROPDOWN_WIDTH = 180;

const dropdownItems = {
  campaigns: ["Basic Campaigns", "Item Campaigns"],
  advertisement: ["New Advertisement", "Ad Request", "Ads List"],
};

const DropdownList = ({ items, style }) => (
  <ul
    className="absolute bg-[#005555] shadow-lg rounded-md p-2 list-disc pl-6 text-xs text-white z-[9999] space-y-2"
    style={style}
  >
    {items.map((item) => (
      <li
        key={item}
        className="mt-2 cursor-pointer hover:text-green-400 transition-colors duration-200"
      >
        {item}
      </li>
    ))}
  </ul>
);

const ExpandedDropdown = ({ items }) => (
  <ul className="ml-6 list-disc pl-4 text-xs text-white space-y-2">
    {items.map((item) => (
      <li
        key={item}
        className="mt-2 cursor-pointer hover:text-green-400 transition-colors duration-200"
      >
        {item}
      </li>
    ))}
  </ul>
);

const MenuItem = ({
  section,
  Icon,
  activeDropdown,
  toggleDropdown,
  hoveredSection,
  handleMouseEnter,
  handleMouseLeave,
  dropdownPosition,
  collapsed,
  refProp,
}) => {
  const isActive = activeDropdown === section;
  const label = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <li
      className="relative mt-4 group"
      onMouseEnter={() => handleMouseEnter(section)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={() => toggleDropdown(section)}
        ref={refProp}
        className="flex items-center cursor-pointer text-sm font-medium text-white"
      >
        {collapsed && hoveredSection === section && (
          <span className="w-2 h-2 bg-white rounded-full mr-2 ml-[-4px]" />
        )}
        <div className="flex items-center gap-2">
          <Icon />
          <div className="w-40 flex justify-between items-center">
            {!collapsed && (
              <span
                className={`transition-colors duration-200 ${
                  isActive ? "text-white" : "group-hover:text-green-400"
                }`}
              >
                {label}
              </span>
            )}
            {!collapsed && (
              <MdOutlineKeyboardArrowDown
                className={`transition-transform duration-300 text-white ${
                  isActive ? "rotate-180" : "rotate-0"
                }`}
              />
            )}
          </div>
        </div>
      </div>

      {collapsed && (
        <div className="absolute top-0 left-full w-[60px] h-full bg-transparent z-40" />
      )}

      {!collapsed && isActive && (
        <ExpandedDropdown items={dropdownItems[section]} />
      )}

      {collapsed && hoveredSection === section && (
        <DropdownList
          items={dropdownItems[section]}
          style={{
            position: "fixed",
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            width: `${DROPDOWN_WIDTH}px`,
          }}
        />
      )}
    </li>
  );
};

const SimpleItem = ({ Icon, label, collapsed }) => (
  <li className="flex items-center gap-2 text-sm font-medium text-white mt-4 group cursor-pointer">
    <Icon />
    <span className="group-hover:text-green-400 transition-colors duration-200">
      {!collapsed && label}
    </span>
  </li>
);

const Promotion = ({ collapsed }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const campaignsRef = useRef(null);
  const adsRef = useRef(null);

  const toggleDropdown = (section) => {
    setActiveDropdown((prev) => (prev === section ? null : section));
  };

  const updateDropdownPosition = (ref) => {
    if (collapsed && ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.top + rect.height / 2 - 20,
        left: rect.right + 20,
      });
    }
  };

  useEffect(() => {
    if (hoveredSection === "campaigns") updateDropdownPosition(campaignsRef);
    else if (hoveredSection === "advertisement") updateDropdownPosition(adsRef);
  }, [hoveredSection, collapsed]);

  const handleMouseEnter = (section) => setHoveredSection(section);
  const handleMouseLeave = () => setHoveredSection(null);

  return (
    <div className="overflow-visible px-4">
      {!collapsed ? (
        <h1 className="text-xs text-gray-400 font-semibold mb-2 mt-4">
          PROMOTION MANAGEMENT
        </h1>
      ) : (
        <BsThreeDots className="text-gray-400 text-lg" />
      )}

      <ul className="space-y-2 relative">
        <MenuItem
          section="campaigns"
          Icon={RiCheckboxMultipleBlankLine}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          hoveredSection={hoveredSection}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          dropdownPosition={dropdownPosition}
          collapsed={collapsed}
          refProp={campaignsRef}
        />

        <SimpleItem Icon={BsImageAlt} label="Banners" collapsed={collapsed} />

        <SimpleItem
          Icon={BsImageAlt}
          label="Other Banners"
          collapsed={collapsed}
        />

        <SimpleItem Icon={GoGift} label="Coupons" collapsed={collapsed} />

        <SimpleItem
          Icon={IoIosNotifications}
          label="Push Notification"
          collapsed={collapsed}
        />

        <MenuItem
          section="advertisement"
          Icon={PiTelevision}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          hoveredSection={hoveredSection}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          dropdownPosition={dropdownPosition}
          collapsed={collapsed}
          refProp={adsRef}
        />
      </ul>
    </div>
  );
};

export default Promotion;
