import React, { Component } from "react"
import PatternLock from './patternLock';
import CastingButton from './components/castingButton/';

class Runefield extends Component {
  
  state = {
    text: 'Start casting!',
    canCasting: false,
  }

  onCasting = () => {
    this.setState({
      canCasting: !this.state.canCasting
    })
    console.log(this.state.canCasting)
    let phrase = "";
    if (this.state.canCasting) {
      phrase = "Start Casting!";
    }  else {
      phrase = "Cast Now!";
    }
    this.setState({
      text: phrase
    })
  }
  
  constructor() {
    super()
    this.coords = [];
    this.spellbook = {
      fireball: 123,
      iceshard: 169873,
      healingWard: 1234,
      healingWard2: 1237,
    }
    this.bookOfFire = {
      fireball: 123,
      fireArmor: 169873,
      scorch: 1234,
      Radiance: 1237,
    }
  }

  componentDidMount() {
    this.lock = new PatternLock("#patternContainer");
    this.lock.disable();
    if (this.state.canCasting) {
      Object.keys(this.spellbook).map(key => {
        let number = `${this.spellbook[key].toString()}`;
        this.lock.checkForPattern(number, () => {
          alert(`You cast your spell: ${key}!`);
        }, () => {
          alert("You have failed! take 2 damage");
        });
        return false
      })
    }
  }
  componentDidUpdate(prevProps) {
    if (this.state.canCasting) {
      this.lock.enable();
      Object.keys(this.spellbook).map(key => {
        let number = `${this.spellbook[key].toString()}`;
        this.lock.checkForPattern(number, () => {
          alert(`You cast your spell: ${key}!`);
        }, () => {
          alert("You have failed! take 2 damage");
        });
        return false
      })
    } else {
      this.lock.reset();
      this.lock.disable();
    }
  }

  render() {
    return (
      <div className="b-pattern">
        <div id="patternContainer">
        </div>
        <CastingButton onCasting={this.onCasting} text={this.state.text} />
      </div>
    )
  }
}

export default Runefield


