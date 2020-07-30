import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { TrendingListComponent } from './trending-list/trending-list.component';



const routes: Routes = [
  { path: 'moviecreate', component: MovieCreateComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'trends', component: TrendingListComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
