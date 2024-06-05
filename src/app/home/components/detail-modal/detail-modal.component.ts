import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { HomeService } from '../../home-filter.service';
import { IData } from '../../home.interface';
import { generateTypeColorPokemon } from '@/app/shared/constants/common.constants';

@Component({
  selector: 'detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {
  private unsubscribe = new Subject<void>();

  @Input() show = false;
  @Input() pokemonData: IData = {} as IData;
  @Output() closeModal = new EventEmitter();
  public colorTypePokemon = generateTypeColorPokemon;

  constructor(public homeService: HomeService) {}

  ngOnInit() {}


  onCloseModal() {
    this.show = false;
    this.closeModal.emit(this.show);
  }
}
