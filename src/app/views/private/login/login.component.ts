import { UserForm } from './../../../interfaces/UserForm';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    id: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService) {}

  login() {
    console.log(this.userForm);
  }

  ngOnInit() {}
}
