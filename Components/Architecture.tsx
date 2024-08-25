import React from 'react'
import Image from 'next/image'
import architecture from "@/public/architecture.png"

const Architecture = () => {
  return (
    <main className="relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className='mx-auto mt-20 flex flex-col items-center max-w-6xl px-6'>
          <h1 className='heading text-white-100 py-10'>How It Works</h1>
          <br />
          <p className='text-gray-400 text-xl text-center'></p>
          
          <Image src={architecture} alt="team" height={1000} width={1000} />
           
        </div>
    </main>
  )
}

export default Architecture