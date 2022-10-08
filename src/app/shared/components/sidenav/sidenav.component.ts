import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { ROUTES } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  username = 'Joey Vico';
  routes = ROUTES;
  collapsed = false;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  toggleSidenavSubscription: Subscription = new Subscription();
  collapseSidenavSubscription: Subscription = new Subscription();
  expandSidenavSubscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.toggleSidenavSubscription = this.uiService.toggleSidenav$.subscribe(() => {
      this.collapsed = !this.collapsed;
    });

    this.collapseSidenavSubscription = this.uiService.collapseSidenav$.subscribe(() => {
      this.collapsed = true;
    });

    this.expandSidenavSubscription = this.uiService.expandSidenav$.subscribe(() => {
      this.collapsed = false;
    });

    window.addEventListener('resize', (event: any) => {
      if (event.target.innerWidth < '960') {
        this.collapsed = true;
        this.uiService.collapseSidenav();
      } else {
        this.collapsed = false;
        this.uiService.expandSidenav();
      }
    });
  }

  ngOnDestroy(): void {
    this.toggleSidenavSubscription.unsubscribe();
    this.collapseSidenavSubscription.unsubscribe();
    this.expandSidenavSubscription.unsubscribe();
  }
}
