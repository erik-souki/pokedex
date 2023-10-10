export interface Item {
  name: string;
  url: string;
};

export interface GameIndices {
  game_index: number;
  version: Item;
};

export interface Abilities {
  is_hidden: boolean;
  slot: number;
  ability: Item;
};

export interface VersionDetails {
  rarity: number;
  version: Item;
};

export interface HeldItem {
  item: Item;
  version_details: VersionDetails[];
};

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Item;
  version_group: Item;
};

export interface Move {
  move: Item;
  version_group_details: VersionGroupDetail[];
};


export interface Stat {
  base_stat: number;
  effort: number;
  stat: Item;
};

export interface Type {
  slot: number;
  type: Item;
};

export interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: unknown[];
  versions: unknown[];
};

export interface Pokemon {
  abilities: Abilities[];
  base_experience: number;
  forms: Item[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: unknown[];
  species: Item[];

  stats: Stat[];
  types: Type[];

  weigth: number;

  sprites: Sprite[];
};


export interface PokemonCard {
  name: string;
  url: string;
};

export interface Response {
count: number;
next: string;
previous: unknown;
results: unknown[];
};
