import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsManagerRoutingModule } from './documents-manager-routing.module';
import { RouterModule } from "@angular/router";
import { AnnotationsModule } from '../../modules/annotations/annotations.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AnnotationsModule,
    DocumentsManagerRoutingModule
  ],
  declarations: [
    DetailsComponent
  ],
})
export class DocumentsManagerModule {
}
