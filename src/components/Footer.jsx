import React from "react";

export default function Footer() {
    {/**footer section */}
  return (


    <footer className="bg-[#004542]">
      <div className="">
        <div className="flex justify-center py-6">
          <img className="lg:h-[132px] lg:absolute h-[60px] " src="tracebale.png" />
       
        </div>

        <div className="grid gap-5 lg:gap-0 items-center text-white  text-center justify-items-center lg:grid-cols-4 justify-center">
          <div className=" flex justify-center relative">
            <img src="map1.png" />
            <img className="absolute bottom-5 right-4" src="location.png" alt="location"/>
          </div>
          <div className="lg:text-left">
            <p>United Kingdom (Gblobal headquarters)</p>
            <p>Wework,New Kings Beam House,</p>
            <p>22 Upper Ground, London,SE1 9PD</p>
            <p>T: +44 (0)203 865 7038</p>
            <p>E:info@cottonconnect.org</p>
          </div>
          <div className="lg:text-right">
            <p>india (india Headoffice)</p>
            <p>Gurugram</p>
            <p>T: +44 (0)203 865 7038</p>
            <p>E:info@cottonconnect.org</p>
          </div>
          <div className="flex relative justify-center">
            <img  src="map2.png" />
            <img className="absolute top-7 left-7" src="location.png" alt="location"/>
          </div>
        </div>

        <div className="text-[16px] lg:px-6 text-white  text-center">
          <div className="flex flex-wrap  text-[12px] text-[#B1D2C5] gap-1 lg:gap-4 lg:text-[21px] border-b-2 border-white py-5 lg:px-9  justify-center">
            <p>Platform</p>
            <p>Challenges</p>
            <p>Advantages</p>
            <p>News</p>
            <p>Resources</p>
            <p>Terms & condition</p>
            <p>Privacy policy</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col py-6 px-6 justify-between text-white items-center">
            <div className="pt-5 text-[#B1D2C5]">
             <p>2022 cottonconnect</p>
            </div>
            <div className="flex gap-3">
                <img src="fa_twitter-square.png"/>
                <img src="fa_twitter-square.png"/>
                </div>
                <div className="flex ">
                <img src="rock.png"/>
                <img src="rock2.png"/>
                <img src="rock3.png"/>
                
                </div>
        </div>
      </div>
    </footer>
  );
}
