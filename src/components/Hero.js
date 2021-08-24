import React, { useState } from "react";
import "../css/main.css";
import herobg from "../videos/mrjsherobg.mp4";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaConciergeBell, FaTimes } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { RiTakeawayFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Navbar() {
	const [isActive, setIsActive] = useState(false);

	function showMenu() {
		var Navgate = document.querySelector(".navbar");
		document.querySelector(".navButton").style.display = "none";
		Navgate.style.display = "flex";
		setIsActive(!isActive);
	}
	function hideMenu() {
		var myNav = document.querySelector(".navbar");
		document.querySelector(".navButton").style.display = "flex";
		myNav.style.display = "none";
		setIsActive(isActive);
	}

	return (
		<div>
			<div className="hidden sm:block text-white text-4xl absolute mt-28 ml-2">
				<a
					target="_blank"
					rel="noreferrer"
					href="http://www.facebook.com/mr.jsbagels"
				>
					<AiFillFacebook className="opacity-50 hover:opacity-75 transition duration-500 ease-in-out" />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://twitter.com/MrJsBagelsDeli1"
				>
					<AiFillTwitterSquare className="opacity-50 hover:opacity-75 transition duration-500 ease-in-out" />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.instagram.com/mr.jsbagels/"
				>
					<AiFillInstagram className="opacity-50 hover:opacity-75 transition duration-500 ease-in-out" />
				</a>
			</div>
			<div className="wrapper">
				<video loop muted autoPlay playsInline className="videoTag">
					<source src={herobg} type="video/mp4" />
				</video>
				<div class="gradient"></div>
			</div>
			<div className="flex justify-between items-center container ml-auto mr-auto p-5 text-white rounded-bl-full rounded-br-full">
				<Link
					to="/"
					className="logo font-extrabold text-3xl sm:text-4xl cursor-pointer"
				>
					Mr. J's Bagels & Deli
				</Link>
				<AiOutlineMenu
					onClick={showMenu}
					className="hover:text-red-600 transition duration-500 ease-in-out cursor-pointer navButton text-4xl flex"
				/>
				<ul className="navbar text-lg font-bold">
					<li>
						<Link
							className="hover:text-red-600 transition duration-500 ease-in-out"
							to="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="hover:text-red-600 transition duration-500 ease-in-out"
							to="/menu"
						>
							Menu
						</Link>
					</li>
					<li>
						<Link
							className="hover:text-red-600 transition duration-500 ease-in-out"
							to="/catering"
						>
							Catering
						</Link>
					</li>
					<li>
						<Link
							className="hover:text-red-600 transition duration-500 ease-in-out"
							to="/gallery"
						>
							Gallery
						</Link>
					</li>
					<li>
						<Link
							className="hover:text-red-600 transition duration-500 ease-in-out"
							to="/contact-us"
						>
							Contact
						</Link>
					</li>
					<FaTimes
						onClick={hideMenu}
						className="hover:text-red-600 transition duration-500 ease-in-out hideMenu absolute top-5 right-5 block cursor-pointer text-3xl"
					/>
				</ul>
			</div>
			<div className="mt-24 flex justify-center container ml-auto mr-auto p-5 text-white items-center">
				<div className="grid grid-rows justify-items-center">
					<h1 className="text-3xl sm:text-4xl font-bold">
						Best Bagels in the Valley
					</h1>
					<p className="text-lg text-center mt-3">
						Find the nearest resturant!
					</p>
					<div className="flex content-center items-center gap-2 mt-3">
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.toasttab.com/locations/0555f634-5d30-4e38-a6b6-8b711de25671#!/"
							className="opacity-75 bg-red-700 p-3 w-80 flex justify-center rounded-lg hover:opacity-100 transition duration-500 ease-in-out"
						>
							Order Now
						</a>
					</div>
					<div className="flex text-3xl mt-10 gap-3 justify-evenly opacity-75">
						<span className="grid grid-rows justify-items-center gap-2">
							<IoStorefrontOutline />
							<p className="text-sm italic">1. Choose Location</p>
						</span>
						<CgArrowLongRight />
						<span className="grid grid-rows justify-items-center gap-2">
							<FaConciergeBell />
							<p className="text-sm italic">2. Order Ready!</p>
						</span>
						<CgArrowLongRight />
						<span className="grid grid-rows justify-items-center gap-2">
							<RiTakeawayFill />
							<p className="text-sm italic">3. Pick up</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
