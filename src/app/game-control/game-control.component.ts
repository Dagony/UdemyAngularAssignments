import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './app-gamecontrol.component.html',
  styleUrls: [
    './app-gamecontrol.component.css'
  ]

})
export class GameControlComponent {

  public count: number = 0;

  @Output() public intervalEvent = new EventEmitter<number>();

  private _setIntervalHandler: any;

  constructor() {

  }

  startGame() {
    this._setIntervalHandler = setInterval( () => {
      this.count++;
      this.intervalEvent.emit(this.count);
    }, 1000);
  }

  endGame() {
    clearInterval(this._setIntervalHandler);
  }

}
