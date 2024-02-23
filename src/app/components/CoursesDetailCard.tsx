import React from "react";
import ButtonLinkPlain from "./ButtonLinkPlain";
import Image, { StaticImageData } from "next/image";
import OurCoursesImage from "@/app/assets/OurCourseImage.png";

interface curriculum {
  Id: string;
  course: string;
}
interface image {
  Id: string;
  image: StaticImageData;
}
interface MyComponentProps {
  title: string;
  description: string;
  images: image[];
  curriculums: curriculum[];
  weeks: string;
  experience: string;
  auther: string;
  href: string;
}
function CoursesDetailCard({
  title,
  description,
  images,
  curriculums,
  weeks,
  experience,
  auther,
  href,
}: MyComponentProps) {
  return (
    <div className=" bg-white rounded-md p-10 my-5">
      <div className="flex justify-between py-5 items-center">
        <div className="py-2">
          <h1 className="font-bold text-lg">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="px-2">
          <ButtonLinkPlain
            title={"View Course"}
            className="border border-gray-200 bg-gray-300"
            href={href}
          />
        </div>
      </div>
      <div className="flex">
        {images.map((image) => (
          <div key={image.Id} className="w-1/3 rounded-md mx-2">
            <Image  src={image.image} alt={""} />
          </div>
        ))}
      </div>
      <div className="flex justify-between p-2">
        <div className="flex justify-normal">
          <div className="mx-1 px-1 border border-gray-100 shadow-sm ">
            <p>{weeks}</p>
          </div>
          <div className="mx-1 px-1 border border-gray-100 shadow-sm ">
            <p>{experience}</p>
          </div>
        </div>
        <div className="px-1 text-sm font-bold border-gray-100 shadow-sm">
          <p>{auther}</p>
        </div>
      </div>
      <div className="flex flex-col border border-gray-100 rounded-md my-10">
        <div className="flex justify-start border-b  border-gray-100 p-5">
          <div className="text-2xl font-bold ">
            <h2>Curriculum</h2>
          </div>
        </div>
        <div className="flex justify-between p-5">
          {curriculums.map((curriculum) => (
            <div key={curriculum.Id} className="border-r border-gray-100">
              <div className="flex flex-col p-2">
                <h1 className="text-2xl font-bold text-left">
                  {curriculum.Id}
                </h1>
                <p className="text-wrap">{curriculum.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesDetailCard;
