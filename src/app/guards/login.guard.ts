import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLogged = this.userService.getUserLogged();
    console.log(
      `AuthGuard#canActivate called, ${isLogged ? 'access' : 'forbidden'}`
    );
    return isLogged !== undefined;
  }
}
