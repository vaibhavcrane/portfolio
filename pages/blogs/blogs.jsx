import Link from "next/link";
import Head from "next/head";

export default function Blogs({ posts }) {
	return (
		<>
			<Head>
				<title>Vaibhav Rane | Blog</title>
				<meta name='description' content="Vaibhav Rane's Blog" />
			</Head>
			<div className='blogs-page'>
				<div className='container'>
					<div className='blogs-section'>
						{posts &&
							posts.map((post) => (
								<div key={post.id}>
									<Link href={`/blogs/${post.node.slug}`}>
										<div className='blog-post'>
											<span className='blog-image'>
												<img
													src={post.node.coverImage.url}
													key={post.node.coverImage.id}
												/>
											</span>
											<span className='blog-title'>
												<h3>{post.node.title}</h3>
												<p>{post.node.datePosted}</p>
												<p>{post.node.description}</p>
											</span>
										</div>
									</Link>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
}
