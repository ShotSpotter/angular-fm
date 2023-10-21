import {Component, OnInit} from '@angular/core';
import {AppService} from "./components/app.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {filter} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <h1 class="text-center my-5">
        <a [routerLink]="'/main'" class="text-dark">{{title}}</a>
      </h1>
      <router-outlet></router-outlet>
    </div>`
})

export class AppComponent implements OnInit {

  title = 'Angular Demo';
  currentViewComponent: string = ''

  constructor(
    private appService: AppService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.appService.get()
      .pipe(filter(m => !!m))
      .subscribe(message => {
        this.snackbar.open(message), '!', {duration: 5000};
      })
  }

}
