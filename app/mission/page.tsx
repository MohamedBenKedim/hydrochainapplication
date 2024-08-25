import React from 'react';
import Image from 'next/image';
import Team from "@/public/team.jpeg";


export default function mission() {
    return (
      <main className="relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className='mx-auto mt-20 flex flex-col items-start max-w-6xl px-6'>
          <h1 className='heading text-white-100'>About Us</h1>
          <br />
          <p className='text-gray-400 text-xl'>We are a team of students conducting research on sustainable energy solutions, specifically focusing on blockchain technology. Our project, Hydro-E Blocks, aims to track and certify green hydrogen and CO2 emissions. We are currently seeking specific use cases to run pilot projects that demonstrate 
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
        </div>
        <div className='h-40'></div>
        <hr />
        
      </main>
    );
  }
  