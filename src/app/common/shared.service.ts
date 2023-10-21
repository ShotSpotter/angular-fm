import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {

  private _post$ = new BehaviorSubject<any>(null);

  post(msg: string): void {
    this._post$.next(msg);
  }

  receive(): Observable<any> {
    return this._post$.asObservable();
  }

}
