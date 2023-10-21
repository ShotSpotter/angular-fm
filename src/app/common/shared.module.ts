import {NgModule} from "@angular/core";
import {BlockComponent} from "./block.component";
import {MaterialModule} from "../../common/material.module";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    BlockComponent,
    CardComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    BlockComponent,
    CardComponent,
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule {
}
