"use client";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Metadata } from 'next';
import CoursesDetailCard from "../components/CoursesDetailCard";
import OurCoursesImage from "@/app/assets/OurCourseImage.png";


function CoursesPage() {
  const Courses = [
    {
      id: "01",
      images:[{Id:"01", image:OurCoursesImage},{Id:"02", image:OurCoursesImage},{Id:"03", image:OurCoursesImage}],
      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Sandeep",
      title: "Web design fundamentals",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
      curriculums:[{Id:"01", course:"Web Design Fundamentals"},{Id:"02", course:"Web Design Fundamentals"},{Id:"03", course:"Web Design Fundamentals"},{Id:"04", course:"Web Design Fundamentals"},{Id:"05", course:"Web Design Fundamentals"}]
    },
    {
      id: "02",
      images:[{Id:"01", image:OurCoursesImage},{Id:"02", image:OurCoursesImage},{Id:"03", image:OurCoursesImage}],

      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Pradeep",
      title: "UI/UX design fundamentals",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
      curriculums:[{Id:"01", course:"Web Design Fundamentals"},{Id:"02", course:"Web Design Fundamentals"},{Id:"03", course:"Web Design Fundamentals"},{Id:"04", course:"Web Design Fundamentals"},{Id:"05", course:"Web Design Fundamentals"}]
    },
    {
      id: "03",
      images:[{Id:"01", image:OurCoursesImage},{Id:"02", image:OurCoursesImage},{Id:"03", image:OurCoursesImage}],

      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Sandeep",
      title: "Web design fundamentals",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
      curriculums:[{Id:"01", course:"Web Design Fundamentals"},{Id:"02", course:"Web Design Fundamentals"},{Id:"03", course:"Web Design Fundamentals"},{Id:"04", course:"Web Design Fundamentals"},{Id:"05", course:"Web Design Fundamentals"}]
    },
 
  ];
 

  return (
    <section className="contatcus mx-5">
      <div className="flex justify-between py-10">
        <div className=" w-1/2 font-bold text-2xl  flex items-center">
          <h1>Online Courses on design and developement</h1>
        </div>
        <div className="w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            praesentium nulla placeat laborum tempore iste, accusamus culpa
            dicta magnam quis quod? Nam, accusamus? Saepe provident nihil
            perspiciatis sint! Doloribus, repudiandae?
          </p>
        </div>
      </div>
      {/* title: string;
  description: string;
  images: image[];
  curriculums: curriculum[];
  weeks:string;
experience: string;
auther: string;
href:string; */}
{Courses.map((course)=>(
<CoursesDetailCard key={course.id} title={course.title} description={course.description} images={course.images} curriculums={course.curriculums} weeks={course.weeks} experience={course.experience} auther={course.auther} href={course.href}/>
))}
    </section>
  );
}

export default CoursesPage;
