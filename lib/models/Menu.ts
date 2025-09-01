import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMenu extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
}

const MenuSchema: Schema<IMenu> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite in Next.js hot reload
const Menu: Model<IMenu> =
  mongoose.models.Menu || mongoose.model<IMenu>("Menu", MenuSchema);

export default Menu;
