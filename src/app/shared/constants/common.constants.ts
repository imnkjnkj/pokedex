export const UNCATCH_API_URL = [
  '/get-status-sync',
  '/sync-properties-tree',
  '/statistic-task',
];

export const BASE_URL = 'https://api.vandvietnam.com/api/pokemon-api/';

export const generateTypeColorPokemon = (typeId: number) => {
  switch (typeId) {
    case 0:
      return 'var(--normal)';
    case 1:
      return 'var(--fire)';
    case 2:
      return 'var(--water)';
    case 3:
      return 'var(--grass)';
    case 4:
      return 'var(--electric)';
    case 5:
      return 'var(--ice)';
    case 6:
      return 'var(--fighting)';
    case 7:
      return 'var(--poison)';
    case 8:
      return 'var(--ground)';
    case 9:
      return 'var(--flying)';
    case 10:
      return 'var(--psychic)';
    case 11:
      return 'var(--bug)';
    case 12:
      return 'var(--rock)';
    case 13:
      return 'var(--ghost)';
    case 14:
      return 'var(--dark)';
    case 15:
      return 'var(--dragon)';
    case 16:
      return 'var(--steel)';
    case 17:
      return 'var(--fairy)';
    default:
      return 'var(--normal)';
  }
};
