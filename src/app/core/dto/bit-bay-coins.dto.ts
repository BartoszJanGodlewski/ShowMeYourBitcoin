import { BitBayTickerDto } from '@core/dto/bit-bay-ticker.dto';

export interface BitBayCoinsDto {
  [key: string]: BitBayTickerDto;
}
