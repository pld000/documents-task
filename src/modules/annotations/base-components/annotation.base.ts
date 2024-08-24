import { Directive, ElementRef } from '@angular/core';

@Directive()
export class AnnotationBase {
  constructor(protected _elRef: ElementRef) {
  }

  public activateDragAndDrop() {
    const element = this._elRef.nativeElement;

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

        element.style.top = (element.offsetTop - yNew) + 'px';
        element.style.left = (element.offsetLeft - xNew) + 'px';
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };


      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }
}
