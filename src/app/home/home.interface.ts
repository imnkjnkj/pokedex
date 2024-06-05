export interface IFilter {
  sort?: string;
  type?: string | number;
  dir?: string;
  search?: string;
}

export interface IData {
  id: string;
  number: number;
  name: string;
  type_1: number;
  type_2: number;
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
  generation: number;
  legendary: number;
  created_at: string;
  updated_at: string;
  imgUrl?: string;
}

export interface IDataResponse {
  data: IData[];
  meta: IMeta;
}

export interface IMeta {
  per_page: number;
  current_page: number;
  from: number;
  to: number;
  total: number;
  last_page: number;
  path: string;
}

export interface IDataBody {
  number: number;
  size: number;
  sort?: string;
  type?: string;
}
