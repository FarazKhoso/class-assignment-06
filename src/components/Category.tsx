import Image from 'next/image';
import React from 'react'
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { VscMic } from "react-icons/vsc";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiBookOpenTextLight } from "react-icons/pi";
import { PiNotebook } from "react-icons/pi";

const Category = () => {
  return (
    <div>
     {/* Category */}
     <div className="flex flex-col justify-center items-center py-28 px-6 gap-12 xl:gap-20">
     <div className="flex flex-col justify-center items-center xl:items-start gap-6">
       <h2 className="font-bold text-center text-[32px]/[40px] xl:text-5xl">
         Explore Courses By Category
       </h2>
       <p className="text-center text-lg">
         Discover a wide range of courses covering a variety of subjects,
         taught by expert instructors.
       </p>
     </div>
     <div className="flex flex-col justify-center items-center gap-16 w-full">
       <div className="xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-16">
         {/* first */}
         <div className="flex flex-col xl:flex-row justify-center items-center gap-6">
           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
             <Image
               src={"/development.svg"}
               alt="cource-icon-1"
               width={32}
               height={32}
               className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
             />
             <div>
               <h3 className="font-semibold text-xl">
                 Design & Development
               </h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>

           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
            
             <HiOutlineSpeakerWave className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"/>
             <div>
               <h3 className="font-semibold text-xl">Marketing</h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>

           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
             <Image
               src={"/group.svg"}
               alt="cource-icon-3"
               width={32}
               height={32}
               className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
             />
             <div>
               <h3 className="font-semibold text-xl">Development</h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>
         </div>

         {/* second */}
         <div className="hidden xl:flex flex-col xl:flex-row justify-center items-center gap-6">
           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
            
             <VscMic className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"/>
             <div>
               <h3 className="font-semibold text-xl">Communication</h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>

           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
             <Image
               src={"/link.svg"}
               alt="cource-icon-5"
               width={32}
               height={32}
               className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
             />
             <div>
               <h3 className="font-semibold text-xl">Digiat Marketing</h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>

           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
             <Image
               src={"/arrow-2.svg"}
               alt="cource-icon-6"
               width={32}
               height={32}
               className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
             />
             <div>
               <h3 className="font-semibold text-xl">Self Development</h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>
         </div>

         {/* third */}
         <div className="hidden xl:flex flex-col xl:flex-row justify-center items-center gap-6">
           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
             
             <IoBagHandleOutline className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"/>
             <div>
               <h3 className="font-semibold text-xl">Business</h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>
           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
         
             <PiBookOpenTextLight className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"/>
             <div>
               <h3 className="font-semibold text-xl">Finance</h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>
           <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
           
             <PiNotebook className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white" />
             <div>
               <h3 className="font-semibold text-xl">Consulting</h3>
               <p className="text-lg">50+ Courses Available</p>
             </div>
           </div>
         </div>
       </div>
       <button className="py-3 px-6 border border-black rounded-[5px]">
         View All Courses
       </button>
     </div>
   </div>
   </div>
)
}

export default Category;
