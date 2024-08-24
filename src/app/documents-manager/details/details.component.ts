import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DocumentsService } from '../../../modules/documents/services/documents.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  public imgUrl: string;

  @ViewChild('img') img: ElementRef;

  constructor(private _documents: DocumentsService,
              private _route: ActivatedRoute) {
    this.imgUrl = '';
    this.img = null as any;
  }

  async ngOnInit() {
    this.imgUrl = await this._getImgUrl();
  }

  public zoomIn(): void {
    this.img.nativeElement.width = this.img.nativeElement.width * 1.1;
    this.img.nativeElement.height = this.img.nativeElement.height * 1.1;
  }

  public zoomOut(): void {
    this.img.nativeElement.width = this.img.nativeElement.width / 1.1;
    this.img.nativeElement.height = this.img.nativeElement.height / 1.1;
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
}
