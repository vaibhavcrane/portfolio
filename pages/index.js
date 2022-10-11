import dynamic from "next/dynamic";
import About from "../components/about";
import Experience from "../components/experience";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-to-top";
import Header from "../components/header";
import Blog from "../components/blog";
import { getRecentPosts } from "../services";
import Head from "next/head";
import Slider from "../components/slider";

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Vaibhav Rane | Portfolio</title>
				<meta name='description' content="Vaibhav Rane's Portfolio" />
			</Head>
			<div className='all_wrap'>
				<ScrollToTop />
				<div className='home'>
					<Header />
					<Slider />
					<About />
					<Experience />
					<Blog posts={posts} />
					<Footer />
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const posts = (await getRecentPosts()) || [];
	return {
		props: { posts },
	};
}
