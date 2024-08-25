import { link } from 'fs';
import React from 'react';
import { FaLinkedin} from "react-icons/fa";
import Image from 'next/image';
import Team from "@/public/team.jpeg";

const people = [
  {
    name: 'Marwen Chaabouni',
    role: 'Energy Specialist',
    imageUrl:
      '/marwen.jpg',
    link:'https://www.linkedin.com/in/marwen-chaabouni/'  
  },

  {
    name: 'Islem Hamzaoui',
    role: 'Data Analyst',
    imageUrl:
      '/islem.jpg',
      link:'https://www.linkedin.com/in/islem-hamzaoui-770383222/'  

  },
  {
    name: 'Mohamed Ben Kedim',
    role: 'Blockchain Engineer',
    imageUrl:
      '/mohamed.jpg',
      link:'https://www.linkedin.com/in/mohamed-ben-kedim/'  

  },
  {
    name: 'Ranya Ouni',
    role: 'Web Developer',
    imageUrl:
      '/ranya.jpeg',
      link:'https://www.linkedin.com/in/ranya-ouni-569237151/'


  },
  {
    name: 'Stefan Kermer',
    role: 'Business Advisor',
    imageUrl:
      '/stefan.jpg',
      link:'https://www.linkedin.com/in/stefan-kermer/'  

  },
]

export default function team() {
    return (
      <main className="relative min-h-screen bg-black-100 flex justify-start flex-col overflow-hidden mx-auto sm:px-10 px-5 pb-10">
        {/* <div className='mx-auto mt-20 flex flex-col items-start max-w-6xl px-6'>
          <h1 className='heading text-white-100'>About Us</h1>
          <br />
          <p className='text-gray-400 text-xl'>We are a team of students conducting research on sustainable energy solutions, specifically focusing on blockchain technology. Our project, Hydro-E Blocks, aims to track and certify green hydrogen and CO2 emissions. We're currently seeking specific use cases to run pilot projects that demonstrate 
            how blockchain can provide a cost-effective and sustainable solution for the hydrogen industry.</p>
        </div>
        <br />     
        <div className='flex flex-col items-center'>
          <Image src={Team} alt="team" height={500} width={500} />
        </div>    
        
        <div className='mx-auto mt-20 flex flex-col items-start max-w-6xl px-6'>
          <h1 className='heading text-white-100'>Our Mission</h1>
          <br />
          <p className='text-gray-400 text-xl'>To provide a blockchain solution that transparently tracks and certifies green hydrogen and CO2 emissions,
            driving trust and decarbonization in the energy sector.</p>
        </div>
        <div className='mx-auto mt-20 flex flex-col items-start max-w-6xl px-6'>
          <h1 className='heading text-white-100'>Our Vision</h1>
          <br />
          <p className='text-gray-400 text-xl'>To be the global standard for green hydrogen certification and emissions tracking,
          leading the transition to a sustainable energy future.</p>
        </div> */}
        <br />
        <div className="mx-auto grid mt-20 max-w-8xl gap-x-10 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-bold tracking-tight text-white-100 sm:text-4xl">Meet our team</h2>
          <p className="mt-6 text-md leading-8 text-gray-400">
          We’re proud to introduce the team behind our project. Each member brings unique skills and a shared commitment to making our vision a reality. Together, we’re working to achieve great things.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-20 w-20 rounded-3xl" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white-200">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <a
              href={person.link}
              rel="noreferrer"
              target="_blank"
              className="text-white-200 transition hover:opacity-75"
            >
              <span className="sr-only mt-2 w-100 h-100">LinkedIn</span>
              <FaLinkedin  className='w-6 h-6'/>
            </a>
                </div>          
              </div>
            </li>
           
              
           
          ))}
        </ul>
      </div>
      <div className='h-40'></div>
      </main>
    );
  }
  
