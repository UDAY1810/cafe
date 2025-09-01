// export const runtime = "nodejs";

// import dbConnect from "@/lib/mongodb";

// export async function POST(req: Request) {
//   try {
//     await dbConnect();

//     // Example success response
//     return new Response(JSON.stringify({ success: true, message: "✅ Reservation confirmed!" }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });

//   } catch (error: any) {
//     console.error("❌ API Error:", error.message);

//     return new Response(JSON.stringify({ success: false, error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

import { connectDB } from "@/lib/mongodb";
import Reservation from "@/lib/models/Reservation";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("📥 Incoming Reservation:", body);

    const reservation = await Reservation.create(body);

    return new Response(
      JSON.stringify({ success: true, reservation }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("❌ Error saving reservation:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Get all reservations
export async function GET() {
  try {
    await connectDB();
    const reservations = await Reservation.find().sort({ createdAt: -1 });

    return new Response(
      JSON.stringify({ success: true, reservations }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
  console.error("❌ Error saving reservation:", error);
  return new Response(
    JSON.stringify({ success: false, error: error.message }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );
}

}





