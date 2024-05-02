import { NamedUrl } from "./NamedUrl";

export interface PokemonResponse {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  height: number;
  id: number;
  moves: {
    move: NamedUrl;
  }[];
  name: string;
  sprites: {
    front_default: string;
  };
  stats: Stats[];
  types: {
    type: NamedUrl;
  }[];
  weight: number;
}

export interface Ability {
  ability: NamedUrl;
  is_hidden: string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: NamedUrl;
}
