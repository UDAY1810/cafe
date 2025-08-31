import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Reservation from "@/models/Reservation";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const reservation = new Reservation(body);
  await reservation.save();
  return NextResponse.json({ success: true, reservation });
}
