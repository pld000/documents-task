import {Injectable} from '@angular/core';
import * as pagesResponse from '../../../../public/data.json';
import {IDocument, IDocumentsResponse} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor() {
  }

  public getDocuments(): Promise<IDocumentsResponse> {
    return new Promise<IDocumentsResponse>(resolve => resolve(pagesResponse));
  }

  public getDocumentByNumber(num: number): Promise<IDocument> {
    return new Promise<IDocument>(resolve => {
      resolve((pagesResponse as any).pages.find((page: any) => page.number === num));
    });
  }
}
