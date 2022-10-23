import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Subscription,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements AfterViewInit {
  @ViewChild('inputRef') inputRef!: ElementRef;
  typeahead$: Subscription = new Subscription();

  ngAfterViewInit(): void {
    this.inputRef.nativeElement.focus();
    this.typeahead$ = fromEvent(this.inputRef.nativeElement, 'keyup')
      .pipe(
        tap(() => {
          // console.log('keys pressed');
        }),
        map((event: any) => {
          return event.target.value.trim();
        }),
        filter((searchTerm: string) => {
          return searchTerm.length > 2;
        }),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(data => {
        this.getFilteredUsers(data);
      });
  }

  search = (value: string): void => {
    // eslint-disable-next-line no-console
    console.log(`Searching for ${value}`);
  };

  getFilteredUsers(filterTerm: string) {
    // eslint-disable-next-line no-console
    console.log(filterTerm);
    // this.usersService.getCountries(filterTerm.trim()).subscribe(
    // res => {
    // if (res.length > 0) {
    // this.isCountriesList = true;
    // this.countries = res;
    // }
    // },
    // () => {
    // this.showCountriesError = true;
    // }
    // );
  }
}
