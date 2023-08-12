import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
export default function Nav() {
  let Links = [
    { name: "PLATFORM", link: "/" },
    { name: "ADVANTAGES", link: "/" },
    {
      name: (
        <div className=" flex gap-1">
          <p>NEWS & RESOURCES</p>

          <img src="v-shape.png" className="h-3 lg:mt-[3px] w-3" />
        </div>
      ),
      link: "/",
    },
    { name: "REQUEST FOR DEMO", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" bg-oceanblue bg-[#CBDAFB] z-50 sticky lg:py-0   top-0 ">
      <div className=" sticky md:px-1 lg:px-6  top-0 left-0 md:p-0  lg:text-xl  text-[16px]">
        <div className="md:flex items-center py-3 lg:py-4  md:py-2 justify-between lg:gap-6  ">
          <div className="md:pl-0 pl-2 ml-2 lg:ml-0   ">
            <img src="tracebale2.png" className="" />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className=" absolute  right-2 top-[28px] z-10 cursor-pointer md:hidden"
          >
            <div className="w-4  mr-2  " name={open ? "close" : "menu"}>
              <div className="dsh">
                <AiOutlineAlignRight className="text-[30px]" />
              </div>
              <div className="dsh"></div>
              <div className="dsh"></div>
            </div>
          </div>

          <ul
            className={`md:flex md:items-center px-4 md:px-0 py-4 md:py-0 
             bg-white md:bg-transparent text-sm  bg-oceanblue w-full justify-end  text-black
         absolute md:static md:z-auto  
        left-0   transition-all duration-500 
        ease-in ${open ? "top-7" : "top-[-490px]"}`}
          >
            <div className="md:flex md:items-center  font-name">
              {Links.map((link) => (
                <div className="">
                  <li className="lg:text-[16px] text-[11px] text-[#0F265C] font-semibold px-2 lg:py-0 py-3 ">
                    <Link to={link.link} className="  duration-500">
                      {link.name}
                    </Link>
                  </li>
                </div>
              ))}
            </div>
            <Link to="Cart">
              <div
                className="  pl-3 justify-center md:py-0 py-[5px]
               border-boxwind border-2 md:border-0  flex"
              >
                <div className=" btn pt-[6px] ">
                  <button>LOGIN</button>
                </div>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
