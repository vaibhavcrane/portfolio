import { getPosts, getSinglePost } from "../../services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ScrollToTop from "../../components/scroll-to-top";
import Head from "next/head";

// we use this function to tell Nextjs how many paths to pre render
export async function getStaticPaths() {
	const posts = (await getPosts()) || [];

	//map through the post slugs and return them as params
	const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
}

// this fundtion is rsponsible for fetching the individual post data
export async function getStaticProps({ params }) {
	const data = await getSinglePost(params.slug);

	return {
		props: { post: data },
	};
}

export default function SinglePost({ post }) {
	const { title, description } = post;
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
			</Head>

			<div className='all_wrap'>
				<ScrollToTop />
				<div className='home'>
					<Header />
					<div className='hero_blog-page'>
						<div className='background'>
							<div
								className='image overlay'
								style={{
									backgroundImage: `url(${post.coverImage.url})`,
								}}></div>
						</div>
					</div>
					<div className='container'>
						<div className='blog-content'>
							<div className='title'>
								<h1>{post.title}</h1>
							</div>
							<div className='description'>
								<p>{post.description}</p>
							</div>
							<div className='date'>
								<p>{post.datePosted}</p>
							</div>
							<div className='content'>
								<RichText content={post.content.raw.children} />
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
