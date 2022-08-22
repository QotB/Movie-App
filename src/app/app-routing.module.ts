import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { MoviesResolverService } from './movie/movies-resolver.service';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'movies',
    component: MovieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "movies/:id",
    component: MovieDetailComponent,
    resolve: [MoviesResolverService] 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
