import { getPosts } from "../../services";
import Header from "../../components/header";
import Blogs from "./blogs";
import ScrollToTop from "../../components/scroll-to-top";
import Footer from "../../components/footer";
import Slider from "../../components/slider-small";

//  fetch  our posts
export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	return {
		props: { posts },
	};
}

export default function Blog({ posts }) {
	return (
		<div className='all_wrap'>
			<ScrollToTop />
			<div className='home'>
				<Header />
				<Slider page_title={"Blog"} />
				<Blogs posts={posts} />
				<Footer />
			</div>
		</div>
	);
}
