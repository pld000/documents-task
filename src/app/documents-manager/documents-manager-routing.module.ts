import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: ':documentId', component: DetailsComponent},
  {path: '', redirectTo: 'overview', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsManagerRoutingModule {
}
