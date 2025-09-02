// import mongoose, { Schema, Document, Model } from "mongoose";

// export interface IMenu extends Document {
//   name: string;
//   description: string;
//   price: number;
//   category: string;
// }

// const MenuSchema: Schema<IMenu> = new Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// // ✅ Prevent model overwrite in Next.js hot reload
// const Menu: Model<IMenu> =
//   mongoose.models.Menu || mongoose.model<IMenu>("Menu", MenuSchema);

// export default Menu;

import mongoose, { Schema, model, models } from "mongoose";

const MenuSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    halfPrice: { type: Number },   // 👈 optional for items with half/full
    fullPrice: { type: Number },   // 👈 optional for items with half/full
    price: { type: Number },       // 👈 single price for normal items
    image: { type: String }        // 👈 image URL
  },
  { timestamps: true }
);

export default models.Menu || model("Menu", MenuSchema);

