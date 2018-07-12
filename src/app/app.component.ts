import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  iteration = 0;
  colors = [
    {
      color: 'red',
      class: 'showRed',
      show: false
    },
    {
      color: 'blue',
      class: 'showBlue',
      show: false
    },
    {
      color: 'Green',
      class: 'showGreen',
      show: false
    },
    {
      color: 'yellow',
      class: 'showYellow',
      show: false
    }
  ];
  secuence = [];

  startGame() {
    this.createSecuence();
  }

  createSecuence() {
    this.iteration = ++this.iteration;
    this.secuence.push(this.colors[(Math.floor(Math.random() * 4))]);
    console.log(this.secuence);
    this.showSecuence();
  }

  showSecuence() {
    for (const e of this.secuence) {
      // do something
    }
  }
}
