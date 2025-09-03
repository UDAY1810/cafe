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
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Create new reservation (with revenue)
 */
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // 💰 Calculate revenue (example: ₹500 per guest)
    const perGuestPrice = 500;
    body.revenue = body.guests * perGuestPrice;

    console.log("📥 Incoming Reservation:", body);

    const reservation = await Reservation.create(body);

    return NextResponse.json({ success: true, reservation }, { status: 201 });
  } catch (error: any) {
    console.error("❌ Error saving reservation:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

/**
 * Get all reservations
 */
export async function GET() {
  try {
    await connectDB();
    const reservations = await Reservation.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, reservations }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Error fetching reservations:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

/**
 * Delete reservation
 */
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();

    const deleted = await Reservation.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ success: false, error: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Reservation deleted" }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Error deleting reservation:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}





// import { connectDB } from "@/lib/mongodb";
// import Reservation from "@/lib/models/Reservation";
// import { NextResponse } from "next/server";

// // Runtime Node.js pe chalayega
// export const runtime = "nodejs";

// /**
//  * Create Reservation (POST)
//  */
// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const body = await req.json();

//     const reservation = await Reservation.create(body);

//     return NextResponse.json({ success: true, reservation }, { status: 201 });
//   } catch (error: any) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// /**
//  * Get All Reservations (GET)
//  */
// export async function GET() {
//   try {
//     await connectDB();
//     const reservations = await Reservation.find().sort({ createdAt: -1 });

//     return NextResponse.json({ success: true, reservations }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// /**
//  * Update Reservation (PUT)
//  */
// export async function PUT(req: Request) {
//   try {
//     await connectDB();
//     const { id, ...data } = await req.json();

//     if (!id) {
//       return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
//     }

//     const updated = await Reservation.findByIdAndUpdate(id, data, { new: true });

//     if (!updated) {
//       return NextResponse.json({ success: false, error: "Reservation not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, reservation: updated }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// /**
//  * Delete Reservation (DELETE)
//  */
// export async function DELETE(req: Request) {
//   try {
//     await connectDB();
//     const { id } = await req.json();

//     if (!id) {
//       return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
//     }

//     const deleted = await Reservation.findByIdAndDelete(id);

//     if (!deleted) {
//       return NextResponse.json({ success: false, error: "Reservation not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, message: "Reservation deleted" }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
