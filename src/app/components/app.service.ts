import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AppService {

  private _message$ = new BehaviorSubject<any>(null);

  post(msg: string): void {
    this._message$.next(msg);
  }

  get() {
    return this._message$.asObservable();
  }
}
