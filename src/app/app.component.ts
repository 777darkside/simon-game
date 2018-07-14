import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public colors = [
    {
      id: 'red',
      show: false,
      sound: './../assets/audio/low.mp3'
    },
    {
      id: 'blue',
      show: false,
      sound: './../assets/audio/mid-low.mp3'
    },
    {
      id: 'green',
      show: false,
      sound: './../assets/audio/mid-high.mp3'
    },
    {
      id: 'yellow',
      show: false,
      sound: './../assets/audio/high.mp3'
    },
  ];
  public quote = 'Press the green button to start';
  private gameIteration: number;
  private error = new Audio('./../assets/audio/err.mp3');
  private secuence: number[];
  private playerSecuence: any[];;

  public startGame() {
    this.secuence = [];
    this.createSecuence();
  }

  createSecuence() {
    this.quote = "Listen to the secuence";
    this.secuence.push(Math.floor(Math.random() * 4));
    this.gameIteration = 0;
    this.startShowing();
  }

  startShowing() {

    if (this.gameIteration >= this.secuence.length) {
      this.playerTurn();
      return;
    }

    const actualColor = this.colors[this.secuence[this.gameIteration]];
    actualColor.show = true;
    this.playSound(actualColor.sound);

    setTimeout(() => {
      actualColor.show = false;
      this.gameIteration = ++this.gameIteration;
      this.startShowing();
    }, 800);
  }

  playerTurn() {
    this.playerSecuence = [];
    this.gameIteration = 0;
    this.quote = "Your turn";
  }

  addToSecuence(color: any) {
    this.playerSecuence.push(color);

    if (this.colors[this.secuence[this.gameIteration]].id 
          === this.playerSecuence[this.gameIteration].id) {
      this.playSound(color.sound);
      this.gameIteration = ++this.gameIteration;
      
      if (this.gameIteration >= this.secuence.length) {
        setTimeout(() => {
          this.createSecuence();
        }, 1500);
      }

    } else {
      this.quote = `You lost! You made ${(this.secuence.length - 1) * 100} points, press the button to start again`;
      this.error.play();
    }
  }

  playSound(src) {
    const sound = new Audio(src);
    sound.play()
  }
}
