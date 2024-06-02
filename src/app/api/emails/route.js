import dbConnect from "@/app/lib/dbConnect";
import Email from "@/app/model/email";
import { NextResponse } from "next/server";

export async function POST(req){
  await dbConnect()
  const request = await req.json()
  try{
    const emailDoc = await Email.create(request)
    return NextResponse.json(emailDoc.email)
  }catch(e){
    return NextResponse.json({error:`${e.message}\n${request}`}, {status: 400})
  } 
}

export async function GET(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      return postHandler(req, res);
    default:
     // NextResponse.setHeader('Allow', ['POST']);
     return NextResponse.json({ error: 'Method ${method} Not Allowed' }, { status: 405 })
  }
}