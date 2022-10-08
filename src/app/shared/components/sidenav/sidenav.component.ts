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

  ngAfterViewInit(): void {
    this.sidenavRef.nativeElement.addEventListener('mouseenter', () => {
      console.log('Mouse has entered');
      if (this.collapsed) {
        this.collapsed = false;
        this.uiService.expandSidenav();
      }
    });

    this.sidenavRef.nativeElement.addEventListener('mouseleave', () => {
      console.log('Mouse has left the area');
      if (!this.collapsed) {
        this.collapsed = true;
        this.uiService.collapseSidenav();
      }
    });
  }

  ngOnDestroy(): void {
    this.toggleSidenavSubscription.unsubscribe();
    this.collapseSidenavSubscription.unsubscribe();
    this.expandSidenavSubscription.unsubscribe();
  }
}
