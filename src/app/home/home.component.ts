import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home-filter.service';
import { combineLatest, forkJoin, Subject, takeUntil } from 'rxjs';
import { HeaderService } from '../shared/header/header.service';
import { ESortDric } from '../shared/constants/header.constants';
import { IData, IDataBody, IFilter } from './home.interface';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BASE_URL } from '../shared/constants/common.constants';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport | undefined;

  private unsubscribe = new Subject<void>();
  public isLoading: boolean = true;
  public pokemonsData: IData[] = [];
  currentFilter?: IFilter;
  currentMeta = {
    currentPage: 1,
    totalPage: 0,
    totalData: 0,
  };
  isScrolledToBottom = false;
  showModal = false;
  currentData: IData = {} as IData;
  isFilterListOfFiles = false;

  constructor(
    private homeService: HomeService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.getApi();
    this.getAllDataApi();
  }

  onScroll() {
    const { currentPage, totalPage } = this.currentMeta;
    const element = this.viewport?.elementRef?.nativeElement;
    const distanceFromBottom =
      (element?.scrollHeight ?? 0) -
      (element?.scrollTop ?? 0) -
      (element?.clientHeight ?? 0);

    if (
      totalPage !== currentPage &&
      distanceFromBottom <= 58 &&
      !this.isScrolledToBottom
    ) {
      this.isScrolledToBottom = true;
      this.homeService.refreshDataParams({
        number: this.currentMeta.currentPage + 1,
      });
    } else if (distanceFromBottom >= 58 && this.isScrolledToBottom) {
      this.isScrolledToBottom = false;
    }
  }

  onClickPokemonCard(id: string) {
    this.getDetailPokemon(id);
  }

  getDetailPokemon(id: string) {
    combineLatest([this.homeService.getDetailDataApi(id)]).subscribe(
      ([detailData]) => {
        this.currentData = {
          ...detailData,
          imgUrl: `${BASE_URL}pokemons/${id}/sprite`,
        };
        this.showModal = true;
      }
    );
  }

  getApi() {
    combineLatest([
      this.headerService.getTypeOptionsApi(),
      this.homeService.selectedFilter$,
    ])
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(([typeOptions, filter]) => {
        this.headerService.setTypeOptions(typeOptions);
        this.isLoading = true;
        this.currentFilter = filter;
        const params: IDataBody = {
          number: 1,
          size: 10,
          sort:
            filter?.dir === ESortDric.DESC ? `-${filter?.sort}` : filter?.sort,
          type: filter?.type?.toString() || '',
        };
        this.homeService.refreshDataParams(params);
        this.isFilterListOfFiles = Boolean(filter.sort || filter.type);
      });
  }

  getAllDataApi() {
    this.homeService
      .getAllDataApi()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        const { data, meta } = res;
        this.currentMeta = {
          currentPage: meta.current_page,
          totalPage: meta.last_page,
          totalData: meta.total,
        };
        this.isLoading = false;
        if (this.isFilterListOfFiles) {
          this.pokemonsData = this.mapData(data);
          this.isFilterListOfFiles = false;
        } else {
          this.pokemonsData = this.mapData([...this.pokemonsData, ...data]);
        }
      });
  }

  mapData(data: IData[]) {
    return data.map((item) => ({
      ...item,
      imgUrl: `${BASE_URL}pokemons/${item.id}/sprite`,
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
