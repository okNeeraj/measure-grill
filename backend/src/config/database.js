import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const DBInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${'mgrill'}`);
		console.log("Database Connected!")
	} catch (error) {
		console.error("Database connection failed!!", error);
		process.exit(1);
	}
}

export default connectDB;
