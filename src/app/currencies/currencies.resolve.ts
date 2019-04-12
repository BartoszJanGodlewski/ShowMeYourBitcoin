import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BitBayCoinsDto } from '@core/dto/bit-bay-coins.dto';
import { BitBayTickerDto } from '@core/dto/bit-bay-ticker.dto';
import { CoinTypes } from '@core/enums/coin-types';
import { CurrenciesService } from './currencies.service';

@Injectable()
export class CurrenciesResolve implements Resolve<BitBayCoinsDto> {

  constructor(private currenciesService: CurrenciesService) {}

  resolve(): Observable<BitBayCoinsDto> {

    return forkJoin(
      this.currenciesService.getCoinInfo(CoinTypes.BTC),
      this.currenciesService.getCoinInfo(CoinTypes.LSK),
      this.currenciesService.getCoinInfo(CoinTypes.ETH),
    ).pipe(map((responses: BitBayTickerDto[]) => {
        return {
          BTC: responses[0],
          LSK: responses[1],
          ETC: responses[2],
        };
    }));
  }
}
