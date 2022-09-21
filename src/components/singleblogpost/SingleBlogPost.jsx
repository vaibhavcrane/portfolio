import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const SingleBlogPost = () => {
	const [postData, setPostData] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
				{ slug }
			)
			.then((data) => setPostData(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!postData) return <div>Loading...</div>;

	return (
		<div className='shane_tm_section'>
			<div className='shane_tm_news'>
				<div className='container'>
					<div className='shane_tm_title blogpost-padding'>
						<h3 className='centered'>{postData.title}</h3>
						<div className='post-author centered'>
							<img
								className='author-image'
								src={urlFor(postData.authorImage).width(100).url()}
								alt='Author is Vaibhav'
							/>
							<div>
								<p className='author-name'>{postData.name}</p>
							</div>
						</div>
					</div>
					<div>
						<BlockContent
							className={"blog-content blogpost-padding"}
							blocks={postData.body}
							projectId={sanityClient.clientConfig.projectId}
							dataset={sanityClient.clientConfig.dataset}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleBlogPost;
