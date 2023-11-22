import { Location } from '@angular/common';
import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ROUTES } from '@domain/data';
import RouteInfo from '@domain/interfaces/route-info';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';

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

  toggleSidenav$: Subscription = new Subscription();
  headerTitle$: Subscription = new Subscription();

  private uiService = inject(UiService);

  isBodyCollapsed = this.uiService.isBodyCollapsed;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.routes = ROUTES;
    this.isTablet = window.innerWidth < 960;

    this.headerTitle$ = this.uiService.changeHeaderTitle$.subscribe((title: string) => {
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

  ngOnDestroy(): void {
    this.toggleSidenav$.unsubscribe();
    this.headerTitle$.unsubscribe();
  }
}
