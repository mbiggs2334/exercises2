import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = (props) => {
    return (
        <div className='Pokedex'>
           { props.array.map(poke => {
                return <Pokecard name={poke.name} type={poke.type} id={poke.id} baseExperience={poke.base_experience}/>
            }) }
        </div>
    )
};

export default Pokedex;