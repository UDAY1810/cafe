import { connectDB } from "@/lib/mongodb";
import Reservation from "@/lib/models/Reservation";

export async function GET() {
  try {
    await connectDB();

    const totalReservations = await Reservation.countDocuments();
    const totalCustomers = await Reservation.distinct("email").then((emails) => emails.length);
    const latestReservation = await Reservation.findOne().sort({ createdAt: -1 });
    const topItem = "Cappuccino"; // 👈 abhi hardcoded, baad me menu se link karenge
    

    return new Response(
      JSON.stringify({
        success: true,
        stats: {
          totalReservations,
          totalCustomers,
          latestReservation,
          topItem,
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


// import { connectDB } from "@/lib/mongodb";
// import Reservation from "@/lib/models/Reservation";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await connectDB();

//     // Total reservations
//     const totalReservations = await Reservation.countDocuments();

//     // Unique customers (based on email)
//     const uniqueCustomers = await Reservation.distinct("email");

//     // Dummy Revenue (maan le per guest ₹500)
//     const reservations = await Reservation.find();
//     const revenue = reservations.reduce((sum, r) => sum + r.guests * 500, 0);

//     // Top item (agar menu selection bhi store hoti to aggregation use karte)
//     const topItem = "Cappuccino ☕"; // Abhi static rakhenge

//     // Weekly reservations trend
//     const trend = await Reservation.aggregate([
//       {
//         $group: {
//           _id: { $dayOfWeek: "$date" }, // 1=Sunday, 7=Saturday
//           reservations: { $sum: 1 }
//         }
//       },
//       { $sort: { "_id": 1 } }
//     ]);

//     return NextResponse.json({
//       success: true,
//       stats: {
//         totalReservations,
//         totalCustomers: uniqueCustomers.length,
//         revenue,
//         topItem,
//         trend
//       }
//     });
//   } catch (error: any) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
