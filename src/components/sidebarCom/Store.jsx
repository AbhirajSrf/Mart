// import { FaShoppingCart } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";
// import { FaMagnifyingGlassPlus } from "react-icons/fa6";
// import { HiMiniFire } from "react-icons/hi2";
// import { PiArrowFatLineUpFill } from "react-icons/pi";
// import { PiArrowFatLineDownFill } from "react-icons/pi";
// import { GrScheduleNew } from "react-icons/gr";
// import { BsGrid1X2 } from "react-icons/bs";

// const Store = ({ collapsed }) => {
//   return (
//     <div className="overflow-visible px-4">
//       {/* Store Management Header */}
//       {!collapsed ? (
//         <h1 className="text-xs text-gray-400 font-semibold mb-2 mt-4">
//           STORE MANAGEMENT
//         </h1>
//       ) : (
//         <BsThreeDots className=" text-gray-400 text-lg" />
//       )}

//       <ul className="space-y-2 relative">
//         {/* New Stores */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <GrScheduleNew />
//           {!collapsed && "New Stores"}
//         </li>

//         {/* Add Store */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <FaMagnifyingGlassPlus />
//           {!collapsed && "Add Store"}
//         </li>

//         {/* Stores List */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <BsGrid1X2 />
//           {!collapsed && "Stores List"}
//         </li>

//         {/* Recommended Store */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <HiMiniFire />
//           {!collapsed && "Recommended Store"}
//         </li>

//         {/* Bulk Import */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <PiArrowFatLineUpFill />
//           {!collapsed && "Bulk Import"}
//         </li>

//         {/* Bulk Export */}
//         <li className="flex items-center gap-2 text-sm font-medium text-white mt-4">
//           <PiArrowFatLineDownFill />
//           {!collapsed && "Bulk Export"}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Store;
import { BsThreeDots, BsGrid1X2 } from "react-icons/bs";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { HiMiniFire } from "react-icons/hi2";
import { PiArrowFatLineUpFill, PiArrowFatLineDownFill } from "react-icons/pi";
import { GrScheduleNew } from "react-icons/gr";

const SimpleItem = ({ Icon, label, collapsed }) => (
  <li className="flex items-center gap-2 text-sm font-medium text-white mt-4 group cursor-pointer">
    <Icon />
    <span className="group-hover:text-green-400 transition-colors duration-200">
      {!collapsed && label}
    </span>
  </li>
);

const Store = ({ collapsed }) => {
  return (
    <div className="overflow-visible px-4">
      {!collapsed ? (
        <h1 className="text-xs text-gray-400 font-semibold mb-2 mt-4">
          STORE MANAGEMENT
        </h1>
      ) : (
        <BsThreeDots className="text-gray-400 text-lg" />
      )}

      <ul className="space-y-2 relative">
        <SimpleItem
          Icon={GrScheduleNew}
          label="New Stores"
          collapsed={collapsed}
        />
        <SimpleItem
          Icon={FaMagnifyingGlassPlus}
          label="Add Store"
          collapsed={collapsed}
        />
        <SimpleItem
          Icon={BsGrid1X2}
          label="Stores List"
          collapsed={collapsed}
        />
        <SimpleItem
          Icon={HiMiniFire}
          label="Recommended Store"
          collapsed={collapsed}
        />
        <SimpleItem
          Icon={PiArrowFatLineUpFill}
          label="Bulk Import"
          collapsed={collapsed}
        />
        <SimpleItem
          Icon={PiArrowFatLineDownFill}
          label="Bulk Export"
          collapsed={collapsed}
        />
      </ul>
    </div>
  );
};

export default Store;
