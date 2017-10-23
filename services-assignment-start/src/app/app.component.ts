import { Component } from '@angular/core';
import { UsersService } from 'app/users.service';
import { CounterService } from 'app/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {

  activeToInactiveCounter: number;
  inactiveToActiveCounter: number;

  constructor(
    private counterService: CounterService
  ) {
    this.activeToInactiveCounter = this.counterService.activeToInactiveCounter;
    this.inactiveToActiveCounter = this.counterService.inactiveToActiveCounter;
  }

}
