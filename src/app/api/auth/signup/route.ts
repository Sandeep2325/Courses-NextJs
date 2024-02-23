import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { fullname, email, password } = reqBody;
    console.log(fullname, email, password)
    const finduser = await User.findOne({ email });
    console.log(finduser);
    if (finduser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });
    const savedUser=await newUser.save()
    return NextResponse.json({message:"Account created successfully"}, {status:200})

  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
