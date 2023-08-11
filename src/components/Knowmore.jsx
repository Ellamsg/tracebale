import React from "react";
import { Fade } from "react-awesome-reveal";
export default function Knowmore() {
  return (

  <div className="knowmore relative ">
<img className="w-full lg:h-[800px] h-[400px]" src="cotton.png" alt="cotton"/>
    <div className="text-center absolute top-0 py-5 lg:py-8 lg:px-[120px]">
      <Fade>

     
        <p className="lg:text-[64px] text-[32px] text-[#FFDEE1] font-bold tracking-tighter my-4">TraceBale Powered by CottonConnect </p>
        <p className="lg:text-[20px] text-white lg:px-8 text-[15px]">CottonConnect help brands access more sustainable cotton and other natural fibres to create transparent, traceable and resilient supply chains that will continue to deliver the best raw materials – now and in the future.</p>
        <button className="btn2 my-5">KNOW MORE ABOUT COTTON CONNECT</button>
        </Fade>
    </div>
  </div>
  
  );
}