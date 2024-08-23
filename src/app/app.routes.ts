import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'documents',
    loadChildren: () => import('./documents-manager/documents-manager.module').then(m => m.DocumentsManagerModule)
  },
  { path: '', redirectTo: 'documents', pathMatch: 'full' }
];
