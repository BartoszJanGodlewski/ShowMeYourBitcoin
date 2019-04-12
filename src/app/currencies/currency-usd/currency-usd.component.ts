import { Component, Input, OnInit } from '@angular/core';
import { CoinTypes } from '@core/enums/coin-types';

@Component({
  selector: 'btc-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.scss']
})
export class CurrencyUsdComponent implements OnInit {
  coinTypes = CoinTypes;
  exchangeRateUsd = 3;
  valueUsd: number;

  @Input() currencyName: string;
  @Input() valuePln: number;

  constructor() { }

  ngOnInit() {
    this.valueUsd = this.valuePln / this.exchangeRateUsd;
  }
}
