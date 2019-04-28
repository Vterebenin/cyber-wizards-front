import React, { Component } from "react"
import PatternLock from './patternLock';
import CastingButton from './components/castingButton/';

class Runefield extends Component {
  
  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.coords = [];
    this.spellbook = {
      fireball: 123,
      iceshard: 169873,
      healingWard: 1234,
      healingWard2: 1237,
    }
  }

  componentDidMount() {

    this.lock = new PatternLock("#patternContainer");

    Object.keys(this.spellbook).map(key => {
      console.log(key, this.spellbook[key]);
      let number = `${this.spellbook[key].toString()}`;
      console.log(number);
      this.lock.checkForPattern(number, () => {
        alert(`You cast your spell: ${key}!`);
      }, () => {
        alert("You have failed! take 2 damage");
      });
    })
  }

  render() {
    return (
      <div className="b-pattern">
        <div id="patternContainer">
        </div>
        <CastingButton />
      </div>
    )
  }
}

export default Runefield


//-------------------------CSS------------------------------------

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center'
//   },
//   button: {
//     width: '60px',
//     height: '60px',
//     background: 'lightblue',
//     borderRadius: '50%',
//     margin: '6em 0 2em 0'
//   },
//   interim: {
//     color: 'gray',
//     border: '#ccc 1px solid',
//     padding: '1em',
//     margin: '1em',
//     width: '300px'
//   },
//   final: {
//     color: 'black',
//     border: '#ccc 1px solid',
//     padding: '1em',
//     margin: '1em',
//     width: '300px'
//   }
// }

// const { container, button, interim, final } = styles