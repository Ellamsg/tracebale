
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {

  
  let Links = [
    { name: "Home", link: "/" },
    { name: "Store", link: "/" },
    { name: "Contact", link: "/" },
   
    
   
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" bg-oceanblue z-10 sticky lg:py-0   top-0 ">

      <div className=" sticky md:px-6  top-0 left-0 md:p-0  lg:text-xl  text-[16px]">
        <div className="md:flex items-center py-3  md:py-4 justify-between lg:gap-6  ">
          <div className="md:pl-0 pl-2 ml-2 lg:ml-0   ">
          <img src="tracebale2.png" className=""/>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className=" absolute  right-2 top-[28px] z-10 cursor-pointer md:hidden"
          >
            <div className="w-4  mr-2  "
              name={open ? "close" : "menu"}
             
            >

              <div className="dsh">
                  hghg
              </div>
              <div className="dsh">
                                  
                </div>
                <div className="dsh">
                                  
                </div>
            </div>
            
          </div>

          <ul
            className={`md:flex md:items-center px-4 md:px-0 py-4 md:py-0  bg-white md:bg-transparent text-sm  bg-oceanblue w-full justify-end  text-black
         absolute md:static md:z-auto  
        left-0   transition-all duration-500 
        ease-in ${open ? "top-7" : "top-[-490px]"}`}
          >
            <div className="md:flex md:items-center  font-name">
              {Links.map((link) => (
                <div className="uppercase">
                  <li className=" px-2 lg:py-0 py-3 ">
                    <Link to={link.link} className="  duration-500">
                      {link.name}
                    </Link>
                  </li>
                 
                </div>
                
              ))}
            </div>
            <Link to="Cart">
              <div className=" pl-3 justify-center md:py-0 py-[5px] border-boxwind border-2 md:border-0  flex">
              
              <div className="pt-[6px] ">
         
              </div>
              </div>
              
           
              </Link>
           
          </ul>
        </div>
      </div>
    </div>
  );
}