import mongoose, { Schema } from 'mongoose';

export default mongoose.model('Page', new Schema({
  name: String,
  components: String,
}));
