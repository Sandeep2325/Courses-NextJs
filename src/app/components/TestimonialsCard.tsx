import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import TestimonialImage from "@/app/assets/TestimonialImage.png";
import ButtonLinkPlain from "@/app/components/ButtonLinkPlain";

interface MyComponentProps {
  imageurl: StaticImageData;
  content: string;
  author: string;
  href: string;
  home:boolean;
}
function TestimonialsCard({
  imageurl,
  content,
  author,
  href,
  home,
}: MyComponentProps) {
  return (
    <div className={`flex flex-col ${home?"w-1/2":""} my-2  text-center bg-white border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700`}>
      <div className="pb-3 ">
        <p>{content}</p>
      </div>
      <div className="flex justify-between  bg-gray-50 p-2 border-0">
        <div className="flex justify-between items-center">
          <div className="px-2">
            <Image src={imageurl} alt={""} />
          </div>
          <div>
            <p>{author}</p>
          </div>
        </div>
        <div className="items-center rounded-md p-4 bg-gray-200 border border-gray-100 shadow-sm ">
          <ButtonLinkPlain
            title={"Read full story"}
            className=" text-black hover:bg-gray-400"
            href={href}
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
