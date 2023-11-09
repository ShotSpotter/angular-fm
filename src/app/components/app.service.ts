import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, timer} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  }
)
export class AppService {

  private _currentTitle = new BehaviorSubject<string>('');

  private _currentDateTime = timer(1, 1000)
    .pipe(map(_ => new Date().toLocaleString()))

  currentDateTime(): Observable<string> {
    return this._currentDateTime;
  }

  setCurrentTitle(title: string): void {
    this._currentTitle.next(title);
  }

  getCurrentTitle(): Observable<string> {
    return this._currentTitle.asObservable();
  }
}
