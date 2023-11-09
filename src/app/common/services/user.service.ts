import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private _authenticated$ = new BehaviorSubject<boolean>(false);

  isAuthenticated(): Observable<boolean> {
    return this._authenticated$.asObservable();
  }

  authenticate(val: boolean) {
    this._authenticated$.next(val);
  }
}
