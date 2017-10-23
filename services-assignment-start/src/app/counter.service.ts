import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  inactiveToActiveCounter: number = 0;
  activeToInactiveCounter: number = 0;

  countInactiveToActive() {
    this.inactiveToActiveCounter = this.inactiveToActiveCounter + 1;
    console.log('Inactive to Active counter: ' + this.inactiveToActiveCounter);
  }

  countActiveToInactive() {
    this.activeToInactiveCounter = this.activeToInactiveCounter + 1;
    console.log('Active to Inactive counter: ' + this.activeToInactiveCounter);
  }
}
