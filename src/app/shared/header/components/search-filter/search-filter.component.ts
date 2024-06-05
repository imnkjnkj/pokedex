import { HomeService } from '@/app/home/home-filter.service';
import {
  SORT_DIRECTION_OPTIONS,
  SORT_TYPE_OPTIONS,
} from '@/app/shared/constants/header.constants';
import { IOption } from '@/app/shared/types/common.interface';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header.service';

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit {
  public searchValue: string = '';
  public sortOptions = SORT_TYPE_OPTIONS;
  public sortDirectionOptions = SORT_DIRECTION_OPTIONS;
  public selectedSort?: IOption = SORT_TYPE_OPTIONS[0];
  public selectedSortDirection?: IOption = SORT_DIRECTION_OPTIONS[0];
  public typeOptions: IOption[] = [];
  public selectedTypeOption?: IOption;

  constructor(
    private HomeService: HomeService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.getTypeOptionsData();
  }

  getTypeOptionsData() {
    this.headerService.typeOptions$.subscribe((data) => {
      this.typeOptions = data;
    });
  }

  onChangeSortType(selectedSort: IOption) {
    this.selectedSort = selectedSort;
    this.HomeService.setSelectedFilter({ sort: selectedSort.id });
  }

  onChangeSortDir(selectedSortDirection: IOption) {
    this.selectedSortDirection = selectedSortDirection;
    this.HomeService.setSelectedFilter({ dir: selectedSortDirection.id });
  }

  onChangeType(selectedTypeOption: IOption) {
    this.selectedTypeOption = selectedTypeOption;
    this.HomeService.setSelectedFilter({ type: selectedTypeOption.id });
  }
}
