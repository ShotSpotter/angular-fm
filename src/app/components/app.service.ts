import {Injectable} from "@angular/core";
import {timer} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  }
)
export class AppService {

  private _currentDateTime = timer(1, 1000)
    .pipe(map(_ => new Date().toLocaleString()))

  currentDateTime() {
    return this._currentDateTime;
  }
}
