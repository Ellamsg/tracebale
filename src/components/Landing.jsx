import React from "react";

export default function Landing() {
  return (
    <div className="landing py-6 relative">
        <div className="">
            <div className=" text-[#004542] absolute px-3
             lg:leading-normal leading-tight lg:px-6">
                <p className=" font-bold text-[28px] lg:text-[46px]"> Trace it</p>
                <h1 className="text-[53px] lg:text-[86px] font-bold">from farm to fashion</h1>
                <p className=" lg:w-[60%] text-[14px] lg:text-[20px]">Lorem ipsum dolor sit, amet labore voluptatum minima esse. Ullam, aliquam ex? Minima, dolores incidunt cumque adipisci 
                    deserunt rerum! Eos lau</p>
                    {/** button */}
                    <button className="btn my-4 uppercase">Request a demo</button>
            </div>
        <img className="w-full lg:h-auto  h-[500px] lg:pt-0 pt-[200px]" src="gardens.png"/>
        </div>
    



    </div>
  );
}
