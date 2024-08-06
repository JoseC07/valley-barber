import React,{useEffect} from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'


const geoData = "1033 S Main St Building A";

export default function Information() {

  
  return (
    <section id="info" className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ">
        <div className="grid grid-col-1 md:grid-cols-3 md:gap-8">
          <div className="relative md:col-span-2">
            <GoogleMapsEmbed
              apiKey={`${process.env.GOOGLE_API_MAP_KEY} `}
              height={500}
              width="100%"
              mode="place"
              q={`${geoData}`}
              maptype="satellite"
              zoom="18"
              
            />
          </div>
          <div className=" md:col-span-1 bg-gray-200">
          test
          </div>
        </div></section>
  )
}
