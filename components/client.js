import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: '3a5nmcj4', // you can find this in sanity.json
	dataset: 'djs', // or the name you chose in step 1
	token: process.env.SANITY_TOKEN,
	useCdn: false // `false` if you want to ensure fresh data
});
