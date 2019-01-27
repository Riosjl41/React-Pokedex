import React, { Component } from 'react';


class PokeList extends Component{
        state={
          name:'',
          imgUrl:'',
          type:'',
          pokeIndex: ''
        }

        async componentDidMount() {
          const {name, url} = this.props;
          const pokeIndex = url.split('/')[url.split('/').length-2];
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;

          this.setState({name:name , imgUrl:imageUrl, pokeIndex:pokeIndex});
        }

      render() {
        return (
          <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img onLoadalt='pokeimg' src={this.state.imgUrl} />
            <p>{this.state.name}</p>
          </div>
        );
      }
  }
 
export default PokeList;