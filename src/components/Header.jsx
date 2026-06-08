// import { Link } from "react-router-dom";
// import user from "../assets/header/user.svg";
// import transction from "../assets/header/transaction-and-report.svg";
// import dispatch from "../assets/header/dispatch.svg";
// import messageIcon from "../assets/header/message-icon.svg";
// import Settings from "./headerCom/Settings";
// import Module from "./headerCom/Module";
// import Search from "./headerCom/Search";

// const Header = ({ collapsed }) => {
//   return (
//     <div
//       className={`flex justify-between items-center fixed top-0 right-0 z-40 h-14 text-base shadow-xl transition-all duration-300 ${
//         collapsed ? "left-20" : "left-60"
//       }`}
//     >
//       <nav className="flex gap-6 items-center h-full">
//         <Link className="text-sm flex items-center gap-3">
//           <img src={user} alt="user" className="h-6 w-6 object-contain" />
//           Users
//         </Link>

//         <Link className="text-sm flex items-center gap-3">
//           <img
//             src={transction}
//             alt="transaction"
//             className="h-6 w-6 object-contain"
//           />
//           Transaction & Reports
//         </Link>

//         <Link>
//           <Settings />
//         </Link>

//         <Link className="text-sm flex items-center gap-3">
//           <img
//             src={dispatch}
//             alt="dispatch"
//             className="h-6 w-6 object-contain"
//           />
//           Dispatch Management
//         </Link>
//       </nav>

//       <div className="flex gap-2">
//         <Search />
//         <img src={messageIcon} alt="message-icon" />
//         <div className="bg-blue-700 flex-shrink-0">
//           <Module collapsed={collapsed} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import user from "../assets/header/user.svg";
import transction from "../assets/header/transaction-and-report.svg";
import dispatch from "../assets/header/dispatch.svg";
import messageIcon from "../assets/header/message-icon.svg";
import Settings from "./headerCom/Settings";
import Module from "./headerCom/Module";
import Search from "./headerCom/Search";

const Header = ({ collapsed }) => {
  return (
    <div
      className={`flex justify-between items-center fixed top-0 right-0 z-40 h-14 text-base shadow-xl transition-all duration-300 ${
        collapsed ? "left-20" : "left-60"
      }`}
    >
      <nav className="flex gap-6 items-center h-full">
        <Link className="text-sm flex items-center gap-3">
          <img src={user} alt="user" className="h-6 w-6 object-contain" />
          Users
        </Link>

        <Link className="text-sm flex items-center gap-3">
          <img
            src={transction}
            alt="transaction"
            className="h-6 w-6 object-contain"
          />
          Transaction & Reports
        </Link>

        <Link>
          <Settings />
        </Link>

        <Link className="text-sm flex items-center gap-3">
          <img
            src={dispatch}
            alt="dispatch"
            className="h-6 w-6 object-contain"
          />
          Dispatch Management
        </Link>
      </nav>

      <div className="flex gap-2">
        <Search />
        <img src={messageIcon} alt="message-icon" className="w-12 h-12 p-2" />
        <div className="bg-blue-700 flex-shrink-0 h-16 rounded flex items-center px-3">
          <Module collapsed={collapsed} />
        </div>
      </div>
    </div>
  );
};

export default Header;
