import React, { useEffect } from "react";
import Social from "./social";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
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
		<div className='section' ref={ref} id='contact'>
			<div
				className='talk bg_image_props'
				style={{
					backgroundImage: `url(${"img/footer/background.jpg"})`,
				}}>
				<div className='shape'>
					<img className='svg' src='/img/svg/paper.svg' alt='partners brand' />
				</div>
				{/* End shape */}

				<div className='background' id='talk'>
					<div className='overlay'></div>
				</div>
				{/* End background */}

				<motion.div animate={animation} className='talk_inner'>
					<div animate={animation} className='footer-socials'>
						<Social />
					</div>
				</motion.div>
				{/* End content */}
			</div>
		</div>
	);
};

export default Footer;
