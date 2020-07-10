import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from 'src/shared/services/movie-service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieID: String;
  movieDetails;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieID = this.route.snapshot.paramMap.get("movieId");
    this.movieService.movieDetails(this.movieID).subscribe(result => {
      if (result.Error) {
        alert("Unable to Find the Movie Details. Please search with different Movie Name.");
        window.location.href = 'searchMovies';
      }
      this.movieDetails = result;
    }, (error) => {
      alert(error);
    });
  }
}
