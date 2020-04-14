import mongoose from 'mongoose';

const MangaSchema = new mongoose.Schema({
  alias: String,
  categories: [String],
  hits: Number,
  image: String,
  status: Number,
  title: String,
  lastUpdated: Number,
});

const Manga = mongoose.model("Manga", MangaSchema);

export default Manga;
