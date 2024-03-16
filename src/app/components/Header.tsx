"use client";
import React, { useEffect, useState, memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Logo.png";
import Buttonlink from "./Buttonlink";
import ButtonLinkPlain from "./ButtonLinkPlain";
import Cookies from "js-cookie";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  const [token, setToken] = useState("");
  console.log(token);
  const handleLogout = () => {
    Cookies.remove("auth_token")
    // Cookies.set("auth_token", "", { expires: 100 });
    setToken("");   
    router.push("/login");
  };

  useEffect(() => {
    setToken(Cookies.get("auth_token") || "");
  });
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
                <ButtonLinkPlain title="Home" className={""} href={"/"} />
              </li>
              <li className="px-2">
                <ButtonLinkPlain
                  title="Courses"
                  className={""}
                  href="/courses"
                />
              </li>
              <li className="px-2">
                <ButtonLinkPlain
                  title="About us"
                  className={""}
                  href="/aboutus"
                />
              </li>
              <li className="px-2">
                <ButtonLinkPlain
                  title="Pricing"
                  className={""}
                  href="/pricing"
                />
              </li>
              <li className="px-2">
                <ButtonLinkPlain
                  title="Contact"
                  className={""}
                  href="/contactus"
                />
              </li>
              <li className="px-2">
                <ButtonLinkPlain title="Chat" className={""} href="/chat" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <ul className="flex ">
            <li className="px-2">
              {token?"":(<ButtonLinkPlain
                title="Sign up"
                className={""}
                href={"/signup"}
              />)}
              
            </li>
            <li className="px-2">
              {token ? (
                <Button
                  type={"button"}
                  title={"Logout"}
                  disabled={false}
                  onClick={handleLogout}
                />
              ) : (
                <Buttonlink title="Login" className={""} href={"/login"} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
