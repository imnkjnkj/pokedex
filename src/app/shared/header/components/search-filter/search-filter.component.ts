import { IOption } from '@/app/shared/types/common.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit {
  public searchValue: string = '';
  public sortOptions: IOption[] = [
    {
      value: 'name',
      displayValue: 'name',
    },
    {
      value: 'total',
      displayValue: 'total',
    },
    {
      value: 'hp',
      displayValue: 'hp',
    },
    {
      value: 'attack',
      displayValue: 'attack',
    },
    {
      value: 'defense',
      displayValue: 'defense',
    },
    {
      value: 'sp_atk',
      displayValue: 'sp_atk',
    },
    {
      value: 'sp_def',
      displayValue: 'sp_def',
    },
    {
      value: 'speed',
      displayValue: 'speed',
    },
  ];
  public selectedSort?: IOption;
  public sortDirection: string = 'asc';
  constructor() {}

  ngOnInit() {}
}
