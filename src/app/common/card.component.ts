import {Component, DoCheck, Input} from "@angular/core";

export interface CardData {
  title?: string,
  icon?: string,
  content?: string,
  css?: string | string[]
  url?: string
  urlTitle?: string
}

@Component({
  selector: 'app-card-component',
  template: `
    <mat-card class="col-12 m-2">
      <mat-card-title [class]="data?.css" class="text-center">
        {{data?.title}}
      </mat-card-title>
      <mat-card-content>
        <ng-content></ng-content>
        <div class="row align-items-center justify-content-center align-self-stretch" *ngIf="data?.icon">
          <mat-icon class="card-icon">{{data?.icon}}</mat-icon>
        </div>
        <div class="col-12 px-2" *ngIf="data?.content">
          <span class="text-muted">{{data.content}}</span>
        </div>
        <div class="row" *ngIf="data.url">
          <button mat-raised-button color="primary" [routerLink]="data.url">{{data.urlTitle}}</button>
        </div>
      </mat-card-content>
    </mat-card>
  `
})
export class CardComponent implements DoCheck {

  @Input() data: CardData = {} as any;

  ngDoCheck(): void {

  }
}
