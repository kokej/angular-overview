import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  isLogged: boolean;
  userLoggedId: number;
  constructor(private userService: UserService) {
    this.getIsLogged();
  }

  getIsLogged(loggedId?) {
    this.userLoggedId = loggedId || this.userService.getUserLogged();
    this.isLogged = this.userLoggedId !== undefined;
  }

  getIsLoggedSubscription() {
    return this.userService.userId$.subscribe(loggedId =>
      this.getIsLogged(loggedId)
    );
  }

  ngOnInit() {
    this.getIsLoggedSubscription();
  }
}
