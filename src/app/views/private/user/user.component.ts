import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  public unsubscribe$ = new Subject<void>();
  userId: number;
  user: Observable<any>;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  getUser() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    return this.userService
      .getUser(this.userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(user => (this.user = user));
  }

  ngOnInit() {
    this.getUser();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
