import Benifits from "@/models/benifitsModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";


connect()
export async function GET(request: NextRequest) {
try{
    const data=await Benifits.find({})
    return NextResponse.json({message:"Data fetched",data:data},{status:200})
}catch(error:any){
    return NextResponse.json({error:error.message}, {status:400})
}

}