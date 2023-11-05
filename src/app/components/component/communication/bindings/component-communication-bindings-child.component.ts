import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-component-communication-bindings-child',
  template: `
      <div class="container-fluid background-color">
          <h5 class="text-accent">Child Component</h5>
          <div class="d-flex flex-wrap">
              Number received from Parent: {{number}}
          </div>
      </div>
  `,
  styleUrls: ['../../component.component.scss']
})
export class ComponentCommunicationBindingsChildComponent implements OnChanges {

  @Input() number?: number;
  @Output() updatedNumber = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.number?.currentValue) {
      this.updatedNumber.next(Math.sqrt(changes.number.currentValue));
    }
  }
}
