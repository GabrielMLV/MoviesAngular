import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { TrendingListComponent } from './trending-list/trending-list.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'moviecreate', component: MovieCreateComponent },
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'trends', component: TrendingListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
