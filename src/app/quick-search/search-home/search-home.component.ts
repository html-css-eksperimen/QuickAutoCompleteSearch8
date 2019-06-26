import { Component, OnInit, OnDestroy } from '@angular/core';
import { BandaraItem } from 'src/app/models/BandaraItem';
import { Subscription, Subject } from 'rxjs';
import { BandaraDataService } from 'src/app/services/bandara-data.service';
import { BandaraResult } from 'src/app/models/BandaraResult';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit, OnDestroy {

  stringPencarian = '';
  bandaraService: any;

  listBandaraInit: BandaraItem[] = [];
  listBandaraFilter: BandaraItem[] = [];

  subscriptions: Subscription = new Subscription();

  private searchTextSubject$ = new Subject<string>();

  constructor(bandaraServices: BandaraDataService) {
    this.bandaraService = bandaraServices;
  }

  ngOnInit() {

    this.subscriptions = new Subscription();

    this.getDataBandaraInit();

    const subscribtion = this.searchTextSubject$.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((stringKunci) => {
        console.log(stringKunci);
        return this.bandaraService.filterDataBandara(this.listBandaraInit, stringKunci);
      })
    ).subscribe(
      (result: any) => {
        if (result && result.length > 0) {
          this.listBandaraFilter = result;
        } else {
          this.listBandaraFilter = [];
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.subscriptions.add(subscribtion);
  }


  getDataBandaraInit() {

    const subscription = this.bandaraService.getDataBandara()
      .subscribe(
        (bandararesult: BandaraResult) => {
          this.listBandaraInit = bandararesult.datajson;
          this.listBandaraFilter = bandararesult.datajson;
        },
        (errors) => {
          console.log(errors);
          this.listBandaraFilter = this.listBandaraInit;
        });

    this.subscriptions.add(subscription);
  }

  searchBandaraPesawat(katakunci: string) {

    this.searchTextSubject$.next(katakunci);
  }

  trackByFunctions(index: any, item: any) {
    if (!item) {
      return null;
    }
    return item.iata;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
