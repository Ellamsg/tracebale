import React from "react";

export default function Analytics() {
  return (
    <div className="">
      <div className="flex">
        <div className="bg-red">
          <img src="lady2.png" />
        </div>



        <div className="flex justify-center items-end gap-3">


            <div className="bg-green histogram h-[200px]">
             farmers
            </div>
            <div className="bg-yellow histogram h-[100px]">
                man
                </div>
                <div className="bg-blue histogram">
                goat
                </div>
        </div>
      </div>
    </div>
  );
}
