import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {SharedService} from "../common/shared.service";

@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    timer(0, 1000)
      .subscribe(_ => {
        const message = new Date().toLocaleString();
        this.sharedService.post(message)
      })
  }

}
