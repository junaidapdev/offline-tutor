// import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

// const Header = () => {
//   return (
//     <div className="flex flex-col container">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           {/* <GraduationCapIcon className="h-6 w-6" /> */}
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
//             <path d="M22 10v6" />
//             <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
//           </svg>
//           <span className="pl-2 uppercase">Offline Tutor</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             Find Tutors
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             Pricing
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             About
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             Contact
//           </Link>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;

'use client'


// import { useState } from "react";
// import Link from "next/link";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="container mx-auto flex flex-col">
//       <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
//         <Link className="flex items-center justify-center" href="#">
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
//             <path d="M22 10v6" />
//             <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
//           </svg>
//           <span className="pl-2 uppercase">Offline Tutor</span>
//         </Link>
//         <button
//           className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600"
//           onClick={toggleMobileMenu}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
//           </svg>
//         </button>
//         <nav
//           className={`${
//             isMobileMenuOpen ? "block" : "hidden"
//           } lg:flex lg:items-center lg:gap-6 mt-4 lg:mt-0`}
//         >
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block"
//             href="#"
//           >
//             Find Tutors
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block"
//             href="#"
//           >
//             Pricing
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block"
//             href="#"
//           >
//             About
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block"
//             href="#"
//           >
//             Contact
//           </Link>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container mx-auto flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between relative ">
        <Link className="flex items-center justify-center" href="#">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
          </svg>
          <span className="pl-2 uppercase text-white">Offline Tutor</span>
        </Link>
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-white border-gray-600 absolute right-4"
          onClick={toggleMobileMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-6 absolute  right-4 lg:relative top-14 lg:top-0 bg-white lg:bg-transparent w-full lg:w-auto p-4 lg:p-0`}
        >
          <Link
            className="text-white text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0"
            href="#"
          >
            Find Tutors
          </Link>
          <Link
            className="text-white text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-white text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0"
            href="#"
          >
            About
          </Link>
          <Link
            className=" text-white text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
