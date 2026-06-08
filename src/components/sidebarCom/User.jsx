// import { useState, useRef, useEffect } from "react";
// import { FaRegUserCircle } from "react-icons/fa";

// const User = () => {
//   const [isOpen, setIsopen] = useState(false);
//   const dropdownRef = useRef(null);
//   const userBoxRef = useRef(null);

//   const toggleDropdown = () => setIsopen(!isOpen);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         !userBoxRef.current.contains(event.target)
//       ) {
//         setIsopen(false); // Close dropdown if clicked outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener
//     };
//   }, []);

//   return (
//     <div className="relative mt-20">
//       {/* Dropdown above */}
//       {isOpen && (
//         <div
//           ref={dropdownRef}
//           className="absolute bottom-full mb-2 left-0 bg-white shadow-md rounded-xl w-full z-50"
//         >
//           <div className="flex items-center pl-4 p-2 py-4">
//             <FaRegUserCircle className="text-2xl bg-white rounded-full" />
//             <div className="ml-4 text-sm ">
//               <h1 className="font-bold">Jhon Doe</h1>
//               <p className="text-sm">a*******@admin.com</p>
//             </div>
//           </div>
//           <ul className="text-gray-700 text-sm cursor-pointer">
//             <li className="border-y border-gray-300 pl-4 p-2">Settings</li>
//             <li className="pl-4 p-2">Sign out</li>
//           </ul>
//         </div>
//       )}

//       {/* Main user box */}
//       <div
//         ref={userBoxRef}
//         className="flex justify-between items-center p-2 rounded cursor-pointer bg-teal-500"
//         onClick={toggleDropdown}
//       >
//         <FaRegUserCircle className="text-2xl bg-white rounded-full" />
//         <div className="ml-4 text-sm text-white">
//           <h1 className="font-bold">Jhon Doe</h1>
//           <p className="text-sm">a*******@admin.com</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaRegUserCircle } from "react-icons/fa"; // Import the icon

// Avatar component for user image or fallback
const Avatar = ({ children, className }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>
);

// Avatar image component
const AvatarImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full object-cover"
    onError={(e) => {
      e.target.style.display = "none";
    }}
  />
);

// Avatar fallback component (when image is not available)
const AvatarFallback = ({ children, className }) => (
  <div
    className={`flex items-center justify-center w-full h-full font-bold text-sm ${className}`}
  >
    {children}
  </div>
);

// Card component for wrapping content
const Card = ({ children, className }) => (
  <div className={`rounded text-black ${className}`}>{children}</div>
);

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Toggling the dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // User image or fallback
  const userImage = "/placeholder.svg?height=40&width=40"; // Replace with actual user image URL if available
  const fallbackImage = "JD"; // Fallback text for user

  return (
    <div className="max-w-md mx-auto relative" ref={containerRef}>
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 w-52 bg-white shadow-md rounded-xl z-50">
          {/* <div className="flex items-center pl-4 py-4">
            <FaRegUserCircle className="text-2xl bg-white rounded-full" />
            <div className="ml-4 text-sm">
              <h1 className="font-bold">Jhon Doe</h1>
              <p className="text-sm">a*******@admin.com</p>
            </div>
          </div> */}
          <Card className=" p-3 flex items-center justify-between">
            <div className="flex items-center gap-3" onClick={toggleDropdown}>
              <Avatar className="h-10 w-10 border-2 border-white/20">
                <AvatarImage src={userImage} alt="User avatar" />
                <AvatarFallback className="bg-orange-500 text-white">
                  {fallbackImage}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Jhon Ffsfge</p>
                <p className="text-sm ">a*******@admin.com</p>
              </div>
            </div>
          </Card>
          <ul className="text-gray-700 text-sm cursor-pointer">
            <li className="border-y border-gray-300 pl-4 py-2 hover:bg-gray-100 transition">
              Settings
            </li>
            <li className="pl-4 py-2 hover:bg-gray-100 transition rounded-xl">
              Sign out
            </li>
          </ul>
        </div>
      )}

      {/* Main user box */}

      <Card className="bg-teal-600 text-white p-3 flex items-center justify-between">
        <div className="flex items-center gap-3" onClick={toggleDropdown}>
          <Avatar className="h-10 w-10 border-2 border-white/20">
            <AvatarImage src={userImage} alt="User avatar" />
            <AvatarFallback className="bg-orange-500 text-white">
              {fallbackImage}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Jhon Ffsfge</p>
            <p className="text-sm text-teal-100">a*******@admin.com</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
