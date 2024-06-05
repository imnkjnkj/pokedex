import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorSubject = new BehaviorSubject<boolean>(false);
  public error$ = this.errorSubject.asObservable();

  constructor() {}
  handleHttpError(error: HttpErrorResponse) {
    if (error.status === 500) {
      this.errorSubject.next(true);
    }
  }
}
