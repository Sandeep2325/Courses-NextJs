"use client";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function page() {
  const contactValidationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email("Invalid Email"),
    phone: Yup.string()
      .required("Phone No is required")
      .max(10, "Enter Valid Phone no"),
    subject: Yup.string()
      .required("Subject is required")
      .max(250, "Enter Less than 250 characters"),
    message: Yup.string()
      .required("Message is required")
      .max(250, "Enter Less than 500 characters"),
  });
  const formOptions = { resolver: yupResolver(contactValidationSchema) };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState,
  } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };
  return (
    <section className="contatcus mx-5">
      <div className="flex justify-between py-10">
        <div className=" w-1/2 font-bold text-2xl  flex items-center">
          <h1>Contact us</h1>
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
      <div className="flex bg-white rounded-md p-10">
        <div className="w-10/12">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex">
                <div className="w-1/2 p-5">
                  <Input
                    label={"First Name"}
                    type={"text"}
                    placeholder={"First Name"}
                    className={""}
                    error={errors.firstname?.message || ""}
                    {...register("firstname")}
                  />
                </div>
                <div className="w-1/2 p-5">
                  <Input
                    label={"Last Name"}
                    type={"text"}
                    placeholder={"First Name"}
                    className={""}
                    {...register("lastname")}
                    error={errors.lastname?.message || ""}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 p-5">
                  <Input
                    label={"Email"}
                    type={"email"}
                    placeholder={"Email"}
                    className={""}
                    error={errors.email?.message || ""}
                    {...register("email")}
                  />
                </div>
                <div className="w-1/2 p-5">
                  <Input
                    label={"Phone"}
                    type={"number"}
                    placeholder={"Phone"}
                    className={""}
                    error={errors.phone?.message || ""}
                    {...register("phone")}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-full p-5">
                  <Input
                    label={"Subject"}
                    type={"text"}
                    placeholder={"Subject"}
                    className={""}
                    error={errors.subject?.message || ""}
                    {...register("subject")}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-full p-5">
                  <Input
                    label={"Message"}
                    type={"text"}
                    placeholder={"Message"}
                    className={"resize-none w-full h-24 p-2 border"}
                    error={errors.message?.message || ""}
                    {...register("message")}
                  />
                </div>
              </div>
              <div className="flex justify-center p-5">
                <Button type={"submit"} title={"Send your message"} />
              </div>
            </form>
          </div>
        </div>
        <div className="w-3/12 flex flex-col px-9">
          <div className="bg-gray-100 border border-gray-200 rounded-md flex flex-col p-7 my-5">
            <div className="rounded-md bg-gray-200 border-gray-300 flex items-center justify-center">
              <Image src={""} alt="X" width={50} height={50} />
            </div>
            <div className="text-lg  text-center">
              <h1>Support@skill.com</h1>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-md flex flex-col p-7 my-5">
            <div className="rounded-md bg-gray-200 border-gray-300 flex items-center justify-center">
              <Image src={""} alt="X" width={50} height={50} />
            </div>
            <div className="text-lg  text-center">
              <h1>+911234567890</h1>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-md flex flex-col p-7 my-5">
            <div className="rounded-md bg-gray-200 border-gray-300 flex items-center justify-center">
              <Image src={""} alt="X" width={50} height={50} />
            </div>
            <div className="text-lg  text-center">
              <h1>India</h1>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-md flex flex-col p-7 my-5">
            <div className="rounded-md bg-gray-200 border-gray-300 flex items-center justify-center">
              <Image src={""} alt="X" width={50} height={50} />
            </div>
            <div className="text-lg  text-center">
              <h1>Social Profiles</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
