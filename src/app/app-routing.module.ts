import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'searchMovies', pathMatch: 'full' },
  {path:'searchMovies', component: MovieSearchComponent},
  { path: 'movieDetails/:movieId', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
