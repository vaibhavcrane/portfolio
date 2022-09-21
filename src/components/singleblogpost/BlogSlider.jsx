import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const BlogSlider = () => {
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
		<div className='slider-four'>
			<div className='shane_tm_hero_small' data-style='one'>
				<div className='background'>
					<div
						className='image'
						style={{
							backgroundImage: `url(${urlFor(postData.mainImage).url()})`,
						}}></div>
				</div>
			</div>
		</div>
	);
};

export default BlogSlider;
