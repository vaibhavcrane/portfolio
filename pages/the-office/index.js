import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
const cors = require("cors");

export default function TheOffice() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {}, []);
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://officeapi.dev/api/quotes/random", {
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		})
			// .then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	return (
		<>
			<Head>
				<meta name='description' content='The Office Quotes' />
				<title>The Office Quotes</title>
			</Head>
			<div className='home'>
				<div className='slider'>
					<div className='hero breaking-bad' data-style='one'>
						<div className='frame-layout__particles'>
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
									backgroundImage: `url(${"/img/breaking-bad/background.jpg"})`,
								}}></div>
						</div>
						{/* End .background */}

						<div className='container'>
							<div className='content'>
								<div className='name_wrap'>
									<h2>
										<span>{data[0].quote}</span>
									</h2>
								</div>
								{/* End title */}

								<div className='job_wrap'>
									<span className='job'>
										- {data[0].author}
										{/* <span className='overlay_effect'></span> */}
									</span>
								</div>
								{/* End designation */}
							</div>
							{/* End content */}
						</div>
						{/* End .container */}
					</div>
				</div>
			</div>
		</>
	);
}
