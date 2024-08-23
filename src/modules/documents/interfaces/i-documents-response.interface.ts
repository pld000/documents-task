import { IDocument } from './i-document.interface';

export interface IDocumentsResponse {
  name: string;
  pages: IDocument[];
}
