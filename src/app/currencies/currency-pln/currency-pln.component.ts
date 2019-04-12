import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btc-currency-pln',
  templateUrl: './currency-pln.component.html',
})
export class CurrencyPlnComponent implements OnInit {

  @Input() currencyName: string;

  constructor() { }

  ngOnInit() {
  }

}
