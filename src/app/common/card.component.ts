import {Component, DoCheck, Input} from "@angular/core";
import {ThemePalette} from "@angular/material/core";

export interface CardData {
  id?:any;
  title?: string,
  icon?: string,
  iconColor?: ThemePalette,
  content?: string,
  css?: string,
  titleCss?: string | string[]
  url?: string
  urlTitle?: string
  img?: string
  extra?: {[key: string]: any}
}

@Component({
  selector: 'app-card-component',
  template: `
    <mat-card class="col-12 m-2" [class]="data?.css || ''">
      <mat-card-title [class]="data?.titleCss" class="text-center" *ngIf="data.title">
        {{data?.title}}
        <ng-content select="title"></ng-content>
      </mat-card-title>
      <mat-card-content>
        <div class="icon-img-div" *ngIf="data?.icon || data?.img">
          <mat-icon class="card-icon" [color]="data?.iconColor">{{data?.icon}}</mat-icon>
          <img class="img" [src]="data.img" alt=""/>
        </div>
        <div class="w-100 px-2 text-center" *ngIf="data?.content">
          <span class="text-muted">{{data?.content}}</span>
        </div>
        <div class="d-flex" *ngIf="data?.url">
          <button mat-raised-button color="primary" [routerLink]="data.url">{{data.title}}</button>
        </div>
        <ng-content></ng-content>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .icon-img-div {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: stretch;
      margin-bottom: 1rem;
    }
  `]
})
export class CardComponent implements DoCheck {

  @Input() data: CardData = {} as any;

  ngDoCheck(): void {

  }
}
