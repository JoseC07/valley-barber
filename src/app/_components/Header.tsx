import React from 'react'
import Link from 'next/link'
import { Titillium_Web, Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";

const font = Titillium_Web({
  weight: "600",
  subsets: ["latin"],
})
const bn = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

const pjs = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["latin"],
});

type NavItem = {
  name: string;
  path: string;
};

const navMap: NavItem[] = [
  { name: "Home", path: "#about" },
  { name: "Our Barbers", path: "#about" },
  { name: "Info", path: "#info" },
 
  

]



export default function Header() {
  return (
    <header className={`${bn.className} text-3xl bg-neutral-950 pt-2 pb-2 w-full`}>
      <div className="flex flex-col items-center">
       
        
        <div className = "space-x-5 mt-2">
          {navMap.map((item, index) => {
            console.log(item);
            return (
              <Link
                key={index}
                href={item.path}
                className=" text-white border-t border-[#C7B27E]  hover:text-[#C7B27E]"
                >
                {item.name}
              </Link>
            );
          })}
        </div>
        
      </div>

      
    </header>
  )
}
