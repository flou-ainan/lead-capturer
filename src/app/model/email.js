import mongoose, {model, Schema} from "mongoose"
const emailScheema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
})

console.log(model.Email)
const Email = mongoose.models.Email || model('Email', emailScheema)
export default Email
