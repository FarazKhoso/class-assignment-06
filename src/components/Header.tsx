
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
   
import Image from "next/image";



const Header = () => {
  return (
    <header>
      <div className="hidden xl:block border-b border-b-black xl:bg-[#f7f7f7] px-16">
        <div className="flex justify-between items-center gap-8 py-3 w-full">
          <div className="flex justify-center items-center gap-4">
            <p className="text-sm">Phone Number: 956 742 455 678</p>
            <div className="border border-black h-8"></div>
            <p className="text-sm">Email:info@ddsgnr.com</p>
          </div>


 <div className='text-black flex gap-3 text-xl '>
 <FaFacebookF />
 <LuInstagram />
 <FaTwitter />
 <FaLinkedin />
 </div>

        </div>
      </div>
      <div className="border-b border-b-black xl:bg-[#f7f7f7]">
        <div className="flex mx-6 xl:mx-16 my-3 xl:my-[14px] justify-center xl:justify-between items-center gap-8 xl:gap-0">
          <div className="flex flex-grow justify-start items-center gap-2 px-2 xl:py-[29px]">
            <Image src="/logo.svg" alt="logo" width={32} height={30} />
            <span className="font-inter text-2xl font-bold">Ddsgnr</span>
          </div>
          <div className="hidden xl:flex bg-white gap-8">
            <div className="flex gap-8">
              <button className="border-b border-black p-[10px]">Home</button>
              <button className="p-[10px]">Courses</button>
              <button className="p-[10px]">Services</button>
              <button className="p-[10px]">Achievement</button>
              <button className="p-[10px]">About Us</button>
              <button className="p-[10px]">Testimonial</button>
            </div>
            <div className="flex gap-4">
              <button className="py-2 px-5 rounded-[5px] border border-black">
                Login
              </button>
              <button className="py-2 px-5 rounded-[5px] bg-black text-white border border-black">
                Sign Up
              </button>
            </div>
          </div>
          {/* Mobile Menu Icon */}
          <div className="xl:hidden flex flex-grow-0 justify-center items-center p-6 text-xl">
            <AiOutlineMenu/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
