import {Component} from "@angular/core";
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {TreeNode} from "../../../common/tree-node";
import {USER_LIST, UserNode} from "./user-data";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../common/user.service";
import {AutoUnsubscribe} from "../../../common/auto-unsubscribe";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-routing',
  template: `
    <div class="container-fluid">
      <div class="container background-color">
        <div class="row">
          <div class="col-12 col-md-2">
            <h2 class="p-2 mt-md-4 m-0">Users</h2>
            <mat-divider></mat-divider>
            <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
              <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding [class.ps-3]="node.level > 0" class="background-color-primary-lite-x">
                <button mat-icon-button disabled></button>
                <span class="cursor-pointer" (click)="viewDetail(node)">{{node.name}}</span>
                <mat-icon *ngIf="node.secured && !authenticated" class="ms-1">lock</mat-icon>
                <mat-icon *ngIf="node.secured && authenticated" class="ms-1">lock_open</mat-icon>
              </mat-tree-node>
              <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding class="background-color-primary-lite-x">
                <div class="mat-tree-node">
                  <button mat-icon-button matTreeNodeToggle [attr.aria-label]="'Toggle ' + node.name">
                    <mat-icon class="mat-icon-rtl-mirror">
                      {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
                    </mat-icon>
                  </button>
                  <span class="cursor-pointer" (click)="viewDetail(node)">{{node.name}}</span>
                  <mat-icon *ngIf="node.secured && !authenticated" class="ms-1">lock</mat-icon>
                  <mat-icon *ngIf="node.secured && authenticated" class="ms-1">lock_open</mat-icon>
                </div>
                <div [class.d-none]="!treeControl.isExpanded(node)" role="group">
                  <ng-container matTreeNodeOutlet></ng-container>
                </div>
              </mat-tree-node>
            </mat-tree>
            <div class="row m-0 mt-3">
              <button mat-raised-button color="primary" (click)="login()" *ngIf="!authenticated">Log In</button>
            </div>
          </div>
          <div class="col-12 col-md-10">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      mat-tree-node {
        margin-bottom: 1px;
      }
    `
  ]
})
@AutoUnsubscribe
export class UserListComponent {

  private _destroy$ = new Subject<any>()
  private _transformer = (node: UserNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: `${node.firstName} ${node.lastName}`,
      id: node.id,
      level: level,
      secured: node.secured
    } as any;
  };

  authenticated = false;
  treeControl = new FlatTreeControl<TreeNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.dataSource.data = USER_LIST;
    this.userService.isAuthenticated()
      .pipe(takeUntil(this._destroy$))
      .subscribe(a => this.authenticated = a);
  }

  hasChild = (_: number, node: TreeNode) => node.expandable;
  isSecured = (_: number, node: TreeNode) => node.expandable;

  viewDetail(node: UserNode) {
    this.router.navigate([node.id], {relativeTo: this.route})
  }

  login() {
    this.userService.authenticate(true);
  }

  logOut() {
    this.userService.authenticate(false);
  }
}
