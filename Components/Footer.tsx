import  styles  from '@/Constants/Style'
import Image from 'next/image'
import Logo from "@/public/LogoNHC.png";

import {footerLinks} from '@/Constants/Style'


import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]" id='footer'>
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="flex items-center ">
                    <Image src={Logo} alt="Saas Logo" height={80} width={80} />
                    <p className="font-bold text-inherit">Hydro-E Blocks</p>

                </div>
                </div>
                {/* <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div> */}
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start py-5">
                    <div className="font-bold text-[16px] mt-20">Quik Links</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Home</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">About</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Partners</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Services</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Solution</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaFacebook />
                        <span className="text-[15px] ml-[6px]">Facebook</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaInstagram />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-start my-[15px] cursor-pointer">
                        <FaTwitter />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-10">
                    <div className="font-bold text-[16px]">Contact</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Phone: (123) 456-7890</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Email: contact@hydroeblocks.com</span>    
                    </p>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">mifwebchain@gmail.com</span>    
                    </p> */}
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center py-10">
            &copy; 2024 Hydro-E Blocks, Inc, All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer

