import {Component} from "@angular/core";
import {AutoUnsubscribeComponent} from "../../../../common/components/auto-unsubscribe.component";
import {SharedService} from "../../../../common/services/shared.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-component-communication-service',
  template: `
    <div class="container-fluid background-color">
      <h5 class="text-accent">Another Component</h5>
      <div class="d-flex flex-wrap">
        <h6>Message Received: <span class="text-accent">{{message}}</span></h6>
      </div>
    </div>
  `,
  styleUrls: ['../../component.component.scss']
})
export class ComponentCommunicationServiceComponent extends AutoUnsubscribeComponent {

  message: string = ''

  constructor(
    private sharedService: SharedService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    this.sharedService.receive()
      .pipe(takeUntil(this._destroy$))
      .subscribe(message => this.message = message);
  }
}
