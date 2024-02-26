import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Logo.png";
import Link from "next/link";
function footer() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center">
        <div className="">
          <Image src={logo} width={54} height={54} alt="Logo" />
        </div>
        <div className="">
          <span>email@gmail.com</span>
        </div>
        <div className="">
          <span>+9189898989</span>
        </div>
        <div className="">
          <span>India</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col px-5">
          <div className="">
            <h3 className="font-bold">Home</h3>
          </div>

          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg  "
              href=""
            >
              {"Benifits"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg  "
              href=""
            >
              {"Our courses"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg "
              href=""
            >
              {"Our testimonials"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg "
              href=""
            >
              {"Our FAQs"}
            </Link>
          </div>
        </div>

        <div className="flex flex-col px-5">
          <div className="">
            <h3 className="font-bold">Courses</h3>
          </div>

          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg  "
              href=""
            >
              {"Benifits"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg  "
              href=""
            >
              {"Our courses"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg "
              href=""
            >
              {"Our testimonials"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg "
              href=""
            >
              {"Our FAQs"}
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-5">
          <div className="">
            <h3 className="font-bold">Social Profiles</h3>
          </div>

          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg  "
              href=""
            >
              {"Benifits"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg  "
              href=""
            >
              {"Our courses"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg "
              href=""
            >
              {"Our testimonials"}
            </Link>
          </div>
          <div className="">
            <Link
              className="inline-block  py-2 rounded-lg "
              href=""
            >
              {"Our FAQs"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
