import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  //
  // }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
