import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign up",
    description: "Sign up",
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