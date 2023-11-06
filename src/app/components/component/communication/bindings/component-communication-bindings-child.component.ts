import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-component-communication-bindings-child',
  template: `
      <div class="container-fluid background-color">
          <h5 class="text-accent">Child Component</h5>
          <div class="d-flex flex-wrap">
            <h6>Message from Parent (@Input): <span class="text-accent">{{number}}</span></h6>
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
