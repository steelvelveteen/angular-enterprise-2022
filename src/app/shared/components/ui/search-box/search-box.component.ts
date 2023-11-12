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
  typeahead$: Subscription = new Subscription();
  isInputDirty = false;

  @ViewChild('inputRef') inputRef!: ElementRef;

  ngAfterViewInit(): void {
    this.inputRef.nativeElement.focus();
    this.typeahead$ = fromEvent(this.inputRef.nativeElement, 'keyup')
      .pipe(
        tap(() => {
          // console.log('keys pressed');
          if (this.inputRef.nativeElement.value) {
            this.isInputDirty = true;
          }
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

  search = (): void => {
    if (this.inputRef.nativeElement.value.length > 2) {
      // eslint-disable-next-line no-console
      console.log(this.inputRef.nativeElement.value);
    }
  };

  clearSearch = (): void => {
    this.inputRef.nativeElement.value = '';
    this.isInputDirty = false;
  };

  getFilteredUsers(filterTerm: string) {
    // eslint-disable-next-line no-console
    console.log(filterTerm);
  }
}
