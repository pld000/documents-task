import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsManagerRoutingModule } from './documents-manager-routing.module';
import { RouterModule } from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DocumentsManagerRoutingModule
  ],
  declarations: [],
})
export class DocumentsManagerModule {
}
