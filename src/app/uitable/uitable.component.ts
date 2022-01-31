import { Component, OnInit, PipeTransform } from '@angular/core';
// import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Italy',
    flag: '/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Russia',
    flag: 'commons/f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'commons/c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'commons/a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

function search(text: string): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-uitable',
  templateUrl: './uitable.component.html',
  styleUrls: ['./uitable.component.css']
})
export class UITableComponent {

  countries$: Observable<Country[]>;
  filter = new FormControl('');

  constructor() {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text))
    );
  }
  // ngOnInit(): void {
  // }

}
