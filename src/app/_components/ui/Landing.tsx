import React from 'react'
import Image from 'next/image'
import { Titillium_Web, Bebas_Neue, Great_Vibes } from 'next/font/google'
import yelp from '/public/yelp-svgrepo-com.png'
import insta from '/public/instagram-svgrepo-com.png'
import fb from '/public/facebook-svgrepo-com.png'
import logo from '/public/thevalleyLogo.png'


const gv = Great_Vibes({
  weight: "400",
  subsets: ["latin"]
})

const bn = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

const font = Titillium_Web({
  weight: "700",
  subsets: ["latin"],
})

import { Plus_Jakarta_Sans } from "next/font/google";

const pjs = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["latin"],
});

export default function Landing() {
  return (
    <section className={` ${font.className} relative bg-neutral-950 z-[0]`}>

      <div className="relative overflow-hidden h-60 md:h-45vh px-6 text-center">
        <video src="/barber.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80">
          Your browser does not support the video tag.
        </video>
        <div className="relative w-full h-full flex justify-center items-center z-10 py-12 overflow-hidden">
          <Image
            src={logo}
            height={800}
            width={800}
            alt="the valley logo"
            className="object-contain max-w-full max-h-full" />
        </div>
      </div>

      <div className="flex flex-col space-y-4  items-center p-4">

        <span className="inline-flex overflow-hidden shadow-md shadow-[#C7B27E]  rounded-md bg-black ">
          <button
            className="inline-block border-e border-[#C7B27E] px-4 py-2  text-white w-40 hover:bg-neutral-600  hover:text-white  md:w-80"
          >
            Book Today
          </button>
          <button
            className="inline-block px-4 py-2 text-base text-white w-40 hover:bg-neutral-600 hover:text-white focus:relative md:w-80"
          >
            Call Ahead
          </button>

        </span>
        <span className="inline-flex overflow-hidden rounded-md shadow-md shadow-[#C7B27E]  bg-black shadow-sm">
          <button
            className="inline-block border-e border-[#C7B27E]  p-3 text-gray-700 hover:bg-neutral-600 focus:relative"
            title="Instagram"
          >
            <Image
              src={insta}
              alt={"insta"}
              className="size-4"
            />
          </button>

          <button
            className="inline-block p-3 border-e  border-[#C7B27E]  hover:bg-neutral-600 focus:relative"
            title="Delete Product"
          >
            <Image
              src={fb}
              alt={"facebook"}
              className="size-4"
            />
          </button>

          <button
            className="inline-block p-3 hover:bg-neutral-600 focus:relative"
            title="Delete Product"
          >
            <Image
              src={yelp}
              alt={"yelp"}
              className="size-4"
            />
          </button>
        </span>
      </div>

    </section>
  )
}
