export default (props) => (
	<div className="mix">
		<p>{props.title}</p>
		<img src={props.image} alt="" />
		<div className="description">
			<p>
				{props.description ||
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eos aliquid voluptatum provident obcaecati illo earum in neque, autem amet, vitae pariatur. Earum ut in magnam consequuntur est facere iste'}
			</p>
		</div>
	</div>
);
