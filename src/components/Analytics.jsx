import React from "react";

export default function Analytics() {
  return (
    <div className="bg-[#0F265C]">
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="">
          <img className=" lg-h-auto h-[650px] w-[500px]" src="lady2.png" />
        </div>

        <div className="flex   justify-center items-end gap-4 px-2 lg:px-0 lg:gap-7">
          <div>
            <p className="histogram-text">9Lacs</p>
            <div className="bg-[#DDF6E6] h-[297px] histogram ">
              <p className="histogram-text2">farmers registered</p>
            </div>
          </div>

          <div>
            <p className="histogram-text">9Lacs</p>
            <div className="bg-[#FFCCD3] histogram h-[435px]">
              <p className="histogram-text2">farmers registered</p>
            </div>
          </div>
          <div>
            <p className="histogram-text">9Lacs</p>
            <div className="bg-[#88CDA1] histogram h-[165px]">
              <p className="histogram-text2">farmers registered</p>
            </div>
          </div>

          <div>
            <p className="histogram-text">9Lacs</p>
            <div className="bg-[#C7B9F6] histogram h-[353px]">
              <p className="histogram-text2">farmers registered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
