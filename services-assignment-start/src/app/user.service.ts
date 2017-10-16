
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class UserService {
  // simplify the user management without emitting
  // switching users between Active and Inactive

  activeUsers = [
     'Max', 'Anna'
    ];

  inactiveUsers = [
    'Chris', 'Manu'
  ];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
