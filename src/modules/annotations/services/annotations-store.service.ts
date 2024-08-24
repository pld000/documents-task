import { Injectable } from '@angular/core';
import { IAnnotation } from '../iterfaceses';

@Injectable()
export class AnnotationsStoreService {
  constructor() {
  }

  getAll(): IAnnotation[] {
    return [];
  }

  add(item: IAnnotation): void {

  }

  remove(id: number): void {

  }
}
