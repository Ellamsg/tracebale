import React from "react";

export default function Landing() {





    
  return (
    <div className="landing pt-6 relative ">
        <div className="">
            <img className="absolute lg:bottom-[90px]" src="farm.png"/>
            <img className="absolute lg:bottom-[190px] lg:left-9" src="line3.png"/>
            <img className="absolute lg:bottom-[260px] lg:right-6" src="obj.png"/>
            <img className="absolute lg:bottom-[340px] lg:left-[480px]" src="line2.png"/>
            <img className="absolute lg:top-9 lg:right-6" src="cloth.png"/>
            <div className=" text-[#004542] absolute px-3
             lg:leading-normal leading-tight lg:px-6">
                <p className=" font-bold text-[28px] lg:text-[46px]"> Trace  it:</p>
                <h1 className="text-[53px] lg:text-[86px] font-bold tracking-tighter">From Farm to Fashion</h1>
                <p className=" lg:w-[60%] text-[14px] lg:text-[20px]">TraceBale is an innovative traceability platform specifically designed for the fashion and textile industry , leading the way in its field.</p>
                    {/** button */}
                    <button className="btn my-4 uppercase">Request a demo</button>
            </div>
        <img className="w-full lg:h-full  h-[500px] lg:pt-0 pt-[200px]" src="garden.png"/>
        </div>
    </div>
  );
}
