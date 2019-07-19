import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  // public unsubscribe$ = new Subject<void>();
  user: Observable<any>;
  constructor(private userService: UserService) {}

  getUser() {
    return;
  }

  ngOnInit() {
    this.userService
      .getUser()
      // .pipe(takeUntil(this.unsubscribe$))
      .subscribe(user => (this.user = user));
  }

  ngOnDestroy() {
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
  }
}
