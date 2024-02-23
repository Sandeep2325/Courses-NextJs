import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact us",
    description: "Contact us",
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