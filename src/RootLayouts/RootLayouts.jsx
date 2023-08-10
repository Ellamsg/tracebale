import React from "react"
import Footer from "../components/Footer"
import { Link,Outlet } from "react-router-dom"
import Nav from "../components/Nav"
export default function RootLayouts(){
    return(

<div className="">
  
  <Nav/>
    <Outlet/>
  <Footer/>
</div>

    )

}