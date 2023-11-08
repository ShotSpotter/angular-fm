import {NgModule} from '@angular/core';
import {BlockComponent} from './components/block.component';
import {MaterialModule} from '../../common/material.module';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BlockComponent,
    CardComponent
  ]
})
export class SharedModule {
}
