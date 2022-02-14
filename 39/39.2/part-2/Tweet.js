const Tweet = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
            <span>{props.name} - {props.date}</span>
            <p>{props.message}</p>
        </div>
    )
};