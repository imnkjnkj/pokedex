import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounce,
  debounceTime,
  filter,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { IDataBody, IDataResponse, IFilter } from './home.interface';
import { ApiService } from '../services/api.service';
import { HeaderService } from '../shared/header/header.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private selectedFilter = new BehaviorSubject<IFilter>({
    sort: 'number',
    dir: 'asc',
  });
  private getDataParams$ = new BehaviorSubject<IDataBody>({
    number: 1,
    size: 10,
  });

  constructor(
    private apiService: ApiService,
    private headerService: HeaderService
  ) {}

  refreshDataParams(params: Partial<IDataBody>) {
    this.getDataParams$.next({
      ...this.getDataParams$.value,
      ...params,
    });
  }

  getAllDataApi(): Observable<IDataResponse> {
    return this.getDataParams$.asObservable().pipe(
      filter((data) => !!data),
      debounceTime(300),
      switchMap((params) =>
        this.apiService.get(
          `pokemons?page[number]=${params.number}&page[size]=${params.size}&sort=${params.sort}&filter[type]=${params.type}`
        )
      )
    ) as Observable<IDataResponse>;
  }

  getDetailDataApi(id: string) {
    return this.apiService
      .get(`pokemons/${id}`)
      .pipe(map((data: any) => data.data));
  }

  get selectedFilter$() {
    return this.selectedFilter.asObservable();
  }

  get selectedFilterValue() {
    return this.selectedFilter.getValue();
  }

  setSelectedFilter(filter: IFilter) {
    const data = { ...this.selectedFilterValue, ...filter };
    this.selectedFilter.next(data);
  }

  public generateTypePokemon(typeId: number) {
    return (
      this.headerService.typeOptionsValue.find(
        (type) => Number(type.id) === typeId
      )?.name || ''
    );
  }
}
