import React from 'react'

function Achievments() {
  return (
    <div className="w-[100vw] h-[451px] px-6 py-12 md::w-full md:h-[264px] md:m-16 flex flex-col items-center">
        <div className="h-[147px] w-full">
          <h2 className="h-[42px] w-full text-3xl font-bold text-center lg;:h-[58px] lg:w-[1152px] lg:text-5xl">Our Achievments</h2>
          <p className="h-[81px] w-[362px] lg:w-[1152px] text-lg text-center lg:mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        {/* list */}
        <div className="h-[176px] w-[380px] md:w-[100vw] md:h-[96px] mt-[77px] pl-6 md:flex items-center justify-center">
           <div className="h-[76px] w-full py-2 flex lg:w-[616px]">
             <div className="h-[60px] w-[182px] lg:w-[296px] md:h-20">
                <h3 className="h-[28px] w-[46px] font-bold text-xl lg:text-[40px] lg:h-12">+200</h3>
                <p className="h-6 w-[59px]">Courses</p>
             </div>
             <div  className="h-[60px] w-[182px] lg:w-[296px] lg:h-20">
                <h3 className="h-[28px] w-[46px] font-bold text-xl text-center lg:text-[40px] lg:h-12">50K</h3>
                <p className="h-6 w-[60px] text-center">Mentors</p>
             </div>
            </div>

            <div className="h-[76px] w-full py-2 flex lg:w-[616px]">
              <div className="h-[60px] w-[182px] lg:w-[296px] lg:h-20">
                 <h3 className="h-[28px] w-[46px] font-bold text-xl lg:text-[40px] lg:h-12">370k</h3>
                 <p className="h-6 w-16 text-center">Students</p>
               </div>
               <div className="h-[60px] w-[182px] lg:w-[296px] lg:h-20">
                  <h3 className="h-[28px] w-[46px] font-bold text-xl lg:text-[40px] lg:h-12">100+</h3>
                  <p className="h-6 w-[96px] text-center">Recognition</p>
               </div>
             </div>
         </div>

        {/* list */}
    </div>
  )
}

export default Achievments