import Layout from '../layouts/Main';
import Party from '../components/party';

export default () => (
	<Layout>
		<section className="future">
			<h2>Upcoming</h2>
			<div className="container">
				<Party title="First Part" url="https://via.placeholder.com/350x410" />
			</div>
		</section>
		<section className="past">
			<h2>Past</h2>
			<div className="container">
				<Party title="Old Party 1" url="https://via.placeholder.com/300x600" />
				<Party title="Old Party 2" url="https://via.placeholder.com/300x600" />
				<Party title="Old Party 3" url="https://via.placeholder.com/300x600" />
				<Party title="Old Party 4" url="https://via.placeholder.com/300x600" />
			</div>
		</section>
	</Layout>
);
