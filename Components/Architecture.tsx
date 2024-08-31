import React from 'react'
import Image from 'next/image'
import architecture from "@/public/architecture.png"

const Architecture = () => {
  return (
    <main className="relative pb-20 h-auto bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className='mx-auto mt-20 flex flex-col items-center max-w-6xl px-6'>
          <h1 className='heading text-white-100 py-10'>How It Works</h1>
          <br />
          <Image src={architecture} alt="team" height={1200} width={1200} />
        </div>
    </main>
  )
}

export default Architecture