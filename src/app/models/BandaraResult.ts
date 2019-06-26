import { BandaraItem } from './BandaraItem';

export class BandaraResult {
  datajson: BandaraItem[] = [];

  constructor(listbandaraItem: BandaraItem[]) {
    this.datajson = listbandaraItem;
  }
}
