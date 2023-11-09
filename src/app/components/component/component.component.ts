import {Component} from '@angular/core';
import {ComponentData, ComponentFeatures} from './component-data';

@Component({
  selector: 'app-component',
  template: `
      <div class="container-fluid">
          <div class="container">
              <section class="section background-color mb-2">
                  <p [innerHTML]="componentData.content"></p>
                  <div class="text-center pt-3">
                    <pre>
                      <div class="code-block" [innerHTML]="componentData.code"></div>
                    </pre>
                  </div>
              </section>

              <div class="grid-component-features">
                  <mat-card *ngFor="let item of componentFeatures"
                            [routerLink]="item.url"
                            [routerLinkActive]="item.url"
                            class="cursor-pointer">
                      <mat-card-title class="text-center">{{item.title}}</mat-card-title>
                      <mat-card-content class="text-center">
                          <mat-icon class="card-icon" color="primary">{{item.icon}}</mat-icon>
                      </mat-card-content>
                  </mat-card>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['component.component.scss']
})
export class ComponentComponent {

  componentData = ComponentData;
  componentFeatures = ComponentFeatures;

}
