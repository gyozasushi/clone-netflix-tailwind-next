import React from "react";
import Image from "next/image";
import logo from "../assets/navbar/logo/netflix.png";
import { Navigations} from "./Navbar.data";
import Icons from "../utils/icons/icons";
import Avatar from "./avatar";

export default function Navbar() {
    return (
        <nav className="bg-transparent ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12  "> 
                    <div className="flex items-center space-x-4"> 
                        <div className="flex-shrink-0">
                            <Image
                                src={logo}
                                alt="Netflix Logo"
                                width={120}
                                height={60}
                            />
                        </div>
                        {Navigations.map(({ path: destination, label }) => (
                            <a
                                key={label}
                                href={destination}
                                className="hover:text-red-500 px-3 py-2 text-md font-medium"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className="flex justify-beetween space-x-4 items-center cursor-pointer ">
                        <div className="flex items-center space-x-2">
                            <Icons.NotifIcon/>
                            <Icons.GiftIcon/>   
                            <Icons.SearchIcon/>
                        </div>
                            <Avatar/>
                        </div>
                    
                </div>
            </div>
        </nav>
    );
}

