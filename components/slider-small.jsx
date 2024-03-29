import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Slider = ({ page_title }) => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {}, []);

	return (
		<div className='slider'>
			<div className='hero_small'>
				<div className='frame-layout__particles_small'>
					<Particles
						id='tsparticles'
						init={particlesInit}
						loaded={particlesLoaded}
						options={{
							backgroundMode: {
								enable: true,
								zIndex: 1,
							},
							fullScreen: {
								enable: false,
								zIndex: -1,
							},
							fpsLimit: 60,
							interactivity: {
								detectsOn: "canvas",
								events: {
									onClick: {
										enable: false,
										mode: "push",
									},
									onHover: {
										enable: false,
										mode: "repulse",
									},
									resize: true,
								},
								modes: {
									bubble: {
										distance: 400,
										duration: 2,
										opacity: 0.4,
										size: 40,
									},
									push: {
										quantity: 4,
									},
									repulse: {
										distance: 200,
										duration: 0.4,
									},
								},
							},
							particles: {
								color: {
									value: "#ddd",
								},
								links: {
									color: "#ffffff",
									distance: 150,
									enable: true,
									opacity: 0.5,
									width: 1,
								},
								collisions: {
									enable: true,
								},
								move: {
									direction: "none",
									enable: true,
									outMode: "bounce",
									random: false,
									speed: 2,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										value_area: 800,
									},
									value: 25,
								},
								opacity: {
									value: 0.5,
								},
								shape: {
									type: "circle",
								},
								size: {
									random: true,
									value: 6,
								},
							},

							detectRetina: true,
						}}
					/>
				</div>
				<div className='background'>
					<div
						className='image'
						style={{
							backgroundImage: `url(${"/img/slider/3.jpg"})`,
						}}></div>
				</div>
				{/* End .background */}
				<div className='container'>
					<div className='content'>
						<div className='name_wrap'>
							<h3>{page_title}</h3>
						</div>
					</div>
				</div>
				{/* End .container */}
			</div>
		</div>
	);
};

export default Slider;
