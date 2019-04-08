//import client from './client';

const Party = (props) => {
	return (
		<div className="party">
			<a href={props.url}>
				<img className="party-flyer" src={props.url} alt={props.title} />
			</a>
		</div>
	);
};
export default Party;
