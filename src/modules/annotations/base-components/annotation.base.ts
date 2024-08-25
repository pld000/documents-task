import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive()
export class AnnotationBase {
  @Output() onUpdate = new EventEmitter<{ offsetTop: number; offsetLeft: number }>();
  @Output() onRemove = new EventEmitter<void>();

  constructor(protected _elRef: ElementRef) {
  }

  public activateDragAndDrop() {
    const element = this._elRef.nativeElement;
    let offsetTop = 0;
    let offsetLeft = 0;

    element.addEventListener('mousedown', (evt: MouseEvent) => {
      evt.preventDefault();

      let xStart = evt.clientX;
      let yStart = evt.clientY;

      const onMouseMove = (evtMove: MouseEvent) => {
        evtMove.preventDefault();

        const xNew = xStart - evtMove.clientX;
        const yNew = yStart - evtMove.clientY;

        xStart = evtMove.clientX;
        yStart = evtMove.clientY;

        offsetTop = element.offsetTop - yNew;
        offsetLeft = element.offsetLeft - xNew;

        element.style.top = offsetTop + 'px';
        element.style.left = offsetLeft + 'px';
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        this.onUpdate.emit({ offsetTop, offsetLeft });
      };


      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }
}
