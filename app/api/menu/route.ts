import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Menu from "@/models/Menu";

export async function GET() {
  await connectDB();
  const items = await Menu.find();
  return NextResponse.json(items);
}
