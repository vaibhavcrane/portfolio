import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import BreakingBadSlider from "../../components/breaking-bad-slider";

export default function Profile() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://api.breakingbadquotes.xyz/v1/quotes")
			.then((res) => res.json())
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
				<meta name='description' content='Breaking Bad quotes for D' />
				<title>Breaking Bad Quotes for D</title>
			</Head>
			<div className='home'>
				<BreakingBadSlider />
				<div className='container'>
					<div className='brba-quotes'>
						<h1>{data[0].quote}</h1>
						<h2>- {data[0].author}</h2>
					</div>
				</div>
			</div>
		</>
	);
}
