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
import { slideInOut } from '../animations';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
  animations: [slideInOut],
})
export class HeaderToolbarComponent implements AfterViewInit {
  @ViewChild('inputRef') inputRef!: ElementRef;
  typeahead$: Subscription = new Subscription();
  isShowSystemMenu = false;
  isShowNotificationsMenu = false;

  ngAfterViewInit(): void {
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

  toggleSystemMenu = (): void => {
    this.isShowSystemMenu = !this.isShowSystemMenu;
  };

  handleSystemMenuChange = (): void => {
    this.isShowSystemMenu = false;
  };
  handleNotificationsMenuChange = (): void => {
    this.isShowNotificationsMenu = false;
  };

  toggleNotificationsMenu = (): void => {
    this.isShowNotificationsMenu = !this.isShowNotificationsMenu;
  };

  search = (value: string): void => {
    // eslint-disable-next-line no-console
    console.log(`Searching for ${value}`);
  };

  getFilteredUsers(filterTerm: string) {
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
