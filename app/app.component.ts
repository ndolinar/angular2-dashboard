import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ HeroService ]
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) {

  }

  title = 'Tour of heroes';
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
