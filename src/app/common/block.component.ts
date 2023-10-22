import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'app-block-component',
  template: `
    <mat-card class="col-12 m-2">
      <mat-card-title [class]="css">
        {{title}}
      </mat-card-title>
      <mat-card-content>
        <div class="col-12 px-2">
          <span class="text-muted">{{text}}</span>
        </div>
      </mat-card-content>
      <mat-card-footer>
        <ng-content select="[footer]"></ng-content>
      </mat-card-footer>
    </mat-card>
  `
})
export class BlockComponent implements OnChanges {

  @Input() title: any;
  @Input() text: any;
  css: string = '';
  changeCount = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.changeCount++;
    if (this.changeCount > 2) {
      this.css = 'text-danger'
    }
  }
}
