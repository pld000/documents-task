import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationTextComponent } from './components/annotation-text/annotation-text.component';
import { AnnotationContainerComponent } from './components/annotation-container/annotation-container.component';
import { AnnotationImageComponent } from './components/annotation-image/annotation-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnnotationContainerComponent,
    AnnotationTextComponent,
    AnnotationImageComponent,
  ],
  exports: [
    AnnotationContainerComponent,
    AnnotationTextComponent,
    AnnotationImageComponent,
  ],
})
export class AnnotationsModule {
}
