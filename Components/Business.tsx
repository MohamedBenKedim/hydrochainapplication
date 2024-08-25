import React from 'react'
import { features } from '@/Data/index'
import  styles  from '@/Constants/Style'
import { layout } from "@/Constants/Style";
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image';
interface FeatureCardProps {
  icon: string; // This assumes you're passing a React Icon component
  title: string;
  content: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content, index,}) => (
    <section id='services'>
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt={title} className="w-[100%] h-[100%] object-contain" style={{color:"#74C0FC",}} />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
    </section>
  );

const Business = () => {
  return (
    <div className='py-20'>
        <h6 className='heading' id='business' >
                Our 
        <span className='text-purple'> Services</span>
        </h6>
      <section className='flex md:flex-row flex-col ${styles.paddingY} py-20'>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Connecting Hydrogen Producers <br className='sm:block hidden'/>
                with a Transparent Blockchain.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Streamline the verification and allocation of low-carbon hydrogen credits using blockchain technology.
            </p>
            <a href="/services">
            <MagicButton 
                    title='Learn more'
                    icon={<FaLocationArrow/>}
                    />
            </a>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Business