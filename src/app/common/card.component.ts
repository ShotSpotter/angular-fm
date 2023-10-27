import {Component, DoCheck, Input} from "@angular/core";
import {ThemePalette} from "@angular/material/core";

export interface CardData {
  title?: string,
  icon?: string,
  iconColor?: ThemePalette,
  content?: string,
  css?: string,
  titleCss?: string | string[]
  url?: string
  urlTitle?: string
}

@Component({
  selector: 'app-card-component',
  template: `
    <mat-card class="col-12 m-2" [class]="data?.css">
      <mat-card-title [class]="data?.titleCss" class="text-center" *ngIf="data.title">
        {{data?.title}}
        <ng-content select="title"></ng-content>
      </mat-card-title>
      <mat-card-content>
        <ng-content></ng-content>
        <div class="row align-items-center justify-content-center align-self-stretch mb-3" *ngIf="data?.icon">
          <mat-icon class="card-icon" [color]="data?.iconColor">{{data?.icon}}</mat-icon>
        </div>
        <div class="col-12 px-2" *ngIf="data?.content">
          <span class="text-muted">{{data?.content}}</span>
        </div>
        <div class="row" *ngIf="data?.url">
          <button mat-raised-button color="primary" [routerLink]="data.url">{{data.title}}</button>
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
