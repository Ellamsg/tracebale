import React, { useContext } from "react";
import Landing from "../components/Landing";
import Knowmore from "../components/Knowmore";
import Analytics from "../components/Analytics";
export default function Home() {
  return (
    <div className="">
     <Landing/>
     <Analytics/>
     <Knowmore/>
    </div>
  );
}
