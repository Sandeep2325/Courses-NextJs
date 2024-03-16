import React from "react";
import OurCoursesImage from "@/app/assets/OurCourseImage.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Base_url, Base_urll } from "../config";
interface MyComponentProps {
  imageurl: string;
  weeks: string;
  experience: string;
  author: string;
  title: string;
  content: string;
  
}
function OurCoursesCard({
  imageurl,
  weeks,
  experience,
  author,
  title,
  content,
 
}: MyComponentProps) {
  return (
    
    <div className="max-w-sm  m-2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-3">
        <Link href={""}>
          <Image className="rounded-md" src={Base_urll+imageurl} alt="" width={300} height={300}/>
        </Link>
        <div className="flex justify-between p-2">
          <div className="flex justify-normal">
            <div className="mx-1 px-1 border border-gray-100 shadow-sm ">
              <p>{weeks}</p>
            </div>
            <div className="mx-1 px-1 border border-gray-100 shadow-sm ">
              <p>{experience}</p>
            </div>
          </div>
          <div className="px-1 text-sm font-bold">
            <p>{author}</p>
          </div>
        </div>
        <div className="py-2">
          <Link href={""}>
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 text-gray-700 dark:text-gray-400">{content}</p>
          <Link
            href={""}
            className="rounded-md block w-full px-3 py-2 text-sm font-medium text-center text-black bg-gray-300  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get it now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurCoursesCard;
