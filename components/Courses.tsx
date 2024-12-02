import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

function Courses() {
  return (
    <div className="w-[100vw] h-[2135px] py-12 md:h-[1680px] flex  flex-col gap-12">
        <div className="h-[93px] w-[100vw]  md:h-[118px] md:w-full md:mt-28 flex items-center justify-center flex-col gap-4">
            <h4 className="h-[42px] w-full text-[32px] leading-[41.67px] font-bold text-center md:w-full md:h-[68px] md:text-[56px]">Courses</h4>
            <p className="h-[27px] w-full text-lg text-center">Your Ultimate Guide to learning</p>
        </div>
        {/* courses */}
        <div className="h-[1898px] w-[380px] mt-12 md:h-[1132px] md:flex-col">
          <div className="flex items-center justify-center w-[100vw]">
            <div className="h-10 w-[336px] flex items-center justify-center">
                <p className="h-full w-[87px] border-b border-[#676767] text-center">Popular</p>
                <p className="h-full w-[140px] text-center">Recommended</p>
                <p className="h-full w-[109px] text-center">Best  Price</p>
            </div>
          </div>

            <div className="h-[1690px] w-[100vw] mt-16 px-6 md:flex md:flex-col md:h-[558px] md:px-0">
             <div className="w-full mt-16 lg:flex md:h-[558px] md:gap-8 md:mt-0">
                <div className="h-[558px] w-[380px] md:w-[425px] bg-[#F7F7F7] border rounded-[5px]">
                   <div className="border rounded-[5px]">
                     <Image
                       src={"/images/UI.svg"}
                       alt="UIimg"
                       width={380}
                       height={300}
                     />
                    </div>
                    <div className="h-[234px] w-full px-4 pb-6 mt-6">
                        <div className="h-[146px] w-[348px]">
                            <div className="h-6 w-full flex">
                                <p className="h-[21px] w-[300px] text-sm font-semibold">Design</p>
                                <Image src={"/images/Star.svg"} alt="star" width={48} height={24}/>
                            </div>
                            <h5 className="h-[34px] w-[191px] text-xl font-bold mt-2">UX/UI Design 201</h5>
                            <p className="h-[72px] w-[326px] text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="h-10 w-full flex gap-8 mt-6">
                            <button  className="h-10 w-[117px] border border-black rounded-[5px]">Enroll Now</button>
                            <button>$400</button>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="h-[558px] w-[380px] md:w-[425px] bg-[#F7F7F7] border rounded-[5px] mt-8 lg:mt-0">
                   <div className="border rounded-[5px]">
                     <Image
                       src={"/images/python.svg"}
                       alt="UIimg"
                       width={380}
                       height={300}
                     />
                    </div>
                    <div className="h-[234px] w-full px-4 pb-6 mt-6">
                        <div className="h-[146px] w-[348px]">
                            <div className="h-6 w-full flex">
                                <p className="h-[21px] w-[300px] text-sm font-semibold">Programmimg</p>
                                <Image src={"/images/Star.svg"} alt="star" width={48} height={24}/>
                            </div>
                            <h5 className="h-[34px] w-full text-xl font-bold mt-2">Introduction to Python</h5>
                            <p className="h-[72px] w-[326px] text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="h-10 w-full flex gap-8 mt-6">
                            <button className="h-10 w-[117px] border border-black rounded-[5px]">Enroll Now</button>
                            <button>$400</button>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                {/* 3 */}
                <div className="h-[558px] w-[380px] md:w-[425px] bg-[#F7F7F7] border rounded-[5px] mt-8 lg:mt-0">
                   <div className="border rounded-[5px]">
                     <Image
                       src={"/images/data.png"}
                       alt="UIimg"
                       width={380}
                       height={300}
                     />
                    </div>
                    <div className="h-[234px] w-full px-4 pb-6 mt-6">
                        <div className="h-[146px] w-[348px]">
                            <div className="h-6 w-full flex">
                                <p className="h-[21px] w-[300px] text-sm font-semibold">Business</p>
                                <Image src={"/images/Star.svg"} alt="star" width={48} height={24}/>
                            </div>
                            <h5 className="h-[34px] w-full text-xl font-bold mt-2">Data Analysis for Beginners</h5>
                            <p className="h-[72px] w-[326px] text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="h-10 w-full flex gap-8 mt-6">
                            <button className="h-10 w-[117px] border border-black rounded-[5px]">Enroll Now</button>
                            <button>$400</button>
                        </div>
                    </div>
                </div>
                {/* 3 */}
            </div>
                {/* course1 */}
 
            {/* course2 */}     
             <div className="w-full mt-16 lg:flex lg:h-[558px] lg:gap-8 hidden">
                <div className="h-[558px] w-full bg-[#F7F7F7] border rounded-[5px]">
                   <div className="border rounded-[5px]">
                     <Image
                       src={"/images/art.svg"}
                       alt="artimg"
                       width={380}
                       height={300}
                     />
                    </div>
                    <div className="h-[234px] w-full px-4 pb-6 mt-6">
                        <div className="h-[146px] w-[348px]">
                            <div className="h-6 w-full flex">
                                <p className="h-[21px] w-[300px] text-sm font-semibold">Art</p>
                                <Image src={"/images/Star.svg"} alt="star" width={48} height={24}/>
                            </div>
                            <h5 className="h-[34px] w-[191px] text-xl font-bold mt-2">Art Specialization</h5>
                            <p className="h-[72px] w-[326px] text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="h-10 w-full flex gap-8 mt-6">
                            <button  className="h-10 w-[117px] border border-black rounded-[5px]">Enroll Now</button>
                            <button>$400</button>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="h-[558px] w-full bg-[#F7F7F7] border rounded-[5px] mt-8 lg:mt-0">
                   <div className="border rounded-[5px]">
                     <Image
                       src={"/images/law.svg"}
                       alt="lawimg"
                       width={380}
                       height={300}
                     />
                    </div>
                    <div className="h-[234px] w-full px-4 pb-6 mt-6">
                        <div className="h-[146px] w-[348px]">
                            <div className="h-6 w-full flex">
                                <p className="h-[21px] w-[300px] text-sm font-semibold">Law</p>
                                <Image src={"/images/Star.svg"} alt="star" width={48} height={24}/>
                            </div>
                            <h5 className="h-[34px] w-full text-xl font-bold mt-2">Rule of Law</h5>
                            <p className="h-[72px] w-[326px] text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="h-10 w-full flex gap-8 mt-6">
                            <button className="h-10 w-[117px] border border-black rounded-[5px]">Enroll Now</button>
                            <button>$400</button>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                {/* 3 */}
                <div className="h-[558px] w-full bg-[#F7F7F7] border rounded-[5px] mt-8 lg:mt-0">
                   <div className="border rounded-[5px]">
                     <Image
                       src={"/images/web.svg"}
                       alt="webimg"
                       width={380}
                       height={300}
                     />
                    </div>
                    <div className="h-[234px] w-full px-4 pb-6 mt-6">
                        <div className="h-[146px] w-[348px]">
                            <div className="h-6 w-full flex">
                                <p className="h-[21px] w-[300px] text-sm font-semibold">Tech</p>
                                <Image src={"/images/Star.svg"} alt="star" width={48} height={24}/>
                            </div>
                            <h5 className="h-[34px] w-full text-xl font-bold mt-2">Introduction to webflow</h5>
                            <p className="h-[72px] w-[326px] text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="h-10 w-full flex gap-8 mt-6">
                            <button className="h-10 w-[117px] border border-black rounded-[5px]">Enroll Now</button>
                            <button>$400</button>
                        </div>
                    </div>
                </div>
                {/* 3 */}
            </div>
                {/* course2 */}
                <div className="flex items-center justify-center mt-14 lg:w-screen">
                   <Button className="h-12 w-[155px] border border-black bg-white text-black"><span className="h-6 w-[120px] text-base">View All Courses</span></Button>
                 </div>
            </div>
        </div>
        {/* courses */}
    </div>
  )
}

export default Courses