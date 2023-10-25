import {Component} from "@angular/core";
import {FoodNode, TREE_DATA} from "./data";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-safety-smart',
  template: `
    <div class="container-fluid">
      <mat-drawer-container autosize>
        <mat-drawer #drawer mode="side" [opened]="true">
          <mat-tree [dataSource]="dataSource" [treeControl]="treeControl" class="example-tree">
            <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle>
              {{node.name}}
            </mat-tree-node>
            <mat-nested-tree-node *matTreeNodeDef="let node; when: hasChild">
              <div class="mat-tree-node">
                <button mat-icon-button matTreeNodeToggle
                        [attr.aria-label]="'Toggle ' + node.name">
                  <mat-icon class="mat-icon-rtl-mirror">
                    {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
                  </mat-icon>
                </button>
                {{node.name}}
              </div>
              <div [class.example-tree-invisible]="!treeControl.isExpanded(node)"
                   role="group">
                <ng-container matTreeNodeOutlet></ng-container>
              </div>
            </mat-nested-tree-node>
          </mat-tree>
        </mat-drawer>

        <div class="example-sidenav-content">
          Side Nav Content
        </div>
      </mat-drawer-container>
    </div>
  `
})
export class SafetySmartComponent {

  folders = TREE_DATA;

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
