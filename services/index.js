import { GraphQLClient, gql } from "graphql-request";
const axios = require("axios");

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

const gallerycms = new GraphQLClient(process.env.GALLERY_URL_ENDPOINT);

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			blogsConnection {
				edges {
					node {
						id
						slug
						title
						coverImage {
							id
							url
						}
						datePosted
						description
					}
				}
			}
		}
	`;

	const result = await graphcms.request(query);
	return result.blogsConnection.edges;
};

export const getRecentPosts = async () => {
	const query = gql`
    query GetRecentPosts() {
			blogs(last: 4) {
				categories {
					name
					slug
				}
				coverImage {
					url
					id
				}
				slug
				title
				description
				id
			}
		}
  `;
	const result = await graphcms.request(query);
	return result.blogs;
};

export const getSinglePost = async (slug) => {
	const query = gql`
		query GetSinglePost($slug: String!) {
			blog(where: { slug: $slug }) {
				coverImage {
					url
				}
				datePosted
				id
				slug
				title
				content {
					raw
				}
				description
			}
		}
	`;
	const result = await graphcms.request(query, { slug });
	return result.blog;
};

export const getGallery = async () => {
	const query = gql`
		query getGallery {
			galleries {
				image {
					url
				}
				description
				location
				dateTaken
				id
			}
		}
	`;
	const result = await gallerycms.request(query);
	return result.galleries;
};
