import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Courses Detail",
    description: "Courses Detail",
  };
export default function LoginLayout({
    children
}:{
    children:React.ReactNode
}){

return(
    <>
   
    {children}</>
    
)

}