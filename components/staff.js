export default props => (
    <div className="column is-half">
        <div className="staff">
            <img className="s-image" src={props.url} />
            <p className="name">{props.name}</p>
            <p className="s-title">{props.title}</p>
        </div>
    </div>
);
