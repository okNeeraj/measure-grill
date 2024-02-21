import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			default: null
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
		},
		token: {
			type: String,
			default: null
		}
	},
	{ timestamps: true }
)

export const User = mongoose.model("User", userSchema);
