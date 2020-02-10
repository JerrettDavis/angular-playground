import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
