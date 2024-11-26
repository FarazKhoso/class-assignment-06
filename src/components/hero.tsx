import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   
<div>
      {/* Hero */}
      <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center">
        <div className="flex flex-col justify-center items-start py-16 xl:py-0 xl:pr-[60px] xl:pl-20 px-6 gap-6">
          <div className="flex flex-col justify-center items-start gap-6">
            <h1 className="font-bold text-[40px]/[48px] xl:text-[56px]/[68px]">
              Learn new skills online with ease
            </h1>
            <p className="text-lg">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="flex justify-start items-center pt-4 gap-4">
            <button className="bg-black text-white py-3 px-6 border border-black rounded-[5px]">
              Start learning now
            </button>
            <button className="py-3 px-6 border border-black rounded-[5px]">
              Explore Courses
            </button>
          </div>
        </div>
        <Image
          src={"/Image.svg"}
          alt="hero"
          width={1200}
          height={1800}
          className="object-cover object-top h-[800px] xl:h-auto w-screen xl:w-[50vw]"
        />
      </div>

      {/* Marquee */}
      <div className="xl:bg-[#f7f7f7] flex flex-col xl:flex-row justify-center items-start py-12 xl:py-20 px-6 xl:px-16 gap-6 xl:gap-16">
        <p className="font-bold text-lg xl:text-2xl">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </p>
        <div className="flex justify-start items-center py-4 gap-4 overflow-clip">
          <Image
            src={"/Airbnb Logo1.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/Airbnb Logo2.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/Airbnb Logo3.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/Airbnb Logo4.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/Airbnb Logo5.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/Airbnb Logo6.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
        </div>
      </div>
      </div>

  )
}

export default Hero
