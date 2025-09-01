import mongoose, { Schema, model, models } from "mongoose";

const ReservationSchema = new Schema(
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

// Avoid model overwrite on hot-reload
export default models.Reservation || model("Reservation", ReservationSchema);
