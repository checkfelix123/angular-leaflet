import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LeafletComponent} from './leaflet/leaflet.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'leaflet', component: LeafletComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
