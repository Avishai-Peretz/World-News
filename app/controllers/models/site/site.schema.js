import mongoose from "mongoose";

const langSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const siteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: false,
    },
    img: {
      type: String,
      trim: true,
    },
    he: {
      type: langSchema,
    },
    en: {
      type: langSchema,
    },
    ar: {
      type: langSchema,
    },
    ru: {
      type: langSchema,
    },
  },
  {
    timestamps: true,
  }
);

export { siteSchema };
