import React from "react";

export default function Demo() {
  return (
    <div className="py-7 relative lg:h-[770px] ">
       
      {/*
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FFDEE1" fill-opacity="1" d="M0,160L34.3,149.3C68.6,139,137,117,206,122.7C274.3,128,343,160,411,149.3C480,139,549,85,617,96C685.7,107,754,181,823,176C891.4,171,960,85,1029,53.3C1097.1,21,1166,43,1234,53.3C1302.9,64,1371,64,1406,64L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>*/}
      <div className="flex bg-green justify-items-center  px-6 gap-5 justify-center">
        <div className="">
          <img
            src="macbook.png"
            className="h-[396px] w-[750px]"
            alt="macbook"
          />
        </div>

        <div className="bg-red w-2/4 ">
          <h2 className="lg:text-[64px] leading-tight lg:w-[70%]">
            SAY HELLO TO TRACEBALE
          </h2>
          <p className="lg:w-[66%] text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicin ro expedita! Nam
            doloribus laborum in repellendus nisi autem recusan iste unde fugit!
          </p>
          <button className="btn my-4">REQUEST A DEMO</button>
        </div>
      </div>
      <div className="">
      <svg className="absolute  bottom-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 320"><path fill="#FFDEE1" fill-opacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path></svg>
      </div>


      <svg className="absolute bottom-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C1B8F6" fill-opacity="1" d="M0,96L1440,32L1440,320L0,320Z"></path></svg>
    </div>
  );
}
