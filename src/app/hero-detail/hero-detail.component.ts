import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
  ) {}
  hero: Hero;
  ngOnInit() {
    this.getHero();
  }
  goBack() {
    this.location.back();
  }
  getHero() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
  save() {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
