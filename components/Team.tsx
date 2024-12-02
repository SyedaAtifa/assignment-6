import React from 'react'
import Image from 'next/image'

function Team() {
  return (
    <div className="h-[1075px] w-[100vw] py-12 px-6 bg-[#F7F7F7] mt-12 md:h-[895px] md:mt-32">
        <div className="h[120px] w-screen">
            <h4 className="h[42px] w-full text-3xl font-bold text-center md:text-5xl">Our team</h4>
            <p className="h-14 md:w-full w-[361px] text-lg font-normal text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="h-[723px] w-screen md:flex-col md:flex md:gap-12">
              {/* team1 */}
            <div className="h-[209px] w-full mt-12 md:flex">
                {/* 1 */}
                <div className="h-[209px] w-full mt-12">
                  <div className="flex items-center justify-center">
                    <Image src={"/images/james.svg"} alt="jamesimg" width={80} height={80}/>
                </div>
                <div className="h-[57px] w-full mt-4">
                    <p className="h-[30px] w-full text-xl font-semibold text-center">James Nduku</p>
                    <p className="h-[27px] w-full text-lg font-normal text-center">Marketing Coordinator</p>
                    <div className="flex items-center justify-center mt-6"><Image src={"/images/SocialIcons.svg"} alt="social" width={100} height={24}/></div>
                </div>
               </div>
               {/* 1 */}

               {/* 2 */}
            <div className="h-[209px] w-full mt-12">
                <div className="flex items-center justify-center">
                    <Image src={"/images/joseph.svg"} alt="jamesimg" width={80} height={80}/>
                </div>
                <div className="h-[57px] w-full mt-4">
                    <p className="h-[30px] w-full text-xl font-semibold text-center">Joseph Munyambu</p>
                    <p className="h-[27px] w-full text-lg font-normal text-center">Nursing Assistant</p>
                    <div className="flex items-center justify-center mt-6"><Image src={"/images/SocialIcons.svg"} alt="social" width={100} height={24}/></div>
                </div>
             </div>
               {/* 2 */}

            {/* 3 */}
            <div className="h-[209px] w-full mt-12">
                <div className="flex items-center justify-center">
                    <Image src={"/images/nga.svg"} alt="jamesimg" width={80} height={80}/>
                </div>
                <div className="h-[57px] w-full mt-4">
                    <p className="h-[30px] w-full text-xl font-semibold text-center">Joseph Ngumbau</p>
                    <p className="h-[27px] w-full text-lg font-normal text-center">Medical Assistant</p>
                    <div className="flex items-center justify-center mt-6"><Image src={"/images/SocialIcons.svg"} alt="social" width={100} height={24}/></div>
                </div>
             </div>
            {/* 3 */}
            
               <div className="flex items-center justify-center md:hidden mt-12">
                 <button className="h-12 w-[89px] border border-black rounded-[5px]"><span className="h-6 w-[89px]text-base">View All</span></button>
               </div>
            </div>
      {/* team1 */}
            
           
        {/* team2 */}
            <div className="h-[209px] w-full mt-12 lg:flex hidden">
                {/* 1 */}
                <div className="h-[209px] w-full mt-12">
                  <div className="flex items-center justify-center">
                    <Image src={"/images/erick.svg"} alt="erickimg" width={80} height={80}/>
                </div>
                <div className="h-[57px] w-full mt-4">
                    <p className="h-[30px] w-full text-xl font-semibold text-center">Erick Kipkemboi</p>
                    <p className="h-[27px] w-full text-lg font-normal text-center">Web Designer</p>
                    <div className="flex items-center justify-center mt-6"><Image src={"/images/SocialIcons.svg"} alt="social" width={100} height={24}/></div>
                </div>
               </div>
               {/* 1 */}

               {/* 2 */}
            <div className="h-[209px] w-full mt-12">
                <div className="flex items-center justify-center">
                    <Image src={"/images/stephen.svg"} alt="stephenimg" width={80} height={80}/>
                </div>
                <div className="h-[57px] w-full mt-4">
                    <p className="h-[30px] w-full text-xl font-semibold text-center">Stephen Kerubo</p>
                    <p className="h-[27px] w-full text-lg font-normal text-center">President of Sales</p>
                    <div className="flex items-center justify-center mt-6"><Image src={"/images/SocialIcons.svg"} alt="social" width={100} height={24}/></div>
                </div>
             </div>
               {/* 2 */}

            {/* 3 */}
            <div className="h-[209px] w-full mt-12">
                <div className="flex items-center justify-center">
                    <Image src={"/images/john.svg"} alt="johnimg" width={80} height={80}/>
                </div>
                <div className="h-[57px] w-full mt-4">
                    <p className="h-[30px] w-full text-xl font-semibold text-center">John Leboo</p>
                    <p className="h-[27px] w-full text-lg font-normal text-center">Dog Trainer</p>
                    <div className="flex items-center justify-center mt-6"><Image src={"/images/SocialIcons.svg"} alt="social" width={100} height={24}/></div>
                </div>
             </div>
            {/* 3 */}
            </div>
          {/* team2 */}
        </div>
    </div>
  )
}

export default Team