import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError } from 'rxjs/operators';

import { BandaraItem } from '../models/BandaraItem';
import { BandaraResult } from '../models/BandaraResult';

@Injectable({
  providedIn: 'root'
})
export class BandaraDataService {

  private urlRequest = 'assets/id_airport.json';

  constructor(private http: HttpClient) { }

  /**
   * @description Ambil data bandara pertama kali
   */
  getDataBandara() {

    const requestObservable = this.http.get(this.urlRequest).pipe(
      map((data: any) => {
        const arraydata = data.datajson;
        const listBandaraItem: BandaraItem[] = arraydata;
        const bandaraResult: BandaraResult = new BandaraResult([]);
        bandaraResult.datajson = listBandaraItem;
        return bandaraResult;
      }),
      catchError(this.handleErrors)
    );
    return requestObservable;
  }


  /**
   * @description Filter data bandara dengan kata kunci
   * @param listbandara array bandara
   * @param stringKataKunci kata kunci filter
   */
  filterDataBandara(listbandara: any, stringKataKunci: string) {

    const observableFilter = Observable.create((observer) => {

      const listBandaraFilter = listbandara.filter((bandara: BandaraItem) => {

        const regex = new RegExp(`^${stringKataKunci}`, 'gi');
        // return bandara.nama.toLowerCase().includes(stringKataKunci.toLowerCase());
        return bandara.nama.match(regex) || bandara.alamat.match(regex) ||
          bandara.kategori.match(regex) || bandara.iata.match(regex) || bandara.pengelola.match(regex);
      });

      observer.next(listBandaraFilter);
      observer.complete();
    })
      .pipe(
        catchError(this.handleErrors)
      );

    return observableFilter;
  }

  /**
   * @description Error yang muncul akan di tampilkan
   * @param error eksepsi error
   */
  handleErrors(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
