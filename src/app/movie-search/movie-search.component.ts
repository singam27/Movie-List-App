import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../shared/services/movie-service';
import { Movies } from '../../shared/models/movies';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movieList: Movies[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  public searchString(searchValue: String) {
    if (searchValue === "") {
      alert("Oops!Search Value is empty. Please enter movie name in the search field.");
    }
    else {
      this.movieService.searchMovies(searchValue).subscribe((result) => {
        this.movieList = result.Search;
        if (result.Error) {
          alert("Unable to find the movie name entered. Please try a different one!!")
        }
      }, (error) => {
        alert(error);
      });
    }
  }
}
