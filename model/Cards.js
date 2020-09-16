import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: {type: String},
  age: {type: Number},
  url: {type: String}
})

export default mongoose.model('cards', cardSchema);