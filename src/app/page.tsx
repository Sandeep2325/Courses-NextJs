"use client"
import Image from "next/image";
import logo from "@/app/assets/Logo.png";
import Link from "next/link";
import Buttonlink from "@/app/components/Buttonlink";
import ButtonLinkPlain from "./components/ButtonLinkPlain";
import Companylog from "@/app/assets/company.png";
import Line from "@/app/assets/Line.png";
import HeroImage from "@/app/assets/heroimage.png";
import benfitIcon from "@/app/assets/Icon.png";
import BenefitCard from "./components/BenefitCard";
import OurCoursesCard from "./components/OurCoursesCard";
import OurCoursesImage from "@/app/assets/OurCourseImage.png";
import TestimonialsCard from "./components/TestimonialsCard";
import TestimonialImage from "@/app/assets/TestimonialImage.png";
import PricingCard from "./components/PricingCard";
import AccordionItem from "./components/Accordian";
export default function Home() {
  const benefits = [
    {
      num: "01",
      title: "Flexible learning schedule",
      content:
        "Fit your caswwork around your existing commitments and obligations",
    },
    {
      num: "02",
      title: "Flexible learning schedule",
      content:
        "Fit your caswwork around your existing commitments and obligations",
    },
    {
      num: "03",
      title: "Flexible learning schedule",
      content:
        "Fit your caswwork around your existing commitments and obligations",
    },
    {
      num: "04",
      title: "Flexible learning schedule",
      content:
        "Fit your caswwork around your existing commitments and obligations",
    },
    {
      num: "05",
      title: "Flexible learning schedule",
      content:
        "Fit your caswwork around your existing commitments and obligations",
    },
    {
      num: "06",
      title: "Flexible learning schedule",
      content:
        "Fit your caswwork around your existing commitments and obligations",
    },
  ];
  const Courses = [
    {
      id: "01",
      imageurl: OurCoursesImage,
      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Sandeep",
      title: "Web design fundamentals",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
    },
    {
      id: "02",
      imageurl: OurCoursesImage,
      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Sandeep",
      title: "Web design fundamentals",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
    },
    {
      id: "03",
      imageurl: OurCoursesImage,
      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Sandeep",
      title: "Web design fundamentals",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
    },
    {
      id: "04",
      imageurl: OurCoursesImage,
      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Sandeep",
      title: "Web design fundamentals",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
    },
    {
      id: "05",
      imageurl: OurCoursesImage,
      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Sandeep",
      title: "Web design fundamentals",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
    },
    {
      id: "06",
      imageurl: OurCoursesImage,
      weeks: "4 weeks",
      experience: "Beginner",
      auther: "Sandeep",
      title: "Web design fundamentals",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      href: "/",
    },
  ];

  const testimonials = [
    {
      id: 1,
      author: "Sandeep G",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageurl: TestimonialImage,
      href: "/",
    },
    {
      id: 2,
      author: "Sarah G",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageurl: TestimonialImage,
      href: "/",
    },
    {
      id: 3,
      author: "Sarah L",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageurl: TestimonialImage,
      href: "/",
    },
    {
      id: 4,
      author: "Sandeep G",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageurl: TestimonialImage,
      href: "/",
    },
  ];

  const pricings = [
    {
      plan: "free",
      amount: "$0",
      features: [
        { Id: 1, description: "Access to selected free courses" },
        { Id: 2, description: "Access to selected free courses" },
        { Id: 3, description: "Access to selected free courses" },
        { Id: 4, description: "Access to selected free courses" },
      ],
      href: "/",
    },
    {
      plan: "Pro plan",
      amount: "$70",
      features: [
        { Id: 1, description: "Access to selected free courses" },
        { Id: 2, description: "Access to selected free courses" },
        { Id: 3, description: "Access to selected free courses" },
        { Id: 4, description: "Access to selected free courses" },
      ],
      href: "/",
    },
  ];

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
                <Buttonlink title="Explore Courses" className={""} href="" />
              </li>
              <li className="px-2">
                <ButtonLinkPlain title="View Pricing" className={""} href="" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="p-4 mx-2 bg-white border border-gray-200 rounded-lg ">
          <Image src={Companylog} alt="Company" />
        </div>
        <div className="p-4 mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image src={Companylog} alt="Company" />
        </div>
        <div className="p-4 mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image src={Companylog} alt="Company" />
        </div>
        <div className="p-4 mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image src={Companylog} alt="Company" />
        </div>
        <div className="p-4 mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image src={Companylog} alt="Company" />
        </div>
        <div className="p-4 mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image src={Companylog} alt="Company" />
        </div>
      </div>

      <div className="flex justify-center py-5">
        <div className="rounded-lg bg-gray-50 heroimage">
          <Image src={HeroImage} alt={"Image"} />
        </div>
      </div>

      <div className="flex justify-between py-5 items-center">
        <div className="py-2">
          <h1 className="font-bold text-lg">{"Benifits"}</h1>
          <p>
            {`lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem`}
          </p>
        </div>
        <div className="px-2">
          <ButtonLinkPlain title={"Viewall"} className="" href="" />
        </div>
      </div>

      <div className="flex flex-wrap">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.num}
            num={benefit.num}
            title={benefit.title}
            content={benefit.content}
          />
        ))}
      </div>
      <div className="flex justify-between py-5 items-center">
        <div className="py-2">
          <h1 className="font-bold text-lg">{"Our Courses"}</h1>
          <p>
            {`lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem`}
          </p>
        </div>
        <div className="px-2">
          <ButtonLinkPlain title={"Viewall"} className="" href="" />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* {id:"01",imageurl:OurCoursesImage,weeks:"4 weeks", experience:"Benginner",auther:"Sandeep", title:"Web design fundamentals", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",href:"/" }, */}
        {Courses.map((course) => (
          <OurCoursesCard
            key={course.id}
            imageurl={course.imageurl}
            weeks={course.weeks}
            experience={course.experience}
            author={course.auther}
            title={course.title}
            content={course.content}
            href={course.href}
          />
        ))}
        {/* <OurCoursesCard />
        <OurCoursesCard />
        <OurCoursesCard /> */}
      </div>
      <div className="flex justify-between py-5 items-center">
        <div className="py-2">
          <h1 className="font-bold text-lg">{"Our Testimonials"}</h1>
          <p>
            {`lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem`}
          </p>
        </div>
        <div className="px-2">
          <ButtonLinkPlain title={"Viewall"} className="" href="" />
        </div>
      </div>
      <div className="flex flex-wrap">
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            home={true}
            imageurl={testimonial.imageurl}
            author={testimonial.author}
            content={testimonial.content}
            href={testimonial.href}
          />
        ))}
      </div>
      <div className="pricing flex flex-col">
        <div className="flex justify-between py-5 items-center">
          <div className="py-2">
            <h1 className="font-bold text-lg">{"Our Pricing"}</h1>
            <p>
              {`lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorlllllllllllllllllll lllllllllllllllllllllll llllllllllllllem lorem lorem
            lorem lorem`}
            </p>
          </div>
          <div className="px-2 bg-white p-2 rounded-md">
            <div className="flex justify-between">
              <div className="px-1">
                <Buttonlink title={"Viewall"} className="" href="" />
              </div>
              <div className="px-1">
                <ButtonLinkPlain
                  title={"Viewall"}
                  className="bg-gray-100"
                  href=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-5 flex">
          {pricings.map((pricing) => (
            <PricingCard
              key={pricing.plan}
              plan={pricing.plan}
              amount={pricing.amount}
              features={pricing.features}
              href={pricing.href}
            />
          ))}
        </div>
        <div className="bg-white rounded-md mt-10 p-5 flex">
          <div className="w-2/5 mx-2">
            <div className="p-5">
              <div className="text-2xl font-bold">
                <h1>Frequently</h1>
                <h1>Asked Questions</h1>
              </div>
              <p>
                Still you have any questions? contact out team team@gmail.com
              </p>

              <div className="mt-3">
                <ButtonLinkPlain
                  title={"See All FAQ's"}
                  className="bg-gray-100 border border-gray-100"
                  href=""
                />
              </div>
            </div>
          </div>
          <div className="w-3/5 mx-2">
          <AccordionItem title="Can I enroll in multiple courses at once?">
        {"ppppp"}
      </AccordionItem>
      <AccordionItem title="What kind of supports Can I expect from instructures">
      {"ppppp"}
        
      </AccordionItem>
      <AccordionItem title="Are there any prerequisites for the courses?">
      {"ppppp"}
        
      </AccordionItem>
      <AccordionItem title="Can I download the course materials for offline">
      {"ppppp"}
        
      </AccordionItem>

        

          </div>
        </div>
      </div>
    </section>
  );
}
