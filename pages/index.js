import dynamic from "next/dynamic";
import About from "../components/about";
import Experience from "../components/experience";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Header from "../components/header";

const Slider = dynamic(() => import("../components/slider"), { ssr: false });

export default function Home() {
	return (
		<div className='all_wrap'>
			<ScrollToTop />
			<div className='home'>
				<Header />
				<Slider />
				<About />
				<Experience />
				<Footer />
			</div>
		</div>
	);
}
