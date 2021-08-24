import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import GiftCard from "../components/GiftCard";
export default function Footer() {
	return (
		<div className="mt-10">
			<GiftCard />

			<div className=" bg-gray-900 p-5 text-gray-50">
				<div className="grid grid-rows-2 justify-items-center gap-5">
					<h1 className="logo font-extrabold text-4xl mt-5 opacity-75 cursor-pointer">
						Mr. J's Bagels & Deli
					</h1>
					<ul className="flex items-center gap-5 justify-center">
						<li>
							<Link to="">Careers</Link>
						</li>
						<li>
							<Link to="">Privacy Policy</Link>
						</li>
						<li>
							<Link to="">Refund Policy</Link>
						</li>
					</ul>
					<p className="opacity-50">
						© 2021 by Mr. J's Bagels & Deli.
						<p class="text-center">
							Coded by <a href="https://mohamad.tech/">Mohamad Badawa</a>
						</p>
					</p>
				</div>
			</div>
		</div>
	);
}
