import { ANNOTATION_TYPES } from '../enums';

export interface IAnnotation {
  id: number;
  type: ANNOTATION_TYPES;
  data: string;
}
