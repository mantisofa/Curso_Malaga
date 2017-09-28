import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  providers: [CountryService],
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  public continents: Array<string>;
  public countries: Array<string>;
  public strValue: string;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.continents = ['europe', 'americas', 'asia'];
    this.strValue = '';
    this.countries = [];
  }

  search() {
    this.countries = this.countryService.getCountries(this.strValue);
  }
}
