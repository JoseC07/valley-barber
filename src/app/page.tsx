

import Image from "next/image";
import Landing from "./_components/ui/Landing"
import About from "./_components/ui/About"
import Testimonials from "./_components/ui/Testimonials"
import Barber from "./_components/ui/Barber"
import Information from "./_components/Info/Information"


export default function Home() {
  return (
    <>
    <Landing></Landing>
    <section className ="px-4">  
      <About></About>
      <Barber></Barber>
      <Information></Information>
      <Testimonials></Testimonials>
    </section>
    </>
  );
}
