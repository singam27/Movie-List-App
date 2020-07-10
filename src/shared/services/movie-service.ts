import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class MovieService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {

    }
    public searchMovies(movieName: String): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}&s=${movieName}`)
            .pipe(catchError(this.handleError));
    }
    public movieDetails(id: String): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}&i=${id}&plot=full`)
            .pipe(catchError(this.handleError));
    }

    handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);

    }



}