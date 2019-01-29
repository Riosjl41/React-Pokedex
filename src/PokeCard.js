import React, { Component } from 'react';
import axios from 'axios';

const Type_Color = {
  normal: '#BDBCB1',
  poison: '#A95CA0',
  psychic: '#FA64B5',
  grass: '#8DD851',
  ground: '#EBCB59',
  ice: '#96F1FF',
  fire: '#FA5442',
  rock: '#CAB970',
  dragon: '#8573FF',
  water: '#57AEFF',
  bug: '#BAC91D',
  fighting: '#A75546',
  ghost: '#7874D5',
  steel: '#C3C1D8',
  flying: '#77A4FF',
  fairy: '#F9AEFF',
  electric: '#FDE33B',
  dark: '#896854',
}

class PokeList extends Component{
        state={
          name:'',
          imgUrl:'',
          type1:'',
          type2:'',
          pokeIndex: ''
        }

        async componentDidMount() {
          const {name, url} = this.props;
          const pokeIndex = url.split('/')[url.split('/').length-2];
          const pokeUrl=`https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;

          const pokeData = await axios.get(pokeUrl);

          const type1 = pokeData.data.types[0].type.name;
          const type2 = pokeData.data.types[1].type.name;

          const imageUrl = pokeData.data.sprites.front_default;
          this.setState({type1:type1,type2:type2});

          this.setState({name:name , imgUrl:imageUrl, pokeIndex:pokeIndex});
        }

      render() {
        return (
          <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='pokeimg' src={this.state.imgUrl} />
            <p>{this.state.name}</p>
            <p className='f6 dim br-pill ph3 pv2 mb2 dib white' style={{backgroundColor:`${Type_Color[this.state.type1]}`}}>{this.state.type1}</p>
            <p className='f6 dim br-pill ph3 pv2 mb2 dib white' style={{backgroundColor:`${Type_Color[this.state.type2]}`}}>{this.state.type2}</p>

          </div>
        );
      }
  }
 
export default PokeList;