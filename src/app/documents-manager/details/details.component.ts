import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DocumentsService } from '../../../modules/documents/services/documents.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnnotationsStoreService } from '../../../modules/annotations/services';
import { ANNOTATION_TYPES } from '../../../modules/annotations/enums';
import { IAnnotation } from '../../../modules/annotations/iterfaceses';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  providers: [AnnotationsStoreService]
})
export class DetailsComponent implements OnInit {
  @ViewChild('img') img: ElementRef;

  public imgUrl: string;
  public documentId: number;
  public annotations: IAnnotation[];

  constructor(private _documents: DocumentsService,
              private _route: ActivatedRoute,
              private _annotationsStore: AnnotationsStoreService) {
    this.imgUrl = '';
    this.img = null as any;
    this.documentId = 0;
    this.annotations = [];
  }

  async ngOnInit() {
    this.documentId = this._route.snapshot.params['documentId'];
    this.imgUrl = await this._getImgUrl();
    this._initAnnotation();
  }

  public updateAnnotation(annotation: IAnnotation): void {
    this._annotationsStore.updateAnnotation(this.documentId, { ...annotation });
  }

  public removeAnnotation(annotationId: number | any): void {
    this._annotationsStore.removeAnnotation(this.documentId, annotationId);
    this._initAnnotation();
  }

  public addTextAnnotation(event: any) {
    const data = event.target && event.target.value || '';
    const item = {
      data, type: ANNOTATION_TYPES.TEXT, offsetTop: 200, offsetLeft: 200
    };

    this._annotationsStore.addAnnotation(this.documentId, item);
    event.target.value = '';
    this._initAnnotation();
  }

  public async addImageAnnotation(event: any) {
    const file = event.target.files[0];

    await this._addImageAnnotation(file);
    this._initAnnotation();
  }

  public zoomIn(): void {
    this.img.nativeElement.width = this.img.nativeElement.width * 1.1;
    this.img.nativeElement.height = this.img.nativeElement.height * 1.1;
  }

  public zoomOut(): void {
    this.img.nativeElement.width = this.img.nativeElement.width / 1.1;
    this.img.nativeElement.height = this.img.nativeElement.height / 1.1;
  }

  private _addImageAnnotation(file: File): Promise<void> {
    const item = { type: ANNOTATION_TYPES.IMAGE, data: null, offsetTop: 300, offsetLeft: 300 };
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.readAsDataURL(file);

      reader.onload = () => {
        this._annotationsStore
          .addAnnotation(this.documentId, { ...item, data: reader.result as string });
        resolve();
      };

      reader.onerror = function (error) {
        console.log('Error: ', error);
        reject(error);
      };
    });
  }

  private async _getImgUrl(): Promise<string> {
    try {
      const { documentId } = this._route.snapshot.params;
      const { imageUrl } = await this._documents.getDocumentByNumber(Number(documentId));
      return imageUrl;
    } catch (e) {
      console.log(e);
      return '';
    }
  }

  private _initAnnotation() {
    this.annotations = this._annotationsStore.getDocumentAnnotations(this.documentId);
  }
}
