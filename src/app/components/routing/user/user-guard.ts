import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable, of, Subject} from "rxjs";
import {UserService} from "../../../common/services/user.service";
import {AutoUnsubscribe} from "../../../common/components/auto-unsubscribe";
import {takeUntil} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Injectable} from "@angular/core";

@Injectable()
@AutoUnsubscribe
export class UserGuard implements CanActivate {

  private readonly _securedUser = '39-124-6957';
  private _authenticated = false;
  private _destroy$ = new Subject<any>();

  constructor(
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {
    this.userService.isAuthenticated()
      .pipe(takeUntil(this._destroy$))
      .subscribe(a => this._authenticated = a);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._authenticated && route.params.id == this._securedUser) {
      this.snackbar.open(`You're not authorized`, undefined, {duration: 1000});
      return of(false);
    }
    return of(true);
  }
}
