import React from "react";

export default function Landing() {
  return (
    <div className="landing py-6">
        <div className="relative">
            <div className=" text-[#004542] lg:absolute px-6">
                <p className=" font-bold text-[46px]"> Trace it</p>
                <h1 className=" text-[86px] font-bold">from farm to fashion</h1>
                <p className=" w-[60%]">Lorem ipsum dolor sit, amet labore voluptatum minima esse. Ullam, aliquam ex? Minima, dolores incidunt cumque adipisci 
                    deserunt rerum! Eos lau</p>
                    {/** button */}
                    <button className="btn my-4 uppercase">Request a demo</button>
            </div>
        <img className="w-full" src="gardens.png"/>
        </div>
    



    </div>
  );
}
