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
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
