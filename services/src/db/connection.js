import mongoose from 'mongoose';

console.log('\n\n\n@@@@@@', process.env.DB_URL);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});
