import { Injectable } from '@angular/core';

import { HeroTaxReturn } from './hero';
import { HeroesService } from './heroes.service';

@Injectable()
export class HeroTaxReturnService {
  
  private currentTaxReturn: HeroTaxReturn;
  private originalTaxReturn: HeroTaxReturn;

  constructor(
    private heroesService: HeroesService
  ) { }

  set taxReturn(htr: HeroTaxReturn) {
    this.originalTaxReturn = htr;
    this.currentTaxReturn = htr.clone();
  }

  get taxReturn(): HeroTaxReturn {
    return this.currentTaxReturn;
  }

  restoreTaxReturn() {
    this.taxReturn = this.originalTaxReturn;
  }

  saveTaxRetrun() {
    this.taxReturn = this.currentTaxReturn;
    this.heroesService.saveTaxReturn(this.currentTaxReturn).subscribe();
  }
}
