import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {AutoUnsubscribe} from "../common/auto-unsubscribe";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@AutoUnsubscribe
@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid main-container">
      <h2 class="text-center fs-5 text-muted my-3">{{currentTitle}}</h2>
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent implements OnInit {

  private _destroy$ = new Subject();
  currentTitle: string | undefined;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getCurrentTitle()
      .pipe(takeUntil(this._destroy$))
      .subscribe(title => this.currentTitle = title);
  }

}
