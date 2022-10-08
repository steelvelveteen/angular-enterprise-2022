import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { ROUTES } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidenavRef') sidenavRef!: ElementRef;

  isMobile = false;
  username = 'Joey Vico';
  routes = ROUTES;
  collapsed = false;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  toggleSidenavSubscription: Subscription = new Subscription();
  collapseSidenavSubscription: Subscription = new Subscription();
  expandSidenavSubscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private elRef: ElementRef) {}

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
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', (event: any) => {
      this.isMobile = event.target.innerWidth < 960;

      /** Small screens add events */
      if (this.isMobile) {
        this.collapsed = true;
        this.uiService.collapseSidenav();
        this.sidenavRef.nativeElement.addEventListener('mouseenter', () => {
          if (this.collapsed) {
            this.collapsed = false;
            this.uiService.expandSidenav(true);
          }
        });

        this.sidenavRef.nativeElement.addEventListener('mouseleave', () => {
          if (!this.collapsed) {
            this.collapsed = true;
            this.uiService.collapseSidenav(true);
          }
        });
      } else {
        this.collapsed = false;
        this.uiService.expandSidenav();
      }

      /** Larger screens remove all listeners */
      if (!this.isMobile) {
        this.sidenavRef.nativeElement.removeAllListeners();
      }
    });
  }

  ngOnDestroy(): void {
    this.toggleSidenavSubscription.unsubscribe();
    this.collapseSidenavSubscription.unsubscribe();
    this.expandSidenavSubscription.unsubscribe();
    this.sidenavRef.nativeElement.removeAllListeners();
  }
}
