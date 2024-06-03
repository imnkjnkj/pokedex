import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  public searchValue: string = '';
  public sortOptions: string[] = ['Name', 'Date', 'Size'];
  public selectedSort: string[] =['Name'];
  public sortDirection: string = 'asc';
  constructor() { }

  ngOnInit() {
  }

}
