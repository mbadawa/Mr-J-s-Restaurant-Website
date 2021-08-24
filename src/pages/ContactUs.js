import React from "react";
import "../css/main.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
export default function ContactUs() {
	return (
		<div>
			<Helmet>
				<title>Mr. J's Bagels and Deli | Contact us</title>
			</Helmet>
			<Hero />
			<div className="mt-44">
				<h1 className="text-gray-900 opacity-50 font-bold text-3xl text-center mb-5">
					Contact Us
				</h1>

				<div className="grid grid-rows justify-items-center gap-3 w-full">
					<div className="flex gap-2">
						{" "}
						<input
							className="rounded-lg p-2 bg-gray-100 shadow-inner focus:outline-none "
							placeholder="Full Name"
						></input>
						<input
							className="rounded-lg p-2 bg-gray-100 shadow-inner focus:outline-none "
							placeholder="Email"
						></input>
					</div>
					<div className="flex gap-2">
						<input
							className="rounded-lg p-2 bg-gray-100 shadow-inner focus:outline-none "
							placeholder="Phone #"
						></input>
						<input
							className="rounded-lg p-2 bg-gray-100 shadow-inner focus:outline-none "
							placeholder="Subject"
						></input>
					</div>
					<textarea
						className="rounded-lg p-2 bg-gray-100 shadow-inner focus:outline-none w-96 h-44"
						placeholder="Messege"
					></textarea>
					<button className="rounded-lg bg-green-600 text-white shadow-inner p-2 w-28">
						Send
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
