import React from "react";

export default function Demo() {
  return (
    <div className="py-7 bg-[#B4F5FF] relative h-[870px] md:h-[1050px] lg:h-[770px] ">
      {/* Demo section
       */}
      <div className="flex lg:flex-row flex-col  justify-items-center px-3  lg:px-6 gap-5 justify-center">
        <div className="">
          <img
            src="macbook.png"
            className="lg:h-[396px] lg:w-[750px]"
            alt="macbook"
          />
        </div>

        <div className="lg:w-2/4 z-30">
            <div className="lg:text-[64px] flex lg:gap-0 gap-2 lg:flex-col flex-row  tracking-tighter text-[24px]  text-[#004542] font-bold leading-tight ">
            <h2 className="">
            SAY HELLO 
          </h2>
          <h2>TO TRACEBALE</h2>
            </div>
         
          <p className="lg:w-[66%] text-[#004542]  text-[15px] lg:text-[20px]">
          CottonConnect offers a unique and customizable platform - 
          TraceBale, designed specifically for the textile industry.
          </p>
          <button className="btn my-4">REQUEST A DEMO</button>
        </div>
      </div>
      <div className="">
        <svg
          className="absolute  bottom-0 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 550 320"
        >
          <path
            fill="#FFDEE1"
            fill-opacity="1"
            d="M0,192L1440,288L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="">
        <svg
          className="absolute bottom-0 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#C1B8F6"
            fill-opacity="1"
            d="M0,96L1440,32L1440,320L0,320Z"
          ></path>
          ffffff
        </svg>
        <div className=" justify-center px-3 lg:items-center  flex lg:flex-row flex-col z-30 absolute lg:bottom-[20px]">
          <div className="lg:border-r-2 text-[#004542] lg:py-4  lg:px-5 font-bold text-[24px] lg:text-[48px] border-[#004542]">
            <p>TRACE THE ORIGIN</p>
          </div>

          <div className="lg:w-[60%] text-[#333333] lg:text-[20px] text-[15px] lg:px-6">
            <p>
            By incorporating profiles of the processors involved at each stage, TraceBale empowers brands to gain insights into the origins of their products. Retailers can now 
            understand and verify the precise sources of their materials, enhancing transparency and accountability. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
