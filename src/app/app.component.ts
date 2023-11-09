import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AppService} from './components/app.service';
import {environment} from '../environments/environment';
import {currentRoute} from './common/utils';

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
    currentRoute(this.router, this.route)
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.appService.setCurrentTitle(route.data?.title);
      });
  }
}
