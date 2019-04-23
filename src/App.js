import React, { Component } from "react"



class Runefield extends Component {

  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.coords = [];

  }

  componentDidMount() {
    this.canvas = this.refs.myCanvas;
    this.ctx = this.canvas.getContext("2d");
    this.ctxCoor = this.refs.myCanvas.getBoundingClientRect();
    let ctx = this.canvas.getContext("2d");
    this.raf = "";
    this.sline = {
      x: 100,
      y: 100,
      vx: 5,
      vy: 1,
      radius: 25,
      color: 'blue',
      draw(fromX, fromY) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    this.historyObj = {
      history: [],
      canvas: null
    }

  }

  clear() {
    // let reloadData = JSON.parse(this.historyObj.history[0]);
    // let ctx = this.historyObj.canvas.getContext('2d');
    // ctx.putImageData(reloadData, 0, 0);
  }

  drawLine(x_first, y_first, x_second, y_second) {
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

  getCoords(e) {

    // this.historyObj.canvas = this.canvas;
    // let historyCtx = this.historyObj.canvas.getContext('2d');
    // let data = JSON.stringify(historyCtx.getImageData(0, 0, this.historyObj.canvas.width, this.historyObj.canvas.height));
    // console.log(data);

    

    this.drawCircle(e.clientX - this.ctxCoor.left, e.clientY - this.ctxCoor.top, 3);
    // this.historyObj.history.push(data);
    console.log(e.clientX, e.clientX + this.ctxCoor.left);
    let x1, x2, y1, y2;
    this.coords.push(e.clientX - this.ctxCoor.left, e.clientY - this.ctxCoor.top);
    console.log(this.coords);

    if (this.coords.length === 4) {

      x1 = this.coords[0]; x2 = this.coords[2];
      y1 = this.coords[1]; y2 = this.coords[3];

      var perpX = (x1 + x2) / 2;
      var perpY = (y1 + y2) / 2;


      this.drawCircle(perpX, perpY, 3);
      this.drawLine(this.coords[0], this.coords[1], this.coords[2], this.coords[3]);
      this.coords = [];

      this.canvas.onmousemove = (e) => {
        this.clear();
        this.sline.x = e.clientX;
        this.sline.y = e.clientY;
        this.sline.draw(this.coords[0], this.coords[1]);
      }

    }
  }

  preCastLine(e) {

  }

  restoreCanvas() {

  }


  render() {
    return (
      <canvas
        ref="myCanvas"
        onMouseDown={(e) => this.restoreCanvas(e)}
        onClick={(e) => this.getCoords(e)}
        style={{ "border": "1px solid #c6c6c6" }}
        width="500" height="500">
      </canvas>
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