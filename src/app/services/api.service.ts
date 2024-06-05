import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import {
  BASE_URL,
  UNCATCH_API_URL,
} from '../shared/constants/common.constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient, private errorService: ErrorService) {}


  get<TResponse>(action: string, _body?: any): Observable<TResponse> {
    return this._http
      .get<TResponse>(BASE_URL + action, { params: _body, observe: 'response' })
      .pipe(
        map((response: any) => {
          return response.body;
        }),
        catchError((error) => {
          return this._errorHandler(error, BASE_URL + action);
        })
      );
  }

  _errorHandler(error: any, url: string = '') {
    let errorMessage;
    if (!error || !error.status) {
      errorMessage = 'Server Not Responding';
    } else if (error.status === 401) {
      errorMessage = error.error.message || 'Bad Response';
    } else if (error.status === 500) {
      if (!UNCATCH_API_URL.find((item) => url.includes(item))) {
        this.errorService.handleHttpError(error);
      }
      errorMessage = 'Server Error';
    } else {
      errorMessage = error.error.message || 'Bad Response';
    }

    return throwError(error);
  }
}
