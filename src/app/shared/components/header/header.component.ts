import { Location } from '@angular/common';
import { AfterViewInit, Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ROUTES } from '@domain/data';
import RouteInfo from '@domain/interfaces/route-info';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
// import { ROUTES } from '../../domain/data';
// import RouteInfo from '../../domain/interfaces/route-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  location!: Location;
  routes: RouteInfo[] = [];
  isTablet = false;
  headerTitle: string = 'Dashboard';

  toggleSidenavSubscription: Subscription = new Subscription();
  headerTitleSubscription: Subscription = new Subscription();

  private uiService = inject(UiService);

  @Input() isBodyCollapsed!: boolean;

  constructor(location: Location) {
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
    const title = this.location.prepareExternalUrl(this.location.path());

    // eslint-disable-next-line no-plusplus
    for (let item = 0; item < this.routes.length; item++) {
      if (this.routes[item].routerLink === title) {
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
