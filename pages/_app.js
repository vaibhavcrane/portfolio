import React, { useEffect } from "react";
import Aos from "aos";
// import "aos/dist/aos.css";
import "../styles/style.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init();
	});

	return (
		<>
			<Head>
				<title>Vaibhav Rane | Portfolio</title>
				<meta
					name='description'
					content='Vaibhav Rane is a MBA graduate from Schulich School of Business.'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
