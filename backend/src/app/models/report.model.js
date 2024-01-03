import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema({
	webId: {
		type: String,
		required: true,
		index: true
	},
	pageId: {
		type: String,
		required: true,
		index: true
	},
	loadingExpId: {
		type: String,
		required: true,
		index: true
	},
	originLoadingExpId: {
		type: String,
		required: true,
		index: true
	},
	title: {
		type: String,
	},
	description: {
		type: String,
	},

}, { timestamps: true })

export const Report = mongoose.model('Report', reportSchema)
