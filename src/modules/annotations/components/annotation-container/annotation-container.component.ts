import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAnnotation } from '../../iterfaceses';
import { ANNOTATION_TYPES } from '../../enums';

@Component({
  selector: 'annotation-container',
  templateUrl: './annotation-container.component.html',
  styleUrl: './annotation-container.component.scss',
})
export class AnnotationContainerComponent implements OnInit {
  @Input() annotations: IAnnotation[];

  @Output() onUpdateAnnotation = new EventEmitter<IAnnotation>();
  @Output() onRemoveAnnotation = new EventEmitter<number>();

  public TYPES: any;

  constructor() {
    this.annotations = [];
    this.TYPES = null;
  }

  ngOnInit() {
    this.TYPES = ANNOTATION_TYPES;
  }

  public updateAnnotation(annotation: IAnnotation, position: { offsetTop: number; offsetLeft: number }): void {
    this.onUpdateAnnotation.emit({ ...annotation, ...position });
  }

  public removeAnnotation(annotationId: number | any): void {
    this.onRemoveAnnotation.emit(annotationId);
  }
}
