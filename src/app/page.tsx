import Image from "next/image";
import logo from "@/app/assets/Logo.png";
import Link from "next/link";
import Buttonlink from "@/app/components/Buttonlink"
import ButtonLinkPlain from "./components/ButtonLinkPlain";
export default function Home() {
  return (
    <section className="home pt-5">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="font-bold text-lg shadow-md px-4 rounded-md align-middle flex justify-center py-5r">
            <div>
              {" "}
              <span className="text-orange-400">Unlock</span>{" "}
              <span>your creative potential</span>
            </div>
          </div>
          <div className=" text-xl px-4 rounded-md py-5">
            <p>with online design and developement courses.</p>
          </div>
          <div className="py-5 px-4 rounded-md">
            <ul className="flex justify-center">
            <li className="px-2">
            <Buttonlink title="Explore Courses" className={""} href=""/>
              </li>
              <li className="px-2">
              <ButtonLinkPlain title="View Pricing" className={""} href=""/>

              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
