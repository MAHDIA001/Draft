import  React,{ Component } from 'react';
import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
let padToThree = (number) => (number<=999 ? `00${number}`.slice(-3):number)
class Pokecard extends Component{
    render(){
        let imgSRC = `${POKE_API}${padToThree(this.props.id)}.png`
        return(
            <div className="Pokecard">
                <h1 className="Pokecards-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                <img src={imgSRC} alt={this.props.name} />
                </div>
                <div className="Pokecards-Data">Type: {this.props.type}</div>
                <div className="Pokecards-data"> Exp :{this.props.exp}</div>

            </div>
            
        )

        
    }
}
export default Pokecard;