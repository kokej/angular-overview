import { UserForm } from './../../../interfaces/UserForm';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogged: boolean;
  userLoggedId: number;
  options: UserForm[] = [
    {
      id: 1,
      username: 'Bret'
    },
    {
      id: 2,
      username: 'Antonette'
    },
    {
      id: 3,
      username: 'Bret'
    }
  ];
  userForm = new FormGroup({
    id: new FormControl(
      {
        value: ''
      } // , Validators.required
    )
  });

  constructor(private userService: UserService, private router: Router) {
    this.getIsLogged();
  }

  setFormState() {
    const idControl = this.userForm.controls.id;
    this.isLogged ? idControl.disable() : idControl.enable();
  }

  getIsLogged(loggedId?) {
    this.userLoggedId = loggedId || this.userService.getUserLogged();
    this.isLogged = this.userLoggedId !== undefined;
    this.setFormState();
  }

  getIsLoggedSubscription() {
    return this.userService.userId$.subscribe(loggedId =>
      this.getIsLogged(loggedId)
    );
  }

  login(e) {
    e.preventDefault();

    const userId = this.isLogged
      ? undefined
      : parseInt(this.userForm.controls.id.value, 10);
    this.userService.setUserLogged(userId);
    console.log(this.userForm);
    if (this.isLogged) {
      const url: string = 'private/user/' + this.userLoggedId;
      this.router.navigateByUrl(url);
    }
  }

  ngOnInit() {
    this.getIsLoggedSubscription();
  }
}
