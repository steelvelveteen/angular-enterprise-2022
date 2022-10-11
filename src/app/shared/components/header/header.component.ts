import { Location } from '@angular/common';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { RouteInfo, ROUTES } from '../sidenav/nav-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() isBodyCollapsed!: boolean;

  isTablet = false;
  toggleSidenavSubscription: Subscription = new Subscription();
  headerTitleSubscription: Subscription = new Subscription();

  headerTitle: string = 'Dashboard';
  location!: Location;
  routes: RouteInfo[] = [];

  constructor(private uiService: UiService, location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.routes = ROUTES;
    this.isTablet = window.innerWidth < 960;

    this.headerTitleSubscription = this.uiService.changeHeaderTitle$.subscribe((title: string) => {
      this.headerTitle = title;
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', (event: any) => {
      this.isTablet = event.target.innerWidth < 960;
    });
  }

  toggleSidenav() {
    this.uiService.toggleSidenav();
  }

  getTitle(): string {
    const titlee = this.location.prepareExternalUrl(this.location.path());

    // eslint-disable-next-line no-plusplus
    for (let item = 0; item < this.routes.length; item++) {
      if (this.routes[item].routerLink === titlee) {
        return this.routes[item].label;
      }
    }
    return 'Dashboard';
  }

  ngOnDestroy(): void {
    this.toggleSidenavSubscription.unsubscribe();
    this.headerTitleSubscription.unsubscribe();
  }
}
