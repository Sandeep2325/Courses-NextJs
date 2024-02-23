import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "About us",
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