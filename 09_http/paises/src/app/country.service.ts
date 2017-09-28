import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CountryService {

  private res: Array<string>;
  URL = 'http://restcountries.eu/rest/v1/region/';

  constructor(private http: Http) { }
  getCountries(strValue: string) {
    this.res = [];
    this.http.get(this.URL + strValue).subscribe(
      response => {
        const data = response.json();
        for (let i = 0; i < data.length; i++) {
          this.res.push(data[i].name);
        }
      },
      error => console.error(error)
    );
    return this.res;
  }
}


