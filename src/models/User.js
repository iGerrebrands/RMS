import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "A value name is required"]
    },
    email: {
        type: String,
        required: [true, "A value email is required"]
    }
});

export default mongoose.model("users", userSchema);