// import { useState, useRef, useEffect } from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
// import { RiVipDiamondLine } from "react-icons/ri";
// import { MdCategory } from "react-icons/md";
// import { PiRulerBold } from "react-icons/pi";
// import { BsGrid3X3GapFill } from "react-icons/bs";

// const Product = ({ collapsed }) => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [hoveredSection, setHoveredSection] = useState(null);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

//   const categoriesRef = useRef(null);
//   const productRef = useRef(null);

//   const categoriesItems = [
//     "Category",
//     "Sub Category",
//     "Bulk Import",
//     "Bulk Export",
//   ];
//   const productItems = [
//     "Add New",
//     "List",
//     "Low Stock List",
//     "Product Gallery",
//     "New Item Request",
//     "Review",
//     "Bulk Import",
//     "Bulk Export",
//   ];

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
//     if (hoveredSection === "categories") updateDropdownPosition(categoriesRef);
//     else if (hoveredSection === "product") updateDropdownPosition(productRef);
//   }, [hoveredSection, collapsed]);

//   const handleMouseEnter = (section) => setHoveredSection(section);
//   const handleMouseLeave = () => setHoveredSection(null);

//   return (
//     <div className="overflow-visible px-4">
//       {!collapsed ? (
//         <h1 className="text-xs text-gray-400 font-semibold mb-2 mt-4">
//           PRODUCT MANAGEMENT
//         </h1>
//       ) : (
//         <BsThreeDots className="text-lg text-gray-400 mb-2 mt-4" />
//       )}

//       <ul className="space-y-2 relative">
//         {/* Categories */}
//         <li
//           className="relative mt-4"
//           onMouseEnter={() => handleMouseEnter("categories")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             onClick={() => toggleDropdown("categories")}
//             ref={categoriesRef}
//             className="flex items-center cursor-pointer text-white text-sm font-medium"
//           >
//             {collapsed && hoveredSection === "categories" && (
//               <span className="w-2 h-2 bg-white rounded-full mr-2 ml-[-4px]"></span>
//             )}
//             <div className="flex items-center gap-2">
//               <MdCategory />
//               <div className="w-40 flex justify-between items-center">
//                 {!collapsed && "Categories"}
//                 {!collapsed && (
//                   <MdOutlineKeyboardArrowDown
//                     className={`ml-auto transition-transform duration-300 ${
//                       activeDropdown === "categories"
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

//           {!collapsed && activeDropdown === "categories" && (
//             <ul className="ml-6 list-disc pl-4 text-xs text-white space-y-2">
//               {categoriesItems.map((item, idx) => (
//                 <li key={idx} className="mt-2">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           )}

//           {collapsed && hoveredSection === "categories" && (
//             <>
//               <div
//                 className="absolute z-50"
//                 style={{
//                   top: `${categoriesRef.current?.offsetTop ?? 0}px`,
//                   left: "100%",
//                   width: "40px",
//                   height: "150px",
//                   backgroundColor: "black",
//                 }}
//               />
//               <ul
//                 className="absolute shadow-lg rounded-md p-2 list-disc pl-6 text-xs text-white z-[9999] space-y-2"
//                 style={{
//                   position: "fixed",
//                   top: `${dropdownPosition.top}px`,
//                   left: `${dropdownPosition.left}px`,
//                   width: "180px",
//                   backgroundColor: "#005555",
//                 }}
//               >
//                 {categoriesItems.map((item, idx) => (
//                   <li key={idx} className="mt-2">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </li>

//         {/* Attributes */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <BsGrid3X3GapFill />
//           {!collapsed && "Attributes"}
//         </li>

//         {/* Units */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <PiRulerBold />
//           {!collapsed && "Units"}
//         </li>

//         {/* Product Setup */}
//         <li
//           className="relative mt-4"
//           onMouseEnter={() => handleMouseEnter("product")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div
//             onClick={() => toggleDropdown("product")}
//             ref={productRef}
//             className="flex items-center cursor-pointer text-white text-sm font-medium"
//           >
//             {collapsed && hoveredSection === "product" && (
//               <span className="w-2 h-2 bg-white rounded-full mr-2 ml-[-4px]"></span>
//             )}
//             <div className="flex items-center gap-2">
//               <RiVipDiamondLine />
//               <div className="w-40 flex justify-between items-center">
//                 {!collapsed && "Product Setup"}
//                 {!collapsed && (
//                   <MdOutlineKeyboardArrowDown
//                     className={`ml-auto transition-transform duration-300 ${
//                       activeDropdown === "product" ? "rotate-180" : "rotate-0"
//                     }`}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>

//           {collapsed && (
//             <div className="absolute top-0 left-full w-[60px] h-full bg-transparent z-40" />
//           )}

//           {!collapsed && activeDropdown === "product" && (
//             <ul className="ml-6 list-disc pl-4 text-xs text-white space-y-2">
//               {productItems.map((item, idx) => (
//                 <li key={idx} className="mt-2">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           )}

//           {collapsed && hoveredSection === "product" && (
//             <>
//               <div
//                 className="absolute z-50"
//                 style={{
//                   top: `${productRef.current?.offsetTop ?? 0}px`,
//                   left: "100%",
//                   width: "40px",
//                   height: "180px",
//                   backgroundColor: "black",
//                 }}
//               />
//               <ul
//                 className="absolute shadow-lg rounded-md p-2 list-disc pl-6 text-xs text-white z-[9999] space-y-2"
//                 style={{
//                   position: "fixed",
//                   top: `${dropdownPosition.top}px`,
//                   left: `${dropdownPosition.left}px`,
//                   width: "180px",
//                   backgroundColor: "#005555",
//                 }}
//               >
//                 {productItems.map((item, idx) => (
//                   <li key={idx} className="mt-2">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Product;
import { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown, MdCategory } from "react-icons/md";
import { BsThreeDots, BsGrid3X3GapFill } from "react-icons/bs";
import { RiVipDiamondLine } from "react-icons/ri";
import { PiRulerBold } from "react-icons/pi";

const DROPDOWN_WIDTH = 180;

const dropdownItems = {
  categories: ["Category", "Sub Category", "Bulk Import", "Bulk Export"],
  product: [
    "Add New",
    "List",
    "Low Stock List",
    "Product Gallery",
    "New Item Request",
    "Review",
    "Bulk Import",
    "Bulk Export",
  ],
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
  label,
}) => {
  const isActive = activeDropdown === section;

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

const Product = ({ collapsed }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const categoriesRef = useRef(null);
  const productRef = useRef(null);

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
    if (hoveredSection === "categories") updateDropdownPosition(categoriesRef);
    else if (hoveredSection === "product") updateDropdownPosition(productRef);
  }, [hoveredSection, collapsed]);

  const handleMouseEnter = (section) => setHoveredSection(section);
  const handleMouseLeave = () => setHoveredSection(null);

  return (
    <div className="overflow-visible px-4">
      {!collapsed ? (
        <h1 className="text-xs text-gray-400 font-semibold mb-2 mt-4">
          PRODUCT MANAGEMENT
        </h1>
      ) : (
        <BsThreeDots className="text-gray-400 text-lg" />
      )}

      <ul className="space-y-2 relative">
        <MenuItem
          section="categories"
          Icon={MdCategory}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          hoveredSection={hoveredSection}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          dropdownPosition={dropdownPosition}
          collapsed={collapsed}
          refProp={categoriesRef}
          label="Categories"
        />

        <SimpleItem
          Icon={BsGrid3X3GapFill}
          label="Attributes"
          collapsed={collapsed}
        />
        <SimpleItem Icon={PiRulerBold} label="Units" collapsed={collapsed} />

        <MenuItem
          section="product"
          Icon={RiVipDiamondLine}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          hoveredSection={hoveredSection}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          dropdownPosition={dropdownPosition}
          collapsed={collapsed}
          refProp={productRef}
          label="Product Setup"
        />
      </ul>
    </div>
  );
};

export default Product;
