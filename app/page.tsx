"use client"

import  Hero  from "@/Components/Hero";
import Partners from "@/Components/Partners";
import { navItems } from "@/Data";
import Services from "@/Components/Services";
import Business from "@/Components/Business";
import Footer from "@/Components/Footer";
import Header1 from "@/Components/Header1";
import Navbar from "@/Components/Navbar";
import Footer1 from "@/Components/Footer1";
import Newsletter from "@/Components/Newsletter";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header1 />
        {/* <Navbar /> */}
        <Hero />
        <Partners />
        <Business />
        <Services />
        <Newsletter />
        <br />
        <Footer1 />

      </div>
    </main>
  );
}
