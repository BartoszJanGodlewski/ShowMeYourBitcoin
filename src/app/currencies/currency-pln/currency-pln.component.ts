import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btc-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.scss']
})
export class CurrencyPlnComponent implements OnInit {

  @Input() currencyName: string;

  constructor() { }

  ngOnInit() {
  }

}
