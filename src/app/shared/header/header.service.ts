import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IOption } from '../types/common.interface';
import { ApiService } from '@/app/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private typeOptions = new BehaviorSubject<IOption[]>([]);
  constructor(private apiService: ApiService) {}

  getTypeOptionsApi(): Observable<IOption[]> {
    return this.apiService.get('types').pipe(map((body: any) => body.data));
  }

  get typeOptions$() {
    return this.typeOptions.asObservable();
  }

  get typeOptionsValue() {
    return this.typeOptions.getValue();
  }

  setTypeOptions(data: IOption[]) {
    this.typeOptions.next(data);
  }
}
