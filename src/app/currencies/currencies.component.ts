import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CoinBid } from '@core/models/coin-bid';
import { CoinTypes } from '@core/enums/coin-types';

@Component({
  selector: 'btc-currencies',
  templateUrl: './currencies.component.html',
})
export class CurrenciesComponent implements OnInit {
  coinBidArray: CoinBid[] = [];
  coinTypes = CoinTypes;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {coins}) => {
      Object.keys(data.coins).forEach(key => {
        this.coinBidArray.push(
          {
            name: key,
            valuePln: data.coins[key].bid
          }
        );
      });
    });
  }
}
