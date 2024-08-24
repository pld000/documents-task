import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AnnotationBase } from '../../base-components/annotation.base';

@Component({
  selector: 'annotation-text',
  templateUrl: './annotation-text.component.html',
  styleUrl: './annotation-text.component.scss'
})
export class AnnotationTextComponent extends AnnotationBase implements OnInit {


  ngOnInit() {
    this.activateDragAndDrop();
  }
}
