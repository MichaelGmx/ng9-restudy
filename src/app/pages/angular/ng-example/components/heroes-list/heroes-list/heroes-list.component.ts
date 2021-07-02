import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero, HeroTaxReturn } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];

  constructor(private heroesService: HeroesService) {
    this.heroes$ = heroesService.getHeroes();
  }

  ngOnInit(): void {
  }

  showTaxReturn(hero: Hero) {
    this.heroesService.getTaxReturn(hero)
      .subscribe(htr => {
        // show if not currently shown
        if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
          this.selectedTaxReturns.push(htr);
        }
      });
  }

  closeTaxReturn(index: number) {
    this.selectedTaxReturns.splice(index, 1);
  }
}
