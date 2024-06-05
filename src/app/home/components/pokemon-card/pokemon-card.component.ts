import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../../home.interface';
import { HeaderService } from '@/app/shared/header/header.service';
import { generateTypeColorPokemon } from '@/app/shared/constants/common.constants';
import { HomeService } from '../../home-filter.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonData: IData = {} as IData;

  public colorTypePokemon = generateTypeColorPokemon;
  constructor(
    public headerService: HeaderService,
    public homeService: HomeService
  ) {}

  ngOnInit() {}

}
