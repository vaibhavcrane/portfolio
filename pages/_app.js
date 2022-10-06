import React, { useEffect } from "react";
import Aos from "aos";
// import "aos/dist/aos.css";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init();
	});

	return <Component {...pageProps} />;
}

export default MyApp;
