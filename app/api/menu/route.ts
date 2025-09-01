import { connectDB } from "@/lib/mongodb";
import Menu from "@/lib/models/Menu";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const items = await Menu.find();
    return NextResponse.json({ success: true, items });
  } catch (error: any) {
    console.error("❌ Error fetching menu:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
