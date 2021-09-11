import {NgModule} from "@angular/core";
import {InputComponent} from "./input.component";
import {MaterialModule} from "../material.module";

@NgModule({
  declarations:[
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class InputModule {

}
