import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {AppService} from "./components/app.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  template: `
    <div class="brand">
        <span class="brand-img">
          <img src="../assets/img/brand.png" alt="brand" [routerLink]="'/main'">
        </span>
      <span [routerLink]="'/main/features'" class="brand-name">{{brandName}}</span>
    </div>
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent implements OnInit {

  brandName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService
  ) {
    this.brandName = `${environment.setting.title}`
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route.snapshot),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.appService.setCurrentTitle(route.data?.title);
      });
  }
}
