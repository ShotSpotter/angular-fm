import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class ComponentService {

  private _message = new BehaviorSubject<any>(null);

  push(msg: string): void {
    this._message.next(msg);
  }

  pull(): Observable<any> {
    return this._message.asObservable();
  }

}
