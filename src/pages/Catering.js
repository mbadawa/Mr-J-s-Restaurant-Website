import React from "react";
import "../css/main.css";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Menu() {
	return (
		<div>
			<Helmet>
				<title>Mr. J's Bagels and Deli | Our Menu</title>
			</Helmet>
			<Hero />
			<div className="mt-44">
				<h1 className="text-gray-900 opacity-50 font-bold text-3xl text-center mb-5">
					Our Catering
				</h1>
			</div>
			<Footer />
		</div>
	);
}
