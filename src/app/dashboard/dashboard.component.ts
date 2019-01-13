import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];
  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(2, 5)));
  }
}
