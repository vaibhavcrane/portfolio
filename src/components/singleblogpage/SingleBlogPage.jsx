import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SingleBLogPost from "../singleblogpost/SingleBlogPost";
import BlogSlider from "../singleblogpost/BlogSlider";

const SingleBlogPage = () => {
	return (
		<div className='home-four'>
			<Header />
			{/* End Header Section */}

			<BlogSlider />

			<SingleBLogPost />

			<Footer />
		</div>
	);
};

export default SingleBlogPage;
