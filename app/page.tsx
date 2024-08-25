"use client"

import  Hero  from "@/Components/Hero";
import Partners from "@/Components/Partners";
import { navItems } from "@/Data";
import Solution from "@/Components/Solution";
import Business from "@/Components/Business";
import Footer from "@/Components/Footer";
import Header1 from "@/Components/Header1";
import Navbar from "@/Components/Navbar";
import Footer1 from "@/Components/Footer1";
import Newsletter from "@/Components/Newsletter";
import Architecture from "@/Components/Architecture";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <Navbar /> */}
        <Hero />
        <Partners />
        <Business />
        <Solution />
        <Architecture />
        <Newsletter />
        <br />
      </div>
    </main>
  );
}
