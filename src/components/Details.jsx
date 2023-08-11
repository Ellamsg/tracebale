import React from "react";

export default function Details() {
  return (
    <div className="bg-[#FFDEE1]">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C1B8F6" fill-opacity="1" d="M0,128L34.3,154.7C68.6,181,137,235,206,218.7C274.3,203,343,117,411,74.7C480,32,549,32,617,58.7C685.7,85,754,139,823,149.3C891.4,160,960,128,1029,122.7C1097.1,117,1166,139,1234,160C1302.9,181,1371,203,1406,213.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
      <div className="">
        <div className="lg:px-6 px-3 text-[#0E40BB]">
          <p className="lg:text-[64px] text-[32px] leading-tight font-bold tracking-tighter lg:w-[75%]">Traceable - One Platform to Navigate The Challenges of The Textile Industry</p>
          <p className="lg:text-[20px] lg:w-[80%] py-4">
          TraceBale by CottonConnect revolutionizes supply chain management, by providing complete traceability in 
          the supply chain and help brands target sustainability goals and validate claims. 
          </p>
        </div>

        <div className="flex lg:flex-row  lg:py-5 py-6 flex-col gap-6 items-center ">
          <div>
            <img src="world.png" alt />
         
          </div>

          <div className="flex flex-col px-2  gap-4">
            <div className="isolation ">
              <img src="Isolation4.png" />
          
              <p><span className="span">Regular data  intake </span> at farm/gin level- <span className="span">real- time availability</span> of seed cotton/lint</p>
            
             
               
            </div>
            <div className="isolation ">
              <img src="Isolation3.png" />
              <p className="pl-2">Every <span className="span">transaction </span> at every stage<span className="span">recorded</span> proof of chain of custody</p>
            </div>
            <div className="isolation ">
              <img src="Isolation2.png" />
              <p className=""><span className="span">Process </span> and <span className="span">sale differentiation</span> for all processors</p>
            </div>
            <div className="isolation ">
              <img src="Isolation1.png" />
              <p>Bale tracking back to farm level-<span className="span"> </span> <span className="span">unique farmer/bale/yarn IDs</span> </p>
            </div>
            <button className=" w-[70%] rounded-[10px] bg-[#D73F91] text-[16px] text-white p-[10px]">KNOW PLATFORM IN DETAILS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
