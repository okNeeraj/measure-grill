import { User } from "../models/user.model";
import { compare, hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import asyncHandler from "../../utils/asyncHandler";

export const register = asyncHandler(async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		if (!(firstName && lastName && email && password)) {
			res.status(400).json({
				message: 'All fields are required!',
			})
		}

		const existingUser = await User.findOne({ email })
		if (existingUser) {
			res.status(400).json({
				message: 'User already registered with this email!',
			})
		}

		const encryptedPassword = await hash(password, 10);
		const user = await User.create({
			firstName,
			lastName,
			email,
			password: encryptedPassword
		})

		const userToken = jwt.sign({
			id: user._id,
			email: user.email
		}, 'shhhh', { expiresIn: '2h' })

		user.token = userToken;
		user.password = undefined;

		res.status(200).json({
			message: 'User registerd successfully.',
			data: user
		})
	} catch (error) {
		console.log(error)
	}
})

export const login = asyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!(email && password)) {
			return res.status(400).json({
				message: 'Email and Password are required!'
			})
		}

		const user = await User.findOne({ email })
		if (!user) {
			res.status(400).json({
				message: `User with email ${email}, does not exist!`
			})
		}

		if (user && (await compare(password, user.password))) {
			const userToken = jwt.sign({
				id: user._id,
				email,
			}, 'shhhh', { expiresIn: '2h' })

			user.token = userToken;
			user.password = undefined;

			const options = {
				expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
				httpOnly: true
			}

			res.status(200).cookie("token", userToken, options).json({
				message: "ok",
				success: true,
				token: userToken,
				user
			})
		} else {
			res.status(400).json({
				message: `Invalid email or password!`
			})
		}
	} catch (error) {
		console.log(error)
	}

})
