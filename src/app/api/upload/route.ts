import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from "next/server";
import mv from "mv"


export const config = {
    api: {
       bodyParser: false,
    }
};
 

export async function POST(request: NextRequest) {

    try{
const formData=await request.formData()
console.log(formData)
const files = formData.getAll('file');
return NextResponse.json({message:"Data recieved"})

   
    }catch(error:any){
        return NextResponse.json({error:error.message})
    }
}