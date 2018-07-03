import { Schema } from 'mongoose';

export const CookieSchema = new Schema({
  name: String,
}, { timestamps: false });