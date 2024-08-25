import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AnnotationBase } from '../../base-components/annotation.base';

@Component({
  selector: 'annotation-image',
  templateUrl: './annotation-image.component.html',
  styleUrl: './annotation-image.component.scss'
})
export class AnnotationImageComponent extends AnnotationBase implements OnInit {
  @Input() image: string;

  ngOnInit() {
    this.activateDragAndDrop();
  }
}
