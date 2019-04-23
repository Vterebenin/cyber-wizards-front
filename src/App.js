import React, { Component } from "react"

class Speech extends Component {

  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.refs = React.createRef();
    this.coords = [];
    
  }

  componentDidMount() {
    this.ctx = this.refs.myCanvas.getContext("2d");
    console.log(this.ctx);
    this.ctxCoor = this.refs.myCanvas.getBoundingClientRect();
  }

  drawLine(x_first, y_first, x_second, y_second) {
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(x_first, y_first);
    this.ctx.lineTo(x_second, y_second);
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  drawCircle(x, y, radius) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    this.ctx.closePath();
    this.ctx.fill();
  }

  showLine(x_first, y_first, x_second, y_second) {
    this.ctx.beginPath();
    this.ctx.moveTo(x_first, y_first);
    this.ctx.lineTo(x_second, y_second);
    this.ctx.lineWidth = 2;
  }

  getCoords(e) {

    this.drawCircle(e.clientX - this.ctxCoor.left, e.clientY - this.ctxCoor.top, 3);
    console.log(e.clientX, e.clientX + this.ctxCoor.left);
    let x1, x2, y1, y2;
    this.coords.push(e.clientX - this.ctxCoor.left, e.clientY - this.ctxCoor.top);
    
    if (this.coords.length === 4) {

      x1 = this.coords[0]; x2 = this.coords[2];
      y1 = this.coords[1]; y2 = this.coords[3];

      var perpX = (x1 + x2) / 2;
      var perpY = (y1 + y2) / 2;


      this.drawCircle(perpX, perpY, 3);
      this.showLine(this.coords[0], this.coords[1], this.coords[2], this.coords[3]);
      this.drawLine(this.coords[0], this.coords[1], this.coords[2], this.coords[3]);
      this.coords = [];

    }
  }
  
  render() {
    return (
      <canvas ref="myCanvas" onClick={(event) => this.getCoords(event)} onMouseDown={(event) => this.getCoords(event)} style={{ "border": "1px solid #c6c6c6" }}  width="500" height="500">

      </canvas>
    )
  }
}

export default Speech


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