import React from 'react'
import Image from 'next/image';

const Team = () => {
  return (
    <div>
       {/* Team */}
       <div className="flex flex-col justify-center items-center py-12 xl:py-28 px-6 xl:px-16 gap-12 xl:gap-20 bg-[#f7f7f7]">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-[32px]/[40px] xl:text-5xl text-center">
            Our team
          </h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center xl:justify-evenly items-center gap-12 xl:gap-0 xl:w-full">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-1.png"} alt="team-1" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">James Nduku</h3>
              <p className="text-lg text-center">Marketing Coordinator</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-2.png"} alt="team-2" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Joseph Munyambu
              </h3>
              <p className="text-lg text-center">Nursing Assistant</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-3.png"} alt="team-3" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Joseph Ngumbau
              </h3>
              <p className="text-lg text-center">Medical Assistant</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-col xl:flex-row justify-center xl:justify-evenly items-center gap-12 xl:gap-0 xl:w-full">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-4.png"} alt="team-4" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Erick Kipkemboi
              </h3>
              <p className="text-lg text-center">Web Designer</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-5.png"} alt="team-5" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Stephen Kerubo
              </h3>
              <p className="text-lg text-center">President of Sales</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-6.png"} alt="team-6" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">John Leboo</h3>
              <p className="text-lg text-center">Dog Trainer</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
        <button className="xl:hidden px-4 py-2 rounded-[5px] border border-black">
          View All
        </button>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col justify-center items-center xl:bg-[#f7f7f7] xl:items-start py-12 xl:py-28 px-6 xl:px-16 gap-12 xl:gap-20">
        <div className="flex flex-col justify-center items-center xl:items-start gap-6">
          <h2 className="xl:hidden font-bold text-[32px]/[40px] text-center">
            What Our Student Say
          </h2>
          <h2 className="hidden xl:block font-bold text-5xl">
            Customer testimonials
          </h2>
          <p className="text-center xl:text-start text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <div className="xl:flex justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
              <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex justify-start items-center gap-5">
                  <Image
                    src={"/student-1.png"}
                    alt="student-1"
                    height={56}
                    width={56}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Wade Warren</h3>
                    <p className="xl:hidden">Position, Company name</p>
                    <p className="hidden xl:block">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
              <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex justify-start items-center gap-5">
                  <Image
                    src={"/student-2.png"}
                    alt="student-2"
                    height={56}
                    width={56}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Erick Kipkemboi</h3>
                    <p>Scrum Master</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
              <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex justify-start items-center gap-5">
                  <Image
                    src={"/student-3.png"}
                    alt="student-3"
                    height={56}
                    width={56}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Stephen Kerubo</h3>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <Image src={"/dots.svg"} alt="dots" height={8} width={72} />
            <div className="flex justify-center items-center gap-[15px]">
              <button className="p-3 border border-black rounded-[50px]">
                <Image
                  src={"/previous.svg"}
                  alt="previous"
                  height={24}
                  width={24}
                />
              </button>
              <button className="p-3 border border-black rounded-[50px]">
                <Image src={"/next.svg"} alt="next" height={24} width={24} />
            
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
