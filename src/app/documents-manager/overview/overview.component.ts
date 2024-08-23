import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../../modules/documents/services/documents.service';
import { IDocument } from '../../../modules/documents/interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  providers: [
    DocumentsService
  ]
})
export class OverviewComponent implements OnInit {
  public documents: IDocument[];

  constructor(private _documents: DocumentsService) {
    this.documents = [];
  }

  async ngOnInit() {
    this.documents = await this._getDocuments();
  }

  private async _getDocuments() {
    const { pages } = await this._documents.getDocuments();
    return pages;
  }
}
