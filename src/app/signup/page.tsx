"use client";
import TestimonialsCard from "../components/TestimonialsCard";
import { yupResolver } from "@hookform/resolvers/yup";
import TestimonialImage from "@/app/assets/TestimonialImage.png";
import Input from "@/app/components/Input";
import Buttonlink from "../components/Buttonlink";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { signUp } from "@/redux/features/signupSlice";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { UseSelector } from "react-redux";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter()
  const [loader, setLoader] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  const signValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full Name is required"),
    email: Yup.string().required("Email is required").email("Invalid Email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be atleast 8 characters"),
    cpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),

  });
  const formOptions = { resolver: yupResolver(signValidationSchema) };
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
  const onSubmit = async (data: any) => {
    setLoader(true)
    try {
      ////////////////////////////////////////Dspatching to the redux store reducers/////////////////////////////////////////
      console.log(data)
      const response = await axios.post("/api/auth/signup", data)
      console.log(response.data.message)
      if (response.status === 200) {
        toast.success(response.data.message+" Redirecting to login page")
        await delay(2000)
        router.push("/login")
      }
      else {
        toast.success("Failed to create account")

      }

      dispatch(signUp(JSON.stringify(data))); ///
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    } catch (error: any) {
      toast.error(error.response.data.error)
    } finally {
      setLoader(false)
    }
  };
  function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /////////////////////////////////////////////////////////redux selector to select the state from redux store//////////////////////////////////////////
  const reducRetrivedFullname = useAppSelector(
    //
    (state) => state.signupReducer.value.fullname //
  ); //instead of using useSelector directly, using type declared useSelector from store.ts                         //
  const reducRetrivedEmail = useAppSelector(
    (state) => state.signupReducer.value.email
  ); //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <section className="auth mx-5">
      <Toaster />
      <div className="flex items-center">
        <div className="w-3/5 mx-2 flex flex-col">
          <div className="details">
            {/* <div>
              <h1>fullname</h1>:{reducRetrivedFullname}
              <h1>email</h1>:{reducRetrivedEmail}
            </div> */}
            <div>
              <h1 className="text-2xl font-bold">Students Testimonials</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                voluptatibus ducimus, qui consectetur ipsum quo adipisci esse
                placeat dolorum repudiandae laudantium ullam non numquam
                officiis corporis. Unde modi quas architecto!
              </p>
            </div>
          </div>
          <div className="w-full">
            <TestimonialsCard
              home={false}
              imageurl={TestimonialImage}
              author={"Sandeep Gowda"}
              content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            voluptatibus ducimus,`}
              href={"/"}
            />
          </div>
        </div>
        <div className="w-2/5">
          <div className="bg-white rounded-md py-11 px-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Sign up</h1>
              <p>Create an account to unlock to exclusive features</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label={"Full Name"}
                type={"text"}
                placeholder={"Enter Full Name"}
                className={""}
                error={errors.fullname?.message || ""}
                {...register("fullname")}
              />

              <Input
                label={"Email"}
                type={"email"}
                placeholder={"Enter Email"}
                error={errors.email?.message || ""}
                className={""}
                {...register("email")}
              />

              <Input
                {...register("password")}
                label={"Password"}
                type={"password"}
                placeholder={"Enter Password"}
                error={errors.password?.message || ""}
                className={""}
              />

              <Input
                {...register("cpassword")}
                label={"Confirm Password"}
                type={"password"}
                placeholder={"Confirm Password"}
                error={errors.cpassword?.message || ""}
                className={""}
              />

              <div className="text-center mt-6" style={{ display: "contents" }}>
                <Button type={"submit"} title={loader ? "Proccessing..." : "Login"} disabled={loader} />
                {/* <button
                  type="submit"
                  className={`inline-block w-full bg-orange-400 text-white px-4 py-2 rounded-lg  hover:bg-gray-300 `}
                >
                  {"Sign up"}
                </button> */}
              </div>
              <div>
                <span>Already have an account?</span>{" "}
                <Link className="border-b border-blue-400" href={"/login"}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
