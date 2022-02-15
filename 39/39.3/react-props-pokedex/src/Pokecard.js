import './Pokecard.css';

const Pokecard = ({ id, name, type, baseExperience }) => {
    let src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className='Pokecard'>
            <h1 className='Pokecard-header'>{name}</h1>
            <img className='Pokecard-img' src={src} alt='' width='200px' />
            <span className='Pokecard-type'>Type: {type}</span>
            <span className='Pokecard-exp'>EXP: {baseExperience}</span>
        </div>
    )
};

export default Pokecard;