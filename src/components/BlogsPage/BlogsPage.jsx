import React from "react";
import Header from "../header/Header";
import Blogposts from "../blogposts/Blogposts";
import Footer from "../footer/Footer";
import SliderSmall from "../slidersmall/SliderSmall";

const BlogsPage = () => {
	return (
		<div className='home-four'>
			<Header />
			{/* End Header Section */}

			<SliderSmall />

			<Blogposts />

			<Footer />
		</div>
	);
};

export default BlogsPage;
