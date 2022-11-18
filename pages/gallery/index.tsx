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
import ScrollToTop from "../../components/scroll-to-top";
import { getGallery } from "../../services";

function formattedNumber(value: number) {
	if (value < 10) {
		return `00${value}`;
	}
	if (value < 100) {
		return `0${value}`;
	}
	return value;
}

export async function getStaticProps() {
	const gallery = (await getGallery()) || [];
	console.log(gallery);
	return {
		props: { gallery },
	};
}

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageOnScreen({
	imageURL,
	description,
	location,
	dateTaken,
	imageId,
}) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);
	return (
		<section className='gallery'>
			<div className='gallery-image' ref={ref}>
				<img src={imageURL} alt={description} />
			</div>
			<motion.div style={{ y }} className='gallery-text'>
				<h2>#{formattedNumber(imageId)}</h2>
				<p className='description'>{location}</p>
				<p className='date-taken'>{dateTaken}</p>
			</motion.div>
		</section>
	);
}
const Gallery = ({ gallery }) => {
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
			<div className='all-wrap gallery-wrapper scroll-container'>
				<ScrollToTop />
				{/* <Slider page_title='Gallery' /> */}
				{gallery.map((i) => (
					<ImageOnScreen
						key={i}
						imageURL={i.image.url}
						description={i.description}
						location={i.location}
						dateTaken={i.dateTaken}
						imageId={i.imageId}
					/>
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
