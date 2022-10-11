import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { slideInOut } from '../ui/animations';
import { ROUTES } from './nav-data';
import { USERNAV } from './user-nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [slideInOut],
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidenavRef') sidenavRef!: ElementRef;

  isMobile!: boolean;
  isSidenavCollapsed!: boolean;
  username = 'Joey Vico';
  routes = ROUTES;
  userNavRoutes = USERNAV;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  userMenuExpanded = false;
  toggleSidenavSubscription: Subscription = new Subscription();
  collapseSidenavSubscription: Subscription = new Subscription();
  expandSidenavSubscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private elRef: ElementRef) {}

  ngOnInit() {
    this.isMobile = window.innerWidth < 960;
    this.isSidenavCollapsed = this.isMobile;

    this.toggleSidenavSubscription = this.uiService.toggleSidenav$.subscribe(() => {
      this.isSidenavCollapsed = !this.isSidenavCollapsed;
    });

    this.collapseSidenavSubscription = this.uiService.collapseSidenav$.subscribe(() => {
      this.isSidenavCollapsed = true;
    });

    this.expandSidenavSubscription = this.uiService.expandSidenav$.subscribe(() => {
      this.isSidenavCollapsed = false;
    });
  }

  ngAfterViewInit(): void {
    if (this.isMobile) {
      this.isSidenavCollapsed = true;
      this.addHoverEffect();
    } else {
      this.sidenavRef.nativeElement.removeAllListeners();
    }
    window.addEventListener('resize', (event: any) => {
      this.isMobile = event.target.innerWidth < 960;
      this.isSidenavCollapsed = this.isMobile;

      if (this.isMobile) {
        this.addHoverEffect();
      } else {
        this.sidenavRef.nativeElement.removeAllListeners();
      }
    });
  }

  addHoverEffect() {
    this.sidenavRef.nativeElement.addEventListener('mouseenter', () => {
      if (this.isSidenavCollapsed) {
        this.isSidenavCollapsed = false;
        this.uiService.expandSidenav(true);
      }
    });

    this.sidenavRef.nativeElement.addEventListener('mouseleave', () => {
      if (!this.isSidenavCollapsed) {
        this.isSidenavCollapsed = true;
        this.uiService.collapseSidenav(true);
      }
    });
  }

  handleOnUserClick = (): void => {
    this.userMenuExpanded = !this.userMenuExpanded;
  };

  ngOnDestroy(): void {
    this.toggleSidenavSubscription.unsubscribe();
    this.collapseSidenavSubscription.unsubscribe();
    this.expandSidenavSubscription.unsubscribe();
    this.sidenavRef.nativeElement.removeAllListeners();
  }
}
