import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Logo.png";
import Buttonlink from "./Buttonlink";
import ButtonLinkPlain from "./ButtonLinkPlain"
function Header() {
  return (
    <nav>
      <div className="topbar flex justify-center">
        <div className="flex items-center">
          <div>
            <p>Free Courses sale ends soon</p>
          </div>
          <div className="ml-2">
            {" "}
            {/* Adjust margin as needed */}
            <p>icon</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-5 py-5 nav-two items-center">
        <div className="flex justify-between items-center">
          <div className="">
            <Image src={logo} width={54} height={54} alt="Logo" />
          </div>
          <div className="">
            <ul className="flex ">
              <li className="px-2">
                <ButtonLinkPlain title="Home" className={""} href=""/>
               
              </li>
              <li className="px-2">
              <ButtonLinkPlain title="Courses" className={""} href=""/>

             
              </li>
              <li className="px-2">
              <ButtonLinkPlain title="About us" className={""} href=""/>

            
              </li>
              <li className="px-2">
              <ButtonLinkPlain title="Pricing" className={""} href=""/>

               
              </li>
              <li className="px-2">
              <ButtonLinkPlain title="Contact" className={""} href=""/>

              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <ul className="flex ">
            <li className="px-2">
            <ButtonLinkPlain title="Sign up" className={""} href=""/>
             
            </li>
            <li className="px-2">
            <Buttonlink title="Login" className={""} href=""/>
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
