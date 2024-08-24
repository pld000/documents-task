import { Component } from '@angular/core';
import { IAnnotation } from '../../iterfaceses';

@Component({
  selector: 'annotation-container',
  templateUrl: './annotation-container.component.html',
  styleUrl: './annotation-container.component.scss'
})
export class AnnotationContainerComponent {
  public annotations: IAnnotation[];

  constructor() {
    this.annotations = [];
  }
}
