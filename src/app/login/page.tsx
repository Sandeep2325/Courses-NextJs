"use client";
import TestimonialsCard from "../components/TestimonialsCard";
import { yupResolver } from "@hookform/resolvers/yup";
import TestimonialImage from "@/app/assets/TestimonialImage.png";
import Input from "@/app/components/Input";
import * as Yup from "yup";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { login } from "@/redux/features/loginSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Base_url } from "@/app/config";
// import { Base_url } from "../config";
import Cookies from 'js-cookie';
export default function LoginPage() {
  const [loader, setLoader] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();
  const signValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid Email"),
    password: Yup.string()
      .required("Password is required")
      .min(1, "Password must be atleast 8 characters"),
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
    try {
      setLoader(true);
      const response = await axios.post(`${Base_url}api/token/`, data);
      console.log(response);
      ////////////////////////////////////////Dspatching to the redux store reducers/////////////////////////////////////////
      dispatch(login(data.email));
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (response.status === 200) {
        Cookies.set('auth_token', response.data.access, { expires: 100 });
        toast.success(response.data.message)
        const user_id=await axios.get(`${Base_url}getdata/?token=${response.data.access}`);
        Cookies.set("user_id", user_id.data.id, { expires: 100 })
        router.push("/chat");
      }
      else {
        toast.success("Invalid credentials")
      }
      
    } catch (error: any) {
      console.log("Signup failed: ", error.response.data.detail);
      toast.error(error.response.data.detail);
    } finally {
      setLoader(false);
    }

  };
  /////////////////////////////////////////////////////////redux selector to select the state from redux store//////////////////////////////////////////
  const reduxemail = useAppSelector((state) => state.loginReducer.value.email);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <section className="auth mx-5">
      <Toaster/>
      <div className="flex items-center">
        <div className="w-3/5 sm:w-1/1 mx-2 flex flex-col">
          <div className="details">
            {/* <h1>Email</h1>:{reduxemail} */}
            <div>
              <h1 className="text-2xl font-bold">Students Testimonials</h1>
              <p>
                {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                voluptatibus ducimus, qui consectetur ipsum quo adipisci esse
                placeat dolorum repudiandae laudantium ullam non numquam
                officiis corporis. Unde modi quas architecto!`}
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
        <div className="w-2/5 sm:w-1/1">
          <div className="bg-white rounded-md py-11 px-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">{"Login"}</h1>
              <p>{"Welcome back! Please login to access your account"}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
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

              <div className="text-center mt-6" style={{ display: "contents" }}>
                <Button type={"submit"} title={loader ? "Proccessing..." : "Login"} disabled={loader} />
                {/* <button
                  type="submit"
                  className={`inline-block w-full bg-orange-400 text-white px-4 py-2 rounded-lg  hover:bg-gray-300 `}
                >
                  {"Login"}
                </button> */}
              </div>
              <div>
                <span>{"Don't have an account"}</span>{" "}
                <Link className="border-b border-blue-400" href={"/signup"}>
                  {"Signup"}

                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
