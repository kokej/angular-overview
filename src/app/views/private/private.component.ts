import { Component } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { UserServiceComponentBase } from './user-service-base.component';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent extends UserServiceComponentBase {
  constructor(protected userService: UserService) {
    super(userService);
  }

  getIsLogged(loggedId?) {
    this.userLoggedId = loggedId || this.userService.getUserLogged();
    this.isLogged = this.userLoggedId !== undefined;
  }
}
