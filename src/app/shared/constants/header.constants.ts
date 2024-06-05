import { IOption } from '../types/common.interface';

export const SORT_TYPE_OPTIONS: IOption[] = [
  {
    id: 'name',
    name: 'Name',
  },
  {
    id: 'total',
    name: 'Total',
  },
  {
    id: 'hp',
    name: 'HP',
  },
  {
    id: 'attack',
    name: 'Attack',
  },
  {
    id: 'defense',
    name: 'Defense',
  },
  {
    id: 'sp_atk',
    name: 'SP ATK',
  },
  {
    id: 'sp_def',
    name: 'SP DEF',
  },
  {
    id: 'speed',
    name: 'Speed',
  },
];


export enum ESortDric {
  ASC = 'asc',
  DESC = 'desc',
}

export const SORT_DIRECTION_OPTIONS: IOption[] = [
  {
    id: ESortDric.ASC,
    name: 'ASC',
  },
  {
    id: ESortDric.DESC,
    name: 'DESC',
  },
];
