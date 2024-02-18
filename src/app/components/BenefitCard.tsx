import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import benfitIcon from "@/app/assets/Icon.png"
interface MyComponentProps {
    num: string;
    title: string;
    content:string;
  }
function BenefitCard({num,title,content}:MyComponentProps) {
  return (
    <div className="max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col">
            <div className="py-3 flex justify-end">
              {" "}
              <p className="benefit-number">{num}</p>
            </div>
          </div>
          <div className="py-3 ">
            <h1 className="font-bold">{title}</h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {content}
            </p>
          </div>
          <div className="py-3 flex justify-end">
            <Link
              className={`inline-block bg-gray-200 text-white px-4 py-2 rounded-lg  hover:bg-gray-300`}
              href={""}
            >
              <Image src={benfitIcon} alt="" />
            </Link>
          </div>
        </div>
  )
}

export default BenefitCard