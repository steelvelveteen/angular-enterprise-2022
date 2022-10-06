import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { NavBtnLink, NavData } from '../sidenav/nav-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  toggleSidenavSubscription: Subscription = new Subscription();
  headerTitleSubscription: Subscription = new Subscription();
  trimHeader!: boolean;
  headerTitle: string = 'Dashboard';
  location!: Location;
  routes: NavBtnLink[] = [];
  title: string = '';

  constructor(private uiService: UiService, location: Location) {
    this.toggleSidenavSubscription = this.uiService.toggleSidenav$.subscribe(() => {
      this.toggleHeader();
    });
    this.headerTitleSubscription = this.uiService.changeHeaderTitle$.subscribe((title: string) => {
      this.headerTitle = title;
    });

    this.location = location;
  }

  ngOnInit() {
    this.routes = NavData;
  }

  toggleSidenav = () => {
    this.uiService.toggleSidenav();
  };

  toggleHeader = () => {
    this.trimHeader = !this.trimHeader;
  };

  getTitle(): string {
    const titlee = this.location.prepareExternalUrl(this.location.path());

    // eslint-disable-next-line no-plusplus
    for (let item = 0; item < this.routes.length; item++) {
      if (this.routes[item].routerLink === titlee) {
        return this.routes[item].title;
      }
    }
    return 'Dashboard';
  }

  ngOnDestroy(): void {
    this.toggleSidenavSubscription.unsubscribe();
    this.headerTitleSubscription.unsubscribe();
  }
}
