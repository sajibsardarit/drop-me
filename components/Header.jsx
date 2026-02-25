import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  const headerMenu = [
    {
      id: 1,
      name: "Ride",
      icon: "/taxi.png",
    },
    {
      id: 2,
      name: "Package",
      icon: "/blackbox.png",
    },
  ];
  return (
    <>
      <div className="p-4 pb-4 border-b-[4px] border-gray-200 flex items-center justify-between">
        <div className="flex gap-24 items-center">
          <Image src="/drop-me-logo.png" width={70} height={70} alt="logo" />
          <div className="flex gap-6 items-center">
            {headerMenu.map((item) => (
              <div key={item.id} className="flex gap-2 items-center">
                <Image src={item.icon} width={17} height={17} alt="icon" />
                <h2 className="text-[14px] font-semibold">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <UserButton />
      </div>
    </>
  );
};

export default Header;

// <header className="flex justify-end items-center p-4 gap-4 h-16">
//       {/* Show the sign-in and sign-up buttons when the user is signed out */}
//       <SignedOut>
//         <SignInButton />
//         <SignUpButton>
//           <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//             Sign Up
//           </button>
//         </SignUpButton>
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </header>
