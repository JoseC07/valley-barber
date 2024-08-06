import React from 'react'
import { gv, bn, font, pjs } from '@/app/_utils/fonts';

export default function Barber() {
    return (<>
        <h1 className={`${bn.className} text-5xl/tight tracking-widest mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8  text-3xl text-neutral-950 mb-1`}>Our Barbers</h1>
        <section className="space-y-8 mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <div id="barber-info-grid" className="flex justify-center">

                    <a className="group w-64 h-96 relative object-cover block bg-black ">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 mx-auto"
                        />
                        <div className="relative p-4 sm:p-6">
                            <p className="text-sm font-medium uppercase tracking-widest text-black">Click to Book</p>
                            <p className="text-xl font-bold text-white sm:text-2xl">Abraham</p>
                            <div className="mt-8 sm:mt-16">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all space-y-2 group-hover:translate-y-0 group-hover:opacity-100 flex flex-col"
                                >
                                    <span className="inline-flex overflow-hidden rounded-md  bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Book Today
                                        </button>

                                    </span>
                                    <span className="inline-flex overflow-hidden rounded-md bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Phone Number
                                        </button>

                                    </span>
                                    <span className="inline-flex overflow-hidden rounded-md  bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Instagram
                                        </button>

                                    </span>



                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="h-32 rounded-lg flex justify-center md:col-span-2">"bio"</div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

                <div className="h-32 rounded-lg flex justify-center md:col-span-2 order-2 md:order-none">"bio"</div>
                <div id="barber-info-grid" className="flex justify-center order-1 md:order-none">
                    <a className="group w-64 h-96 relative object-cover block bg-black ">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 mx-auto"
                        />
                        <div className="relative p-4 sm:p-6">
                            <p className="text-sm font-medium uppercase tracking-widest text-black">Click to Book</p>
                            <p className="text-xl font-bold text-white sm:text-2xl">Abraham</p>
                            <div className="mt-8 sm:mt-16">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all space-y-2 group-hover:translate-y-0 group-hover:opacity-100 flex flex-col"
                                >
                                    <span className="inline-flex overflow-hidden rounded-md  bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Book Today
                                        </button>

                                    </span>
                                    <span className="inline-flex overflow-hidden rounded-md bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Phone Number
                                        </button>

                                    </span>
                                    <span className="inline-flex overflow-hidden rounded-md  bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Instagram
                                        </button>

                                    </span>



                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <div id="barber-info-grid" className="flex justify-center">

                    <a className="group w-64 h-96 relative object-cover block bg-black ">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 mx-auto"
                        />
                        <div className="relative p-4 sm:p-6">
                            <p className="text-sm font-medium uppercase tracking-widest text-black">Click to Book</p>
                            <p className="text-xl font-bold text-white sm:text-2xl">Abraham</p>
                            <div className="mt-8 sm:mt-16">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all space-y-2 group-hover:translate-y-0 group-hover:opacity-100 flex flex-col"
                                >
                                    <span className="inline-flex overflow-hidden rounded-md  bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Book Today
                                        </button>

                                    </span>
                                    <span className="inline-flex overflow-hidden rounded-md bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Phone Number
                                        </button>

                                    </span>
                                    <span className="inline-flex overflow-hidden rounded-md  bg-black">
                                        <button
                                            className="inline-block w-full px-4 py-2 text-base text-white hover:bg-zinc-900 focus:relative "
                                        >
                                            Instagram
                                        </button>

                                    </span>



                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="h-32 rounded-lg flex justify-center md:col-span-2">"bio</div>
            </div>







        </section>
        </>
    )
}
