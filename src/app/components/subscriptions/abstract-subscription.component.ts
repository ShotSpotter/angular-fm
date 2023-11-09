import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {Subject} from "rxjs";
import {AppService} from "../app.service";
import {SharedService} from "../../common/services/shared.service";

@Component({
  template: ``
})
export abstract class AbstractSubscriptionComponent implements OnInit, OnDestroy {

  @Output() event = new EventEmitter<any>()
  protected _destroy$ = new Subject();

  constructor(
    protected sharedService: SharedService,
    protected appService: AppService
  ) {
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
    console.log('Destroyed subscription: ', this._destroy$.closed)
  }

  ngOnInit(): void {
  }


}
