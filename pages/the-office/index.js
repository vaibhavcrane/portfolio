import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function TheOffice() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {}, []);
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(
			"https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/random",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
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
				{/* <meta property='og:image' content={previewImage} key='ogimage' /> */}
				<meta property='og:site_name' content='Vaibhav Rane' key='ogsitename' />
				<meta property='og:title' content='The Office Quotes' key='ogtitle' />
				<meta
					property='og:description'
					content='The Office Quotes'
					key='ogdesc'
				/>
			</Head>
			<div className='home'>
				<div className='slider'>
					<div className='hero breaking-bad' data-style='one'>
						<div className='background'>
							<div
								className='image'
								style={{
									backgroundImage: `url(${"/img/the-office/background.jpg"})`,
								}}></div>
						</div>
						{/* End .background */}

						<div className='container'>
							<div className='content'>
								<div className='name_wrap'>
									<h2>
										<span>{data.data.content}</span>
									</h2>
								</div>
								{/* End title */}

								<div className='job_wrap'>
									<span className='job'>
										- {data.data.character.firstname}{" "}
										{data.data.character.lastname}
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
