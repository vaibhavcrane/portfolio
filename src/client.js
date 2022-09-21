import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "qnrrbuyx", // find this at manage.sanity.io or in your sanity.json
	dataset: "production", // this is from those question during 'sanity init'
	apiVersion: "2022-09-20", // use a UTC date string
	useCdn: true, // `false` if you want to ensure fresh data
});
