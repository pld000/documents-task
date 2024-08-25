import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAnnotation } from '../../iterfaceses';
import { AnnotationsStoreService } from '../../services';
import { ANNOTATION_TYPES } from '../../enums';

@Component({
  selector: 'annotation-container',
  templateUrl: './annotation-container.component.html',
  styleUrl: './annotation-container.component.scss',
  providers: [AnnotationsStoreService]
})
export class AnnotationContainerComponent implements OnInit {
  @Input() annotations: IAnnotation[];

  @Output() onUpdateAnnotation = new EventEmitter<IAnnotation>();
  @Output() onRemoveAnnotation = new EventEmitter<number>();

  public TYPES: ANNOTATION_TYPES;

  constructor(private _annotationsStore: AnnotationsStoreService) {
    this.annotations = [];
    this.TYPES = ANNOTATION_TYPES;
  }

  ngOnInit() {
  }

  public updateAnnotation(annotation: IAnnotation, position: { offsetTop: number; offsetLeft: number }): void {
    this.onUpdateAnnotation.emit({ ...annotation, ...position });
  }

  public removeAnnotation(annotationId: number | any): void {
    this.onRemoveAnnotation.emit(annotationId);
  }
}
