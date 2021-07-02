import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroTaxReturn } from '../hero';
import { HeroTaxReturnService } from '../hero-tax-return.service';

@Component({
  selector: 'app-hero-tax-return',
  templateUrl: './hero-tax-return.component.html',
  styleUrls: ['./hero-tax-return.component.scss'],
  providers: [ HeroTaxReturnService ]
})
export class HeroTaxReturnComponent implements OnInit {
  message = '';

  @Output() close = new EventEmitter<void>();

  get taxReturn(): HeroTaxReturn {
    return this.heroTaxReturnService.taxReturn;
  };

  @Input()
  set taxReturn(htr: HeroTaxReturn) {
    this.heroTaxReturnService.taxReturn = htr;
  }

  constructor(
    private heroTaxReturnService: HeroTaxReturnService
  ) { }

  ngOnInit(): void {
  }

  onSaved() {
    this.flashMessage('Saved');
    this.heroTaxReturnService.saveTaxRetrun();
  }

  onCanceled() {
    this.flashMessage('Canceled');
    this.heroTaxReturnService.restoreTaxReturn();
  }

  onClose() {
    this.close.emit();
  }

  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }
}
