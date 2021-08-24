import React from "react";
import "../css/main.css";
import Hero from "../components/Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet";
import Image1 from "../images/gallery/1.webp";
import Image2 from "../images/gallery/2.webp";
import Image3 from "../images/gallery/3.webp";
import Image4 from "../images/gallery/4.webp";
import Image5 from "../images/gallery/5.webp";
import Image6 from "../images/gallery/6.webp";
import Image7 from "../images/gallery/7.webp";
import Image8 from "../images/gallery/8.webp";
import Image9 from "../images/gallery/9.webp";
import Image10 from "../images/gallery/10.webp";
import Image11 from "../images/gallery/11.webp";
import Image12 from "../images/gallery/12.webp";
import Image13 from "../images/gallery/13.webp";
import Image14 from "../images/gallery/14.webp";
import Image15 from "../images/gallery/15.webp";
import Image16 from "../images/gallery/16.webp";
import Image17 from "../images/gallery/17.webp";
import Image18 from "../images/gallery/18.webp";
import Image19 from "../images/gallery/19.webp";
import Image20 from "../images/gallery/20.webp";
import Footer from "../components/Footer";
export default function Gallery() {
	return (
		<div>
			<Helmet>
				<title>Gallery</title>
			</Helmet>
			<Hero />
			<div className="container ml-auto mr-auto mt-44 w-2/4">
				<h1 className="text-gray-900 opacity-50 font-bold text-3xl text-center mb-5">
					Gallery
				</h1>
				<Carousel showArrows={true}>
					<div>
						<img alt="Bagels" src={Image1} />
						<p className="legend">Bagels</p>
					</div>
					<div>
						<img alt="Catering Trays" src={Image2} />
						<p className="legend">Catering Trays</p>
					</div>
					<div>
						<img alt="Assorted Sandwich Tray" src={Image3} />
						<p className="legend">Assorted Sandwich Tray</p>
					</div>
					<div>
						<img alt="Veggie Tray" src={Image4} />
						<p className="legend">Veggie Tray</p>
					</div>
					<div>
						<img alt="Party Bagel" src={Image5} />
						<p className="legend">Party Bagel</p>
					</div>
					<div>
						<img alt="Desert Tray" src={Image6} />
						<p className="legend">Desert Tray</p>
					</div>
					<div>
						<img alt="Chicken Parmesan" src={Image7} />
						<p className="legend">Chicken Parmesan</p>
					</div>
					<div>
						<img alt="food" src={Image8} />
					</div>
					<div>
						<img alt="Catering Trays" src={Image9} />
						<p className="legend">Catering Trays</p>
					</div>
					<div>
						<img alt="food" src={Image10} />
					</div>
					<div>
						<img alt="food" src={Image11} />
						<p className="legend"></p>
					</div>
					<div>
						<img alt="Veggie Tray" src={Image12} />
						<p className="legend">Veggie Tray</p>
					</div>
					<div>
						<img alt="food" src={Image13} />
					</div>
					<div>
						<img alt="food" src={Image14} />
					</div>
					<div>
						<img alt="food" src={Image15} />
					</div>
					<div>
						<img alt="food" src={Image16} />
					</div>
					<div>
						<img alt="food" src={Image17} />
					</div>
					<div>
						<img alt="food" src={Image18} />
					</div>
					<div>
						<img alt="food" src={Image19} />
					</div>
					<div>
						<img alt="food" src={Image20} />
					</div>
				</Carousel>
			</div>
			<Footer />
		</div>
	);
}
