import React, { useEffect, useState } from "react";
import Social from "../Social";
import { Link, Route } from "react-router-dom";
import sanityClient from "../../client.js";

const Blog = () => {
	const [allPostsData, setAllPosts] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"][0..3]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
			)
			.then((data) => setAllPosts(data))
			.catch(console.error);
	}, []);

	return (
		<div className='shane_tm_section' id='blog'>
			<div className='shane_tm_news'>
				<div className='container'>
					<div className='shane_tm_title'>
						<span>Blog</span>
						<h3>I talk about tech and Formula 1</h3>
					</div>
				</div>
			</div>
			<div className='container custom-blog'>
				<div className='blog-posts'>
					{allPostsData &&
						allPostsData.map((post, index) => (
							<div
								className='single-blog-post'
								data-aos='fade-up'
								data-aos-duration='1200'>
								<Link to={"/" + post.slug.current} key={post.slug.current}>
									<span className='blog-image' key={index}>
										<img src={post.mainImage.asset.url} alt='' />
									</span>
									<span className='blog-title'>
										<h5>{post.title}</h5>
									</span>
								</Link>
							</div>
						))}
				</div>
				<div
					className='shane_tm_button centered'
					data-aos='fade-up'
					data-aos-duration='1200'>
					<Link to='/all-blogs'>View All Posts</Link>
				</div>
			</div>
		</div>
	);
};

export default Blog;
