import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//TODO: Redo animations

export default function Experience() {
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
		<div
			ref={ref}
			className='section'>
			<motion.div
				className='skills'
				id='experience'
				animate={animation}>
				<div className='container'>
					<div className='skills_inner'>
						<div className='left'>
							<div className='title'>
								<span>My Experience</span>
								<h3>I am an Operations professional with two years of experience</h3>
							</div>
							<div>
								<div className='button'>
									<a
										href='/documents/resume/resume.pdf'
										download>
										Download Resume
									</a>
								</div>
							</div>
						</div>
						<div className='right'>
							<div className='tokyo_progress'>
								{/* <div className='progress_inner'>
									<span>
										<span className='label'>Operations Manager</span>
										<span className='number'>Aug 2019 - Jul 2020</span>
									</span>
									<div className='company-text'>
										<p>Spectrum Electrical Insureties Limited</p>
									</div>
									<div className='text'>
										<p>
											At Spectrum, I oversaw day to day operations of the plant
											as well as led projects to increase production capacity
										</p>
									</div>
								</div> */}
								<br />
								<div className='progress_inner'>
									<span>
										<span className='label'>Sales Officer</span>
										<span className='number'>May 2019 - Jul 2019</span>
									</span>
									<div className='company-text'>
										<p>Indian Oil Corporation Limited</p>
									</div>
									<div className='text'>
										<p>
											I managed the sales of petroleum products at 60 retail outlets and implemented 4 different
											porjects across all the sites
										</p>
									</div>
								</div>
								<br />
								<div className='progress_inner'>
									<span>
										<span className='label'>Operations Officer</span>
										<span className='number'>Aug 2017 - May 2019</span>
									</span>
									<div className='company-text'>
										<p>Indian Oil Corporation Limited</p>
									</div>
									<div className='text'>
										<p>I worked on increasing the efficiency of the plant while maintaining high safety standards</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
