import {NgModule} from '@angular/core';
import {BlockComponent} from './block.component';
import {MaterialModule} from '../../common/material.module';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

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
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    BlockComponent,
    CardComponent
  ]
})
export class SharedModule {
}
