import Layout from '../layouts/Main';
import client from '../components/client';
import Mix from '../components/mix';
import css from '../sass/styles.scss';

const query = `*[_type == "mix"][0..3] {
  title,
  "coverImage":coverImage.asset->url
}`;

client.fetch(query).then((mixes) => {
	console.log('Bikes with more than one seat:');
	mixes.forEach((mix) => {
		console.log(mix.title, mix.coverImage);
	});
});
export default () => (
	<Layout title="Mixes Page">
		{console.log('hello')}
		<section className="mixes">
			<h2 className="title">Listen</h2>
			<p className="subtitle">
				<span>SoundCloud:</span>
				<a href="#">@liquidityparty</a>
			</p>
			<div className="container">
				<Mix title="Devoye" />
				<Mix title="Zephyr Ann" />
				<Mix title="KFEELZ" />
				<Mix title="Muscle Cars" />
				<Mix title="Katie Shane" />
			</div>
		</section>
	</Layout>
);
