import React, { Component } from 'react';
import styles from './AtcCanvas.module.css';

import Track from './Track';

class AtcCanvas extends Component {

  canvas;
  ctx;

  TRACK_MAX_COUNT = 15;
  TRACK_BOUND_OFFSET = 150;

  trackFont = '9px Arial';

  tracks = [];

  state = {
    height: 0,
    width: 0
  }

  addNewTrack = () => {
    const track = new Track();
    const trackPos = this.generateTrackPos();
    track.setPos(trackPos.x, trackPos.y);
    this.tracks.push(track);
  }

  checkTrackIsInBounds = (track) => {
    if (this.state.width < track.xPos - this.TRACK_BOUND_OFFSET) {
      return false;
    }
    if (track.xPos + this.TRACK_BOUND_OFFSET < 0) {
      return false;
    }
    if (this.state.height < track.yPos - this.TRACK_BOUND_OFFSET) {
      return false;
    }
    if (track.yPos + this.TRACK_BOUND_OFFSET < 0) {
      return false;
    }
    return true;
  }

  manageTracks = () => {
    const aircraftToBeAdded = this.tracks.length < this.TRACK_MAX_COUNT;

    if (aircraftToBeAdded) {
      this.addNewTrack();
    }

    for (let i = 0; i < this.tracks.length; i++) {
      if (!this.checkTrackIsInBounds(this.tracks[i]))
        this.tracks.splice(i, 1);
    }
  }

  generateTrackPos = () => {
    const xLeft = -this.TRACK_BOUND_OFFSET;
    const xRight = this.state.width + this.TRACK_BOUND_OFFSET;
    const yTop = -this.TRACK_BOUND_OFFSET;
    const yBottom = this.state.height + this.TRACK_BOUND_OFFSET;

    const trackPos = {x: 0, y: 0};

    const sideSelector = Math.floor(Math.random() * 4);

    switch (sideSelector) {
      case 0:
        trackPos.x = xLeft;
        trackPos.y = Math.round(Math.random() * this.state.height);
        break;
      case 1:
        trackPos.x = xRight;
        trackPos.y = Math.round(Math.random() * this.state.height);
        break;
      case 2:
        trackPos.x = Math.round(Math.random() * this.state.width);
        trackPos.y = yTop;
        break;
      case 3:
        trackPos.x = Math.round(Math.random() * this.state.width);
        trackPos.y = yBottom;
        break;
      default:
        trackPos.x = Math.round(this.state.width/2);
        trackPos.y = Math.round(this.state.height/2);
    }

    return trackPos;
  }

  rect = (ctx, x, y, w, h) => {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
  }

  drawTag = (track, ctx) => {

    const x = track.xPos;
    const y = track.yPos;

    const headingVectorX = track.xSpd * track.gspd/4;
    const headingVectorY = -track.ySpd * track.gspd/4;

    const persVectorX = -track.xSpd * 10;
    const persVectorY = track.ySpd * 10;

    const labelVectorX =  headingVectorX > 0 ? 30 : -30;
    const labelVectorY =  headingVectorY > 0 ? -30 : 30;

    let varioArrow = '';
    if (track.flActual > track.flCleared)
      varioArrow = '\u25bc';
    if (track.flActual < track.flCleared)
      varioArrow = '\u25b2';

    let row1 = track.callsign + '  --  ' + track.type + '/' + track.wt;
    let row2 = track.flActual + '  ' + varioArrow + '  N' + track.gspd + '  --  ' + track.dest;
    let row3 = track.flCleared + '  ' + track.flExit + '  ASP  ARC';
    let row4 = track.hdg;

    row1 = row1.toString().replace(/0/g, 'Ø');
    row2 = row2.toString().replace(/0/g, 'Ø');
    row3 = row3.toString().replace(/0/g, 'Ø');
    row4 = row4.toString().replace(/0/g, 'Ø');

    ctx.font = this.trackFont;

    ctx.beginPath();
    ctx.moveTo(x - 3, y - 3);
    ctx.strokeRect(x, y, 6, 6);
    ctx.moveTo(x + 3, y + 3);
    ctx.lineTo(headingVectorX + x,headingVectorY + y);
    ctx.stroke();

    for (let i = 1; i < 6; i++) {
      ctx.strokeRect(x + 3 + persVectorX * i, y + 3 + persVectorY * i, 1, 1);
    }

    const labelVectorAbsX = x + labelVectorX;
    const labelVectorAbsY = y + labelVectorY;

    ctx.beginPath();
    ctx.moveTo(x + 3, y + 3);
    ctx.lineTo(labelVectorAbsX, labelVectorAbsY);
    ctx.stroke();

    const textBoxWidth = 100;
    const textBoxHeight = 25;

    let textBoxLeft = labelVectorAbsX;
    let textBoxTop = labelVectorAbsY;

    if (labelVectorAbsX < x)
      textBoxLeft = labelVectorAbsX - textBoxWidth;
    if (labelVectorAbsY < y)
      textBoxTop = labelVectorAbsY - textBoxHeight;

    ctx.fillText(row1, textBoxLeft, textBoxTop);
    ctx.fillText(row2, textBoxLeft, textBoxTop + 10);
    ctx.fillText(row3, textBoxLeft, textBoxTop + 20);
    ctx.fillText(row4, textBoxLeft, textBoxTop + 30);

    track.move(0.005);
  }

  clear = () => {
    this.ctx.clearRect(0, 0, this.state.width, this.state.height);
  }

  draw = () => {
    this.manageTracks();

    let canvas2 = document.createElement('canvas');
    canvas2.width = this.state.width;
    canvas2.height = this.state.height;

    var ctx2 = canvas2.getContext('2d');

    this.clear();
    ctx2.fillStyle = '#223044';
    this.rect(ctx2, 0,0,this.state.width, this.state.height);
    ctx2.fillStyle = '#40FFD0';
    ctx2.strokeStyle = '#40FFD0';

    for (let i = 0; i < this.tracks.length; i++) {
      this.drawTag(this.tracks[i], ctx2);
    }

    //this.drawTag(this.ac, ctx2);

    this.ctx.drawImage(canvas2, 0, 0);
  }

  updateCanvasDimensions = () => {
    const width = this.refs.divElement.clientWidth;
    const height = this.refs.divElement.clientHeight;

    this.setState({width: width, height: height });
  }

  componentDidMount = () => {
    this.updateCanvasDimensions();
    window.addEventListener('resize', this.updateCanvasDimensions);

    this.ctx = this.refs.canvas.getContext('2d');
    setInterval(this.draw, 100);
  }

  componentWillUnmount = () => {
      window.removeEventListener('resize', this.updateCanvasDimensions);
  }

  render = () => {
    return (
      <div className={styles.AtcCanvasWrapper} ref="divElement">
      <canvas
        ref="canvas"
        id="canvas"
        width={this.state.width}
        height={this.state.height}>
      </canvas>
      </div>)
  }
}

export default AtcCanvas;
