import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/contact";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const contact = await Contact.create(body);

    return NextResponse.json({ success: true, contact });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
