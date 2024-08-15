import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import openNew from '/public/open_new.png'
import { Titillium_Web, Bebas_Neue, Great_Vibes } from 'next/font/google'


const bn = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
})

import { Plus_Jakarta_Sans } from "next/font/google";

const pjs = Plus_Jakarta_Sans({
    weight: "600",
    subsets: ["latin"],
});

const pjsSM = Plus_Jakarta_Sans({
    weight: "400",
    subsets: ["latin"],
    style: ["italic"]
});

export default function About() {
    return (
        <section className={`${bn.className} mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 rounded-lg shadow-inner `}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                <div className="col-span-5 row-span-1 md:col-span-2">
                    <h3 className="text-5xl/tight tracking-widest font-medium text-gray-900">Our Mission</h3>

                    <p className={` ${pjsSM.className} text-2xl tracking-normal mt-0.5 text-gray-700 font-thin `}>
                        With over 10 years of experience,
                        we are dedicated to serving our area with excellence.
                        Visit today for classic and professional services.
                    </p>
                </div>
                <div className=" col-span-4 row-span-1 md:col-span-2 md:col-end-6">
                    <Image
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="max-w w-auto h-full rounded-lg object-cover"
                        width={500}
                        height={500}
                    />
                </div>
                {/* <div className="col-span-1">
                    <span className="inline-flex flex flex-col overflow-hidden shadow-md shadow-[#C7B27E] rounded-md bg-black w-full">
                        <a href="#info">
                            <button
                                className="inline-block w-full border-b border-[#C7B27E] px-4 py-2  text-white  hover:bg-neutral-600  hover:text-white "
                            >
                            Store Info
                            </button>
                        </a>
                        <button
                            className="inline-block w-full border-b border-[#C7B27E] px-4 py-2  text-white  hover:bg-neutral-600  hover:text-white  "
                        >
                            Our Story
                        </button>
                        <button
                            className="inline-block w-full border-[#C7B27E] px-4 py-2  text-white  hover:bg-neutral-600  hover:text-white  "
                        >
                            FAQ
                        </button>
                    </span>
                </div> */}
            </div>

        </section>
    )
}