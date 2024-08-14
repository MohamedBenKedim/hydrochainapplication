'use client'

import React from 'react'
import { companies } from '@/Data/index'
import Image from 'next/image'
import LogoDione from "@/public/LogoDione.png";

const Partners = () => {
  return (
    <div>
        <div className='py-20 gap-6' id='partners'>
            <h1 className='heading'>
                <span className='text-purple'>Nebra Solution</span>
            </h1> <br />
            <p className='text-center md:-tracking-wider mb:4 text-sm md:text-lg lg:text-2xl'>Energy Transition : Low-Carbon Hydrogen</p>
            <div className="flex items-center justify-center gap-2 py-5">
                    <p>Trusted by : </p>
                    <Image src={LogoDione} alt="Saas Logo" height={50} width={50} />
                    <p className="font-bold text-inherit">Dione</p>
                </div>
            {/* <div className='flex flex-wrap items-center justify-center p-4 gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id,img,name,nameImg}) =>
                (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={img} alt={name} className='md:w-10 w-5 '/>
                        <img src={nameImg} alt={name} className='md:w-24 w-20 '/>

                    </div>
                ))}
            </div> */}
        </div>

    </div>
  )
}

export default Partners