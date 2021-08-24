import React from "react";
import "../css/main.css";
import MrJsLogo from "../images/mrjslogo.jpeg";
export default function GiftCard() {
	return (
		<div className="flex justify-center">
			<div className="md:flex justify-center place-items-center bg-gradient-to-r from-red-400 via-red-600 to-red-800 p-5 mt-5 w-full ">
				<div className="md:ml-0 md:mr-0 ml-auto mr-auto grid grid-rows gap-3 bg-white shadow-lg p-5 rounded-lg w-80 text-sm">
					<img height={75} width={75} src={MrJsLogo} alt="logo"></img>
					<p className="font-bold text-xl opacity-75">Mr. J's</p>
					<p className="opacity-75">$5.00 - $2,000.00</p>
				</div>
				<div className="grid grid-rows justify-items-center">
					<p className="mt-5 sm:mt-0 font-bold text-2xl ml-10 text-white">
						Shop Mr. J's Gift Cards
					</p>
					<a
						href="https://www.toasttab.com/mr-j-s-bagel-deli-virginia-ave/giftcards"
						target="_blank"
						rel="noreferrer"
						className="border border-white rounded-lg text-white p-2 mr-auto ml-auto mt-5 hover:bg-white hover:text-black transition duration-500 ease-in-out"
					>
						Shop Gift Cards
					</a>
				</div>
			</div>
		</div>
	);
}
