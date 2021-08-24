import React from "react";
import "../css/main.css";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet";
import { IoCallSharp } from "react-icons/io5";
import { MdDirectionsWalk } from "react-icons/md";

// Images
import Store_1 from "../images/Store1.webp";
import Store_2 from "../images/Store2.webp";
import Store_3 from "../images/Store3.webp";
import DoordashLogo from "../images/doordash_logo.png";
import Footer from "../components/Footer";
export default function Home() {
	return (
		<div>
			<Helmet>
				<title>Welcome to Mr. J's Bagels and Deli</title>
			</Helmet>
			<div>
				<div className="">
					<Hero />
				</div>
			</div>
			<div className="mt-44 container ml-auto mr-auto">
				<h1 className="text-gray-900 opacity-50 font-bold text-3xl text-center">
					Our Locations
				</h1>
				<div className="lg:grid lg:grid-cols-3 lg:justify-items-center mt-10">
					<div className="mt-5 ml-5 mr-5 grid grid-rows place-items-center bg-gray-100 rounded-lg p-5 shadow-lg">
						<img
							className="rounded-lg"
							height={300}
							width={300}
							src={Store_1}
							alt="store"
						></img>
						<p className="mt-3">
							1635 E. Market Street
							<br /> Harrisonburg VA 22801
						</p>
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.doordash.com/store/mr-j-s-bagel-deli-harrisonburg-530526/en-US"
							className="rounded-lg flex items-center justify-center gap-2 w-full bg-gray-200 shadow-inner mt-3"
						>
							<img
								height={50}
								width={50}
								src={DoordashLogo}
								alt="Doordash"
							></img>
							Order DoorDash
						</a>
						<span className="flex items-center gap-2">
							<a
								rel="noreferrer"
								href="https://goo.gl/maps/pdEUun5xZEcsHtu9A"
								target="_blank"
								className="mt-3 flex items-center bg-red-700 text-white p-2 gap-2 rounded-lg"
							>
								<MdDirectionsWalk />
								Get Directions
							</a>
							<a
								rel="noreferrer"
								href="tel:540-564-0416"
								className="mt-3 flex items-center bg-red-700 text-white p-2 gap-2 rounded-lg"
							>
								<IoCallSharp />
								Call Location
							</a>
						</span>
					</div>
					<div className="mt-5 ml-5 mr-5 grid grid-rows place-items-center bg-gray-100 rounded-lg p-5 shadow-lg">
						<img
							className="rounded-lg"
							height={300}
							width={300}
							src={Store_2}
							alt="store"
						></img>
						<p className="mt-3">
							1731 S. High Street <br /> Harrisonburg VA 22801
						</p>
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.doordash.com/business/mr-j-s-bagel-deli-238503/menu/"
							className="rounded-lg flex items-center justify-center gap-2 w-full bg-gray-200 shadow-inner mt-3"
						>
							<img
								height={50}
								width={50}
								src={DoordashLogo}
								alt="Doordash"
							></img>
							Order DoorDash
						</a>
						<span className="flex items-center gap-2">
							<a
								rel="noreferrer"
								href="https://goo.gl/maps/PPUBefDMbCgtJp9J9"
								target="_blank"
								className="mt-3 flex items-center bg-red-700 text-white p-2 gap-2 rounded-lg"
							>
								<MdDirectionsWalk />
								Get Directions
							</a>
							<a
								rel="noreferrer"
								href="tel:540-432-1386"
								className="mt-3 flex items-center bg-red-700 text-white p-2 gap-2 rounded-lg"
							>
								<IoCallSharp />
								Call Location
							</a>
						</span>
					</div>
					<div className="mt-5 ml-5 mr-5 grid grid-rows place-items-center bg-gray-100 rounded-lg p-5 shadow-lg">
						<img
							className="rounded-lg"
							height={300}
							width={300}
							src={Store_3}
							alt="store"
						></img>
						<p className="mt-3">
							1741 Virginia Ave. <br /> Harrisonburg VA 22802
						</p>
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.doordash.com/store/mr-j%E2%80%99s-bagel-&-deli-harrisonburg-530486/"
							className="rounded-lg flex items-center justify-center gap-2 w-full bg-gray-200 shadow-inner mt-3"
						>
							<img
								height={50}
								width={50}
								src={DoordashLogo}
								alt="Doordash"
							></img>
							Order DoorDash
						</a>
						<span className="flex items-center gap-2">
							<a
								rel="noreferrer"
								href="https://goo.gl/maps/iTTEQaEGcJpDbRxv8"
								target="_blank"
								className="mt-3 flex items-center bg-red-700 text-white p-2 gap-2 rounded-lg"
							>
								<MdDirectionsWalk />
								Get Directions
							</a>
							<a
								rel="noreferrer"
								href="tel:540-442-1997"
								className="mt-3 flex items-center bg-red-700 text-white p-2 gap-2 rounded-lg"
							>
								<IoCallSharp />
								Call Location
							</a>
						</span>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
