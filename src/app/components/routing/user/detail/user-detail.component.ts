import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AutoUnsubscribe} from "../../../../common/components/auto-unsubscribe";
import {Subject} from "rxjs";
import {map, takeUntil} from "rxjs/operators";
import {getById, USER_LIST, UserNode} from "../../../../common/models/user-data";

@AutoUnsubscribe
@Component({
  selector: 'app-user-detail',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <app-card-component class="col-12" [data]="{css: 'shadow-none'}">
            <h1 title class="d-flex align-items-center">
              <mat-icon class="me-2">person_outline</mat-icon>
              <span><code>{{user?.firstName}} {{user?.lastName}}</code></span>
            </h1>
            <div class="row">
              <dl class="col-12 col-md-2">
                <dt>ID</dt>
                <dd>{{user?.id}}</dd>
              </dl>
              <dl class="col-12 col-md-2">
                <dt>First Name</dt>
                <dd>{{user?.firstName}}</dd>
              </dl>
              <dl class="col-12 col-md-2">
                <dt>Last Name</dt>
                <dd>{{user?.lastName}}</dd>
              </dl>
              <dl class="col-12 col-md-2">
                <dt>DOB</dt>
                <dd>{{user?.birthdate}}</dd>
              </dl>
              <dl class="col-12 col-md-2">
                <dt>Email</dt>
                <dd>{{user?.email}}</dd>
              </dl>
              <dl class="col-12 col-md-2">
                <dt>Phone</dt>
                <dd>{{user?.phone}}</dd>
              </dl>
              <dl class="col-12 col-md-2">
                <dt>Address</dt>
                <dd>{{user?.address}} {{user?.city}} {{user?.state}} {{user?.zip}}</dd>
              </dl>
            </div>
          </app-card-component>
        </div>
      </div>
    </div>
  `
})
export class UserDetailComponent implements OnInit {

  private _destroy$ = new Subject<any>();
  private readonly _userData: UserNode[] = USER_LIST;
  user: UserNode | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map(p => p.id),
        takeUntil(this._destroy$)
      )
      .subscribe(id => {
        let match: UserNode | null = null;
        this._userData.forEach(u => {
          if (!match) {
            match = getById(u, id);
          }
        });
        this.user = match;
      })
  }

}
