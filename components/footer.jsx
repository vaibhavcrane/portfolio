import React, { useEffect } from "react";
import Social from "./social";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({ opacity: 1, y: 0, transition: { duration: 1 } });
		}
		if (!inView) {
			animation.start({ opacity: 0, y: 20 });
		}
	}, [inView]);

	return (
		<>
			<div ref={ref} className='section'>
				<div
					style={{
						backgroundImage: `url(${"img/footer/background.jpg"})`,
					}}
					className='copyright'>
					<div className='overlay'>
						<div className='container'>
							<motion.div animate={animation} className='inner'>
								<p>fin.</p>
							</motion.div>
							{/* End inner */}
						</div>
					</div>
				</div>
				{/* End copyright */}
			</div>
		</>
	);
};

export default Footer;
