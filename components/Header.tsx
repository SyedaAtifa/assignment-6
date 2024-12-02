import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

function Header() {
  return (
    <div>
      <div className="relative hidden h-[54px] w-[100vw]  border-b border-black bg-[#F7F7F7] md:flex items-center justify-center">
       <div className="md:w-auto h-[54px] md:flex items-center gap-8">
        <div className="flex w-[550px] h-[30px]  text-sm items-center md:justify-start md:gap-2 xl:ml-12 justify-between">
          <p>Phone Number: 956 742 455 678</p>
          <div className="border border-[#676767] h-[30px]"></div>
          <p>Email:info@ddsgnr.com</p>
        </div>
        <div className='xl:w-[580px] md:w-96 h-[24px] flex justify-end'>
        <Image src={"/images/links.png"} alt="links" width={132} height={24}/>
        </div>
      </div>
      </div>
      
        {/* header2 */}
    <header className="w-[100vw] h-[72px] bg-[#F7F7F7] flex items-center justify-center border-b border-black md:mt-2">
      <div className="w-[380px] h-12 flex lg:w-[1152px] md:h-11 gap-8 md:gap-2 lg:gap-20">
        <div className="w-[300px] h-10 py-2 lg:w-[130px] xl:w-[242px]">
          <Image src={"/images/logo.svg"} alt="logo" width={130} height={40}/> 
        </div>
        <div className="hidden xl:w-[910px] md:w-[600px] h-11 lg:flex items-center justify-between lg:w-[700px]">
          <ul className="flex gap-8 text-base">
            <li className="w-16 md:w-auto">Home</li>
            <li className="w-[79px] md:w-auto">Courses</li>
            <li className="w-20 md:w-auto">Services</li>
            <li className="w-[113px] md:w-auto">Achievment</li>
            <li className="w-[79px]">About Us</li>
            <li className="w-[104px] md:w-auto">Testimonal</li>
          </ul>
          <div className="w-[191px] flex gap-4 md:gap-2 md:w-[180px] lg:ml-10">
            <Button className="h-10 w-20 border border-black bg-white text-black"><span className="text-base ">Login</span></Button>
            <Button className="h-10 w-[95px] border border-black bg-black"><span className="text-base text-white">Sign Up</span></Button>
          </div>
        </div>
        <div className="w-12 h-12 md:hidden">
          <Image src={"/images/Column.svg"} alt="column" width={48} height={48}/>
        </div>
      </div>
    </header>
    {/* header2 */}

      {/* learn */}
      <div className="h-[780px] w-[100vw] md:h-[800px] md:flex lg:h-[600px]">
       <div className="h-[390px] w-full py-16 px-6 flex flex-col gap-6 md:mt-[141px] md:w-[500px] lg:w-[640px] md:h-[300px] md:px-2">
         <div className="h-[174px] w-[380px] md:w-[500px] md:h-[212px] lg:ml-[100px]">
           <h1 className="h-[96px] w-full text-[40px] leading-[48px] font-bold md:w-[500px] md:h-[134px] md:text-[57px] md:leading-[67px]">Learn new skills online with ease</h1>
           <p className="h-[54px] w-[380px] text-lg md:w-[500px] mt-6">Discover a wide range of courses covering a  variety of subjects, taught by expert instructors.</p>
         </div>
         {/* buttons */}
         <div className="h-16 w-[358px] flex gap-4 mt-4 lg:ml-[100px]">
          <Button className="h-12 w-[178px] border border-black bg-black"><span className="h-6 w-[130px] text-base text-white">Start learning now</span></Button>
          <Button className="h-12 w-[178px] border border-black bg-white text-black"><span className="h-6 w-[130px] text-base">Explore Courses</span></Button>
         </div>
        {/* buttons */}
        </div>
        {/* image */}
        <div className="w-[100vw] h-[428px] lg:hidden">
          <Image className="w-[100vw]"
           src={"/images/1stimg.png"}
           alt="image"
           width={428}
           height={390}          
          />
        </div>
          <Image className="hidden md:block xl:w-[640px] xl:h-[800px] md:h-[640px] " src={"/images/image.svg"} alt="img" width={640} height={800}/>
      </div>
      {/* learn */}

      {/* logos */}
      <div className="w-[100vw] h-[240px] flex flex-col gap-6 pt-12 px-6 text-lg font-bold md:flex-row mt-8 xl:mt-48">
        <h5 className="md:text-2xl">Trusted by the world's best companies<p className="lg:hidden">[social proof to build credibility]</p></h5>
        <div className="h-[65px] py-4">
          <Image src={"/images/Logos.svg"} alt="logos" width={1374} height={65}/>
        </div>
      </div>
      {/* logos*/}

    </div>
  )
}

export default Header