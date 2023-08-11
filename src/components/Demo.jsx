import React from "react";

export default function Demo() {
  return (
    <div className="py-7 bg-[#B4F5FF] relative lg:h-[770px] ">
      {/* Demo section
       */}
      <div className="flex lg:flex-row flex-col  justify-items-center  px-6 gap-5 justify-center">
        <div className="">
          <img
            src="macbook.png"
            className="lg:h-[396px] lg:w-[750px]"
            alt="macbook"
          />
        </div>

        <div className="lg:w-2/4 ">
          <h2 className="lg:text-[64px] text-[#004542] font-bold leading-tight lg:w-[70%]">
            SAY HELLO TO TRACEBALE
          </h2>
          <p className="lg:w-[66%] text-[#004542] text-[15px] lg:text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicin ro expedita! Nam
            doloribus laborum in repellendus nisi autem recusan iste unde fugit!
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
        <div className=" justify-center px-3 flex z-30 absolute lg:bottom-[120px]">
          <div className="border-r-2 px-5 lg:text-[48px] border-[#004542]">
            <p>TRACE THE ORIGIN</p>
          </div>

          <div className="lg:w-[60%] lg:text-[20px] text-[12px] px-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque veritatis consequatur soluta fuga recusandae corporis
              sed natus magnam, amet odit. Enim nihil voluptas voluptatibus
              nobis eaque, cum veniam incidunt optio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
