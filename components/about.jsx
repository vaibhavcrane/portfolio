import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Social from "./social";

//TODO: Redo animations

const About = () => {
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
		<>
			<div className='section' id='about'>
				<div className='about'>
					<div className='container'>
						<div className='about_inner' ref={ref}>
							<div className='left'>
								<motion.div className='image' animate={animation}>
									<Image
										src='/img/about/about.jpg'
										alt='placeholder'
										width={500}
										height={500}
									/>
									<div
										className='main'
										style={{
											backgroundImage: `url(${"img/about/about.jpg"})`,
										}}></div>
								</motion.div>
								{/* End image */}
							</div>
							{/* End left */}

							<div ref={ref} className='right'>
								<motion.div className='title' animate={animation}>
									<span>About Me</span>
									<h3>Engineer. MBA. Problem Solver.</h3>
								</motion.div>
								<motion.div className='text' animate={animation}>
									<p>
										I am a Schulich MBA graduate focused on innovation,
										strategy, marketing and operations with expertise in process
										optimization, project delivery and stakeholder management. I
										have experience in Oil and Gas industry with knowledge of
										SAP and automation.
									</p>
									<p>
										I like to solve problems and optimizing processes make
										things simpler. Nothing gives me more joy than to see my
										solutions benefit my customers and partners.
									</p>
									<p>
										I am intrigued by technology and the way it can be used our
										eveyday lives to make it simpler. I am an avid fan of
										Formula 1.
									</p>
								</motion.div>
								<motion.div ref={ref} animate={animation}>
									<Social />
								</motion.div>
							</div>
							{/* End right */}
						</div>
					</div>
					{/* End container */}
				</div>
			</div>
		</>
	);
};

export default About;
