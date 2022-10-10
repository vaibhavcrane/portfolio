import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Blog({ posts }) {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
		}
		if (!inView) {
			animation.start({ opacity: 0, y: 50 });
		}
	}, [inView]);

	return (
		<div className='section' id='blog'>
			<div className='container'>
				<div className='blog'>
					<motion.div animate={animation} className='title'>
						<span>Blog</span>
						<h3>I talk about tech and Formula 1</h3>
					</motion.div>
					<div>
						<div ref={ref} className='blogs'>
							{posts &&
								posts.map((post) => (
									<motion.div animate={animation} key={post.id}>
										<Link href={"/blogs/" + post.slug}>
											<div>
												<span className='blog-image' key={post.coverImage.id}>
													<img src={post.coverImage.url} alt='' />
												</span>
												<span className='blog-title'>
													<h5>{post.title}</h5>
												</span>
											</div>
										</Link>
									</motion.div>
								))}
						</div>
					</div>
					<motion.div animate={animation} className='button centered'>
						<Link href='/blogs'>View All Posts</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
