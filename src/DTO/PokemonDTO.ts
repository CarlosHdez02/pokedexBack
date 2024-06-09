export interface PokemonDTO {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: AbilityDTO[];
    forms: NameUrlDTO[];
    game_indices: GameIndexDTO[];
    held_items: HeldItemDTO[];
    location_area_encounters: string;
    moves: MoveDTO[];
    species: NameUrlDTO;
    sprites: SpritesDTO;
    stats: StatDTO[];
    types: TypeDTO[];
  }
  
  export interface AbilityDTO {
    ability: NameUrlDTO;
    is_hidden: boolean;
    slot: number;
  }
  
  export interface GameIndexDTO {
    game_index: number;
    version: NameUrlDTO;
  }
  
  export interface HeldItemDTO {
    item: NameUrlDTO;
    version_details: VersionDetailDTO[];
  }
  
  export interface VersionDetailDTO {
    rarity: number;
    version: NameUrlDTO;
  }
  
  export interface MoveDTO {
    move: NameUrlDTO;
    version_group_details: VersionGroupDetailDTO[];
  }
  
  export interface VersionGroupDetailDTO {
    level_learned_at: number;
    move_learn_method: NameUrlDTO;
    version_group: NameUrlDTO;
  }
  
  export interface NameUrlDTO {
    name: string;
    url: string;
  }
  
  export interface SpritesDTO {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other?: OtherSpritesDTO;
    versions?: VersionSpritesDTO;
  }
  
  export interface OtherSpritesDTO {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    official_artwork: {
      front_default: string;
    };
  }
  
  export interface VersionSpritesDTO {
    [version: string]: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
  }
  
  export interface StatDTO {
    base_stat: number;
    effort: number;
    stat: NameUrlDTO;
  }
  
  export interface TypeDTO {
    slot: number;
    type: NameUrlDTO;
  }
  