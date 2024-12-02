import React from 'react'
import Image from 'next/image'

function Students() {
  return (
    <div className="h-[682px] w-screen py-12 px-6 mt-12 lg:h-[830px]">
        <div className="h-[120px] w-[361px] flex flex-col items-center justify-center md:h-[109px] md:w-[560px]">
            <h4 className="h-12 w-full text-[32px] leading[41px] font-bold md:hidden">What Our Student Say</h4>
            <h2 className="h-[58px] w-[560px] text-[32px] font-bold lg:text-5xl hidden md:block md:ml-24">Customer testimonials</h2>
            <p className="h-14 w-full text-lg font-normal text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="h-[418px] w-[380px] mt-12 md:flex md:gap-12 md:mx-6">
          <div className="h-[322px] w-full p-8 border border-black">
            <Image src={"/images/Stars.svg"} alt="stars" width={116} height={19}/>
            <div className="h-[215px] w-[316px]">
              <p className="h-[135px] w-full text-lg my-6">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
              <Image src={"/images/james1.svg"} alt="james" width={254} height={54}/>
            </div>
          </div>
          {/* 2 */}
          <div className="h-[322px] w-full p-8 border border-black hidden md:block">
            <Image src={"/images/Stars.svg"} alt="stars" width={116} height={19}/>
            <div className="h-[215px] w-[316px]">
              <p className="h-[135px] w-full text-lg my-6">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
              <Image src={"/images/erick1.svg"} alt="erick" width={254} height={54}/>
            </div>
          </div>
          {/* 2 */}

          {/* 3 */}
          <div className="h-[322px] w-full p-8 border border-black hidden md:block">
            <Image src={"/images/Stars.svg"} alt="stars" width={116} height={19}/>
            <div className="h-[215px] w-[316px]">
              <p className="h-[135px] w-full text-lg my-6">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."&quot;</p>
              <Image src={"/images/stephen1.svg"} alt="stephen" width={254} height={54}/>
            </div>
          </div>
          {/* 3 */}
            
        </div>
         <div className="h-12 w-[380px] flex justify-between mt-12 lg:w-[1180px] md:mx-6">
           <Image src={"/images/Slider Dots.svg"} alt="dots" width={72} height={8}/>
           <Image src={"/images/Slider.png"} alt="slider" width={111} height={48}/>
          </div>
    </div>
  )
}

export default Students
