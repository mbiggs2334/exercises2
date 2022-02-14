const Person = (props) => {
    let message;
    let name;
    if(props.age < 18){
        message = 'You must be 18';
    } else {
        message = 'Please go vote!';
    };
    if(props.name.length > 8){
        name = props.name.slice(0,6) + '...';
    };
    return (
        <div>
            <p>Learn some more information about this person</p>
            <p>Name: {name || props.name}</p>
            <p>Age: {props.age} - {message}</p>
            <div>
                <h3>Hobbies:</h3>
                <ul>{props.hobbies.map(h => <li>{h}</li>)}</ul>
            </div>
        </div>
    )
};