import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Pricing page",
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