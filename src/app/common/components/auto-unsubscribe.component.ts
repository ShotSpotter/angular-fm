import {OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {AutoUnsubscribe} from './auto-unsubscribe';

@AutoUnsubscribe
export abstract class AutoUnsubscribeComponent implements OnInit, OnDestroy {

  protected _destroy$ = new Subject<any>()

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
