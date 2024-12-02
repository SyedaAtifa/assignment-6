import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

function Category() {
  return (
    <div className="h-[862px] w-[100vw] py-12 px-6 md:px-0">
        {/* explore */}
        <div className="h-[162px] w-[385px] grid  gap-6 text-center lg:w-auto lg:h-[109px] xl:ml-[100px]">
         <h2 className="h-[84px] w-full text-3xl font-bold lg:h-[58px] lg:text-5xl">Explore Courses By Category</h2>
         <p className="h-[54px] w-full text-lg lg:h-[27px] lg:ml-12">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        {/* explore */}

        {/* courses */}
        <div className="h-[556px] w-full mt-12 lg:h-[636px] lg:flex lg:flex-col lg:gap-16 xl:w-[1350px]">
          <div className="h-[444px] w-full lg:flex lg:gap-0 xl:gap-8 lg:h-[132px]">
           <div className="h-[132px] w-[380px] p-4 bg-[#F7F7F7] rounded-[5px] flex lg:w-[550px]">
                <Image src={"/images/design.svg"} alt="design" width={100} height={100}/>
                <div className="h-[57px] w-[216px] pt-6 pl-3 md:pl-0">
                 <h3 className="h-[30px] w-full text-xl font-semibold md:w-text-lg md:font-medium">Design & Development</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>

            <div className="h-[132px] w-[380px] p-4 bg-[#F7F7F7] rounded-[5px] flex mt-6 lg:mt-0">
                <Image src={"/images/market.svg"} alt="market" width={100} height={100}/>
                <div className="h-[57px] w-[216px] p-4 md:pl-0">
                 <h3 className="h-[30px] w-full text-xl font-semibold">Marketing</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>

            <div className="h-[132px] w-[380px] p-4 bg-[#F7F7F7] rounded-[5px] flex mt-6 lg:mt-0"> 
                <Image src={"/images/develop.svg"} alt="market" width={100} height={100}/>
                <div className="h-[57px] w-[216px] p-4 md:pl-0">
                 <h3 className="h-[30px] w-full text-xl font-semibold">Development</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>
          </div>

          {/* 02 */}
          <div className="h-[444px] w-full lg:flex xl:gap-6 md:gap-0 lg:h-[132px] hidden">
           <div className="h-[132px] w-full p-4 bg-[#F7F7F7] rounded-[5px] flex">
                <Image src={"/images/communi.svg"} alt="design" width={100} height={100}/>
                <div className="h-[57px] w-[216px] pt-6 pl-3">
                 <h3 className="h-[30px] w-full text-xl font-semibold">Communication</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>

            <div className="h-[132px] w-full p-4 bg-[#F7F7F7] rounded-[5px] flex mt-6 lg:mt-0">
                <Image src={"/images/mark.svg"} alt="digital" width={100} height={100}/>
                <div className="h-[57px] w-[216px] p-4 md:pl-0">
                 <h3 className="h-[30px] w-full text-xl font-semibold">Digital Marketing</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>

            <div className="h-[132px] w-full p-4 bg-[#F7F7F7] rounded-[5px] flex mt-6 lg:mt-0"> 
                <Image src={"/images/development.svg"} alt="market" width={100} height={100}/>
                <div className="h-[57px] w-[216px] p-4 md:pl-0">
                 <h3 className="h-[30px] w-full text-xl font-semibold">Self Development</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>
          </div>
          {/* 02 */}

          {/* 03 */}
          <div className="h-[444px] w-full lg:flex xl:gap-6 md:gap-0 lg:h-[132px] hidden">
           <div className="h-[132px] w-full p-4 bg-[#F7F7F7] rounded-[5px] flex">
                <Image src={"/images/buisness.svg"} alt="buisness" width={100} height={100}/>
                <div className="h-[57px] w-[216px] pt-6 pl-3">
                 <h3 className="h-[30px] w-full text-xl font-semibold ">Buisness</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>

            <div className="h-[132px] w-full p-4 bg-[#F7F7F7] rounded-[5px] flex mt-6 lg:mt-0">
                <Image src={"/images/finance.svg"} alt="finaance" width={100} height={100}/>
                <div className="h-[57px] w-[216px] p-4 md:pl-0">
                 <h3 className="h-[30px] w-full text-xl font-semibold">Finance</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>

            <div className="h-[132px] w-full p-4 bg-[#F7F7F7] rounded-[5px] flex mt-6 lg:mt-0"> 
                <Image src={"/images/consult.svg"} alt="consult" width={100} height={100}/>
                <div className="h-[57px] w-[216px] p-4 md:pl-0">
                 <h3 className="h-[30px] w-full text-xl font-semibold">Consulting</h3>
                 <p className="h-[27px] w-full text-lg">50+ Courses Available</p>
                </div>
            </div>
          </div>
          {/* 03 */}
        </div>
        {/* courses */}
        <div className="flex items-center justify-center">
          <Button className="h-12 w-[155px] border border-black bg-white text-black"><span className="h-6 w-[120px] text-base">View All Courses</span></Button>
        </div>
    </div>
  )
}

export default Category