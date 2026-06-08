import { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDots, BsGrid3X3GapFill } from "react-icons/bs";
import { PiNewspaperClipping } from "react-icons/pi";

const DROPDOWN_WIDTH = 180;
const DROPDOWN_OFFSET = 50;

const DropdownList = ({ items, style }) => (
  <ul
    className="absolute shadow-lg rounded-md p-2 list-disc pl-6 text-xs text-white z-[9999] space-y-2"
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
  <ul className="ml-6 list-disc pl-4 text-xs text-white space-y-2 p-2 rounded-md">
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
  items,
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
  const label =
    section === "orders"
      ? "Orders"
      : section === "refunds"
      ? "Order Refunds"
      : section;

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

      {!collapsed && isActive && <ExpandedDropdown items={items} />}

      {collapsed && hoveredSection === section && (
        <>
          {/* 🔧 Hover Bridge now visible (black background) */}
          <div
            className="fixed z-[9998] h-8 "
            style={{
              top: `${dropdownPosition.top + 8}px`,
              left: `${dropdownPosition.left - DROPDOWN_OFFSET}px`,
              width: `${DROPDOWN_OFFSET}px`,
            }}
          />

          <DropdownList
            items={items}
            style={{
              position: "fixed",
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: `${DROPDOWN_WIDTH}px`,
            }}
          />
        </>
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

const Order = ({ collapsed }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const ordersRef = useRef(null);
  const refundsRef = useRef(null);

  const toggleDropdown = (section) => {
    setActiveDropdown((prev) => (prev === section ? null : section));
  };

  const updateDropdownPosition = (ref) => {
    if (collapsed && ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.top + rect.height / 2 - 20,
        left: rect.right + DROPDOWN_OFFSET,
      });
    }
  };

  useEffect(() => {
    if (hoveredSection === "orders") updateDropdownPosition(ordersRef);
    else if (hoveredSection === "refunds") updateDropdownPosition(refundsRef);
  }, [hoveredSection, collapsed]);

  const handleMouseEnter = (section) => setHoveredSection(section);
  const handleMouseLeave = () => setHoveredSection(null);

  const orderItems = ["All", "Scheduled", "Pending", "Accepted"];
  const refundItems = ["Refund Requests"];

  return (
    <div className="overflow-visible px-4">
      {!collapsed ? (
        <h1 className="text-xs text-gray-400 font-semibold mb-2 mt-4">
          ORDER MANAGEMENT
        </h1>
      ) : (
        <BsThreeDots className="text-gray-400 text-lg" />
      )}

      <ul className="space-y-2 relative">
        <MenuItem
          section="orders"
          Icon={FaShoppingCart}
          items={orderItems}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          hoveredSection={hoveredSection}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          dropdownPosition={dropdownPosition}
          collapsed={collapsed}
          refProp={ordersRef}
        />

        <MenuItem
          section="refunds"
          Icon={PiNewspaperClipping}
          items={refundItems}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          hoveredSection={hoveredSection}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          dropdownPosition={dropdownPosition}
          collapsed={collapsed}
          refProp={refundsRef}
        />

        <SimpleItem
          Icon={BsGrid3X3GapFill}
          label="Flash Sales"
          collapsed={collapsed}
        />
      </ul>
    </div>
  );
};

export default Order;
