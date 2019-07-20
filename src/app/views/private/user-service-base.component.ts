import { OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export abstract class UserServiceComponentBase implements OnInit, OnDestroy {
  public unsubscribe$ = new Subject<void>();

  protected isLogged: boolean;
  protected userLoggedId: number;
  constructor(protected userService: UserService) {}

  getIsLogged(loggedId?) {}

  ngOnInit() {
    this.getIsLogged();

    return this.userService.userId$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(loggedId => this.getIsLogged(loggedId));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
