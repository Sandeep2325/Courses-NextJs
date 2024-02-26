import Contact from "@/models/contactModel"
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect()
export async function POST(request: NextRequest) {


    try {
        const data = await request.json()
       
        const newcontact = new Contact({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
            base64Image: data.base64Image

        })
        const saveContact = await newcontact.save()

        return NextResponse.json({ message: "Thank you for contacting us, our team will get back to you soon." })


    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}