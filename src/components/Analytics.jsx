import React from "react";
import { Fade } from "react-awesome-reveal";
export default function Analytics() {
  return (
    <div className="bg-[#0F265C]">
         
      <div className="flex lg:flex-row md:flex-row  flex-col gap-6">
      <Fade  direction="up">
        <div className="class flex object-contain bg-contain">
          <img className=" lg-h-[650px] lg:w-auto w-full h-[650px]  " src="lady2.png" />
        </div>
     
        </Fade>
        <div className="flex   justify-center items-end gap-2  px-2 lg:px-3 lg:gap-6">
        <Fade  direction="up">
          <div>
            <p className="histogram-text">9Lacs</p>
            <div className="bg-[#DDF6E6] h-[297px] histogram ">
              <p className="histogram-text2">Farmer Registered</p>
            </div>
          </div>

          <div>
            <div className="histogram-text">
            <p className=" ">1.4</p>
            <p className="">BILLION</p>
            </div>
           
            <div className="bg-[#FFCCD3] histogram h-[435px]">
              <p className="histogram-text2">T-Shirt Mapped</p>
            </div>
          </div>

          <div>
            <p className="histogram-text">18</p>
            <div className="bg-[#88CDA1] histogram h-[165px]">
              <p className="histogram-text2">Retailers Onboard</p>
            </div>
          </div>

          <div>
            <p className="histogram-text">12.5Lacs</p>
            <div className="bg-[#C7B9F6]  histogram h-[353px]">
              <p className="text-center histogram-text2   ">MT of Sustainable cotton Processed</p>
            </div>
        
          </div>
          </Fade>
        </div>
        
      </div>
     
    </div>
  );
}
