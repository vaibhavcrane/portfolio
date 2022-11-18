import React from "react";
import { useRef } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	MotionValue,
} from "framer-motion";
import Head from "next/head";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageOnScreen({ id }: { id: number }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 500);
	return (
		<section className='gallery'>
			<div ref={ref}>
				<img src={`/img/gallery/${id}.jpg`} alt='A London skyscraper' />
			</div>
			<motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
		</section>
	);
}
const Gallery = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<>
			<Head>
				<title>Vaibhav Rane | Gallery</title>
				<meta name='description' content="Vaibhav Rane's Photo Gallery" />
			</Head>
			<div className='scroll-snap all-wrap gallery-wrapper'>
				{/* <Header /> */}
				{/* <Slider page_title='Gallery' /> */}
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((image) => (
					<ImageOnScreen key={image} id={image} />
				))}
				<motion.div className='progress' style={{ scaleX }} />
				<div className='gallery-button'>
					<a className='white-fill-bg btn-outline' href={"/"}>
						BACK TO HOME
					</a>
				</div>
			</div>
		</>
	);
};

export default Gallery;
