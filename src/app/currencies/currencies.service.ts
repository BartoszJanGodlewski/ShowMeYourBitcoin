import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BitBayTickerDto } from '@core/dto/bit-bay-ticker.dto';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private httpClient: HttpClient) { }

  getCoinInfo(coinName: string): Observable<BitBayTickerDto> {
    return this.httpClient.get<BitBayTickerDto>(environment.bitBayApiPrefix + coinName + 'PLN/ticker.json');
  }
}
