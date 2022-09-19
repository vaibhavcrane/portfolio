import React from "react";
import Header from "./header/Header";
import Slider from "./slider/Slider";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./experience/Experience";
import Video from "./video/Video";
import Brand from "./BrandAnimation";
import Testimonial from "./testimonial/Testimonial";
import Blog from "./blogs/Blog";
import CallToAction from "./calltoactions/CallToAction";
import Footer from "./footer/Footer";

const Home = () => {
	return (
		<div className='home-four'>
			<Header />
			{/* End Header Section */}

			<Slider />
			{/* End Slider Section */}

			<About />
			{/* End About Section */}

			{/* <Portfolio /> */}
			{/* End Portfolio Section */}

			<Experience />
			{/* End Skills Section */}

			{/* <Video /> */}
			{/* End Video Section */}

			{/* <div className='shane_tm_section'>
				<div className='shane_tm_partners'>
					<div className='container'>
						<div className='partners_inner'>
							<Brand />
						</div>
					</div>
				</div>
			</div> */}
			{/* End shane_tm_partners */}

			{/* <div className='shane_tm_section'>
				<div className='shane_tm_testimonials'>
					<div className='container'>
						<div className='testimonials_inner'>
							<div
								className='left'
								data-aos='fade-right'
								data-aos-duration='1200'>
								<div className='shane_tm_title'>
									<span>Testimonials</span>
									<h3>What clients say about my portfolio template</h3>
								</div>
							</div>

							<div
								className='right'
								data-aos='fade-right'
								data-aos-duration='1200'>
								<Testimonial />
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* End  shane_tm_testimonials*/}

			{/* <Blog /> */}
			{/* End Blog Section */}

			<CallToAction />
			{/* End CallToAction */}

			{/* <Footer /> */}
			{/* End Footer Section */}
		</div>
	);
};

export default Home;
