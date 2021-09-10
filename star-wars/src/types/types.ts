export interface ISignIn {
  login: string;
  password: string;
}

export interface IPersonDTO {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string;
}

export interface IPerson extends IPersonDTO {
  id: string;
}

export interface IPeopleDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPersonDTO[];
}

export interface IPeople extends IPeopleDTO {
  results: IPerson[];
}

export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}
