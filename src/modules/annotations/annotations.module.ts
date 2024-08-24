import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationTextComponent } from './components/annotation-text/annotation-text.component';
import { AnnotationContainerComponent } from './components/annotation-container/annotation-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnnotationContainerComponent,
    AnnotationTextComponent,
  ],
  exports: [
    AnnotationContainerComponent,
    AnnotationTextComponent,
  ],
})
export class AnnotationsModule {
}
