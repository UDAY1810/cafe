import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReservation extends Document {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

const ReservationSchema: Schema<IReservation> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite in Next.js hot reload
const Reservation: Model<IReservation> =
  mongoose.models.Reservation || mongoose.model<IReservation>("Reservation", ReservationSchema);

export default Reservation;
