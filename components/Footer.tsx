import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className="h-[1411px] w-screen py-12 px-6 flex flex-col gap-12 md:h-[524px] mt-10">
        <div className="h-[261px] w-[380px] md:flex md:w-[1120px] md:h-20">
            <div className="h-[91px] w-[281px] flex items-center justify-center flex-col gap-4 mx-12 md:w-[500px]">
                <h5 className="h-[27px] w-[287px] text-lg font-semibold text-center md:text-start md:w-full">Subscribe to our newsletter</h5>
                <p className="h-12 w-[287px] text-base text-center md:w-full md:text-start">Lorem ipsum dolor sit amet, consectetur adipicsing elit.</p>
            </div>

            <div className="h-[146px] w-[380px] mt-8 md:mt-0 md:grid grid-cols-3 flex flex-col gap-6 md:w-[400px]">
             <div className="flex items-center justify-center md:w-[265px] col-span-2">
               <button className="h-12 w-full border border-black rounded-[5px]"><span className="h-6 w-[356px] text-base">Enter your Email</span></button>
             </div>

             <div className="flex items-center justify-center md:w-[119px]">
               <button className="h-12 w-full border border-black rounded-[5px]"><span className="h-6 w-[71px] text-base">Subscribe</span></button>
             </div>
             <p className="h-[18px] w-full text-[12px] leading-[18px] text-center md:w-[400px] flex justify-start">By subscribing you agree to with our Privacy Policy</p>
            </div>
        </div>

        <div className="h-[811px] w-[172px] flex items-center justify-center flex-col text-center ml-20 md:w-[1152px] md:flex-row md:h-[225px] md:gap-10 lg:mt-40">
            <Image src={"/images/logo.svg"} alt="logo" width={172} height={40}/>
            <div className="h-[225px] w-full">
                <h6 className="w-full h-6 font-semibold">Courses</h6>
                <ul className="h-[170px] w-full text-sm mt-4 flex flex-col items-center justify-between">
                    <li>Business</li>
                    <li>Development</li>
                    <li>Technology</li>
                    <li>Design</li>
                    <li>Programming</li>
                </ul>
            </div>
            {/* 2 */}
            <div className="h-[225px] w-full">
                <h6 className="w-full h-6 font-semibold">Resources</h6>
                <div className="h-[170px] w-full text-sm mt-4 flex flex-col justify-between">
                    <p>Career</p>
                    <p>Resume</p>
                    <p>Learning</p>
                    <p>Interview Preparation</p>
                    <p>Jobs</p>
                </div>
            </div>
            {/* 2 */}

            {/* 3 */}
            <div className="h-[225px] w-full">
                <h6 className="w-full h-6 font-semibold">About Us</h6>
                <div className="h-[170px] w-full text-sm mt-4 flex flex-col justify-between">
                    <p>Contact</p>
                    <p>Help/Support</p>
                    <p>FAQ</p>
                    <p>Terms and Conditions</p>
                    <p>Partners</p>
                </div>
            </div>
            {/* 3 */}
        </div>
        <div className="h-[147px] w-[100vw] border-t border-black">
            <div className="h-[114px] w-full mt-8">
                <div className="h-[66px] w-[345px] text-sm lg:flex lg:w-[1125px] lg:justify-between">
                    <p className="h-[21px] w-full px-16 lg:w-[195px] lg:px-0">2023 Ddsgnr. All right reserved.</p>
                    <div className="h-[21px] w-full flex gap-6 mt-6 ml-4 lg:mt-0 lg:w-[345px]">
                        <p className="border-b border-black">Privacy Policy</p>
                        <p className="border-b border-black">Terms of Service</p>
                        <p className="border-b border-black">Cookies Settings</p>
                    </div>
                    <i className="flex items-center justify-center mt-10 lg:mt-0 pb-9"><Image src={"/images/links.png"} alt="links" width={132} height={24}/></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer