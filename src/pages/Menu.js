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
					Our Menu{" "}
				</h1>
				<div className="container ml-auto mr-auto rounded-lg grid grid-rows gap-5 bg-gray-100 p-10 divide-y-2 divide-gray-200 divide-solid">
					<h1 className="font-bold text-lg">BAGEL CHOICES</h1>
					<p className="pt-5">OLD BAY ASIAGO</p>
					<p className="pt-5">FRENCH TOAST (Seasonal)</p>
					<p className="pt-5">PLAIN</p>
					<p className="pt-5">EGG</p>
					<p className="pt-5">EVERYTHING</p>
					<p className="pt-5">AISAGO</p>
					<p className="pt-5">BERRY</p>
					<p className="pt-5">WHEAT</p>
					<p className="pt-5">JALAPENO</p>
					<p className="pt-5">CINNAMON RAISIN</p>
					<p className="pt-5">POPPY SEED</p>
					<p className="pt-5">SESAME</p>
					<p className="pt-5">EGG EVERYTHING</p>
					<p className="pt-5">GARLIC</p>
					<p className="pt-5">ONION</p>
					<p className="pt-5">SALT</p>
					<p className="pt-5">SUN DRIED TOMATO (Seasonal)</p>
				</div>
				<div className="mt-5 container ml-auto mr-auto rounded-lg grid grid-rows gap-5 bg-gray-100 p-10 divide-y-2 divide-gray-200 divide-solid">
					<h1 className="font-bold text-lg">CREAM CHEESES</h1>
					<p className="pt-5">Plain Cream Cheese</p>
					<p className="pt-5">Strawberry Cream Cheese</p>
					<p className="pt-5">Jalapeno & Bacon Cream Cheese</p>
					<p className="pt-5">Veggie Cream Cheese</p>
					<p className="pt-5">Honey Walnut Cream Cheese</p>
					<p className="pt-5">Low Fat Plain Cream Cheese</p>
					<p className="pt-5">Scallion Cream Cheese</p>
					<p className="pt-5">Spinach Parmesan Cream Cheese</p>
					<p className="pt-5">Cinnamon Cream Cheese</p>
				</div>
				<div className="mt-5 container ml-auto mr-auto rounded-lg grid grid-rows gap-5 bg-gray-100 p-10 divide-y-2 divide-gray-200 divide-solid">
					<h1 className="font-bold text-lg">BREAD CHOICES</h1>
					<p className="pt-5">WHITE BREAD</p>
					<p className="pt-5">WHEAT BREAD</p>
					<p className="pt-5">KAISER ROLL</p>
					<p className="pt-5">Gluten Free Bread</p>
					<p className="pt-5">SUB ROLL</p>
					<p className="pt-5">WRAP</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
