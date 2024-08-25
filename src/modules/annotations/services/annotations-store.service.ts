import { Inject, Injectable } from '@angular/core';
import { IAnnotation } from '../iterfaceses';
import { DOCUMENT_STORAGE_PREFIX } from '../../shared/constants';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class AnnotationsStoreService {
  private _localStorage: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this._localStorage = document.defaultView?.localStorage;
  }

  public getDocumentAnnotations(documentId: number): IAnnotation[] {
    const annotations = this._localStorage.getItem(DOCUMENT_STORAGE_PREFIX + documentId);

    if (annotations) {
      return JSON.parse(annotations);
    }

    return [];
  }

  public addAnnotation(documentId: number, item: IAnnotation): void {
    const annotations = this.getDocumentAnnotations(documentId);
    annotations.push({ ...item, id: annotations.length + 1 });

    this._localStorage.setItem(DOCUMENT_STORAGE_PREFIX + documentId, JSON.stringify(annotations));
  }

  public updateAnnotation(documentId: number, item: IAnnotation): void {
    const annotations = this.getDocumentAnnotations(documentId)
      .map((annotation: IAnnotation) => annotation.id === item.id ? { ...annotation, ...item } : annotation);

    this._localStorage.setItem(DOCUMENT_STORAGE_PREFIX + documentId, JSON.stringify(annotations));
  }

  public removeAnnotation(documentId: number, annotationId: number): void {
    const annotations = this.getDocumentAnnotations(documentId)
      .filter(({ id }) => id !== annotationId);

    this._localStorage.setItem(DOCUMENT_STORAGE_PREFIX + documentId, JSON.stringify(annotations));
  }
}
