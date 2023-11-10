import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Observable, Observer, Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { ROUTES } from '../../domain/data/nav-data';
import { USERNAV } from '../../domain/data/user-nav-data';
import { slideInOut } from '../ui/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [slideInOut],
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidenavRef') sidenavRef!: ElementRef;
  @ViewChild('sidenavWrapperRef') sidenavWrapperRef!: ElementRef;

  isTablet!: boolean;
  isSidenavCollapsed!: boolean;
  username = 'Joey Vico';
  routes = ROUTES;
  userNavRoutes = USERNAV;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  isUserMenuExpanded = false;
  toggleSidenavSubscription: Subscription = new Subscription();
  collapseSidenavSubscription: Subscription = new Subscription();
  expandSidenavSubscription: Subscription = new Subscription();

  private uiService = inject(UiService);

  ngOnInit() {
    this.isTablet = window.innerWidth < 960;
    this.isSidenavCollapsed = this.isTablet;

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
    /** Initializing perfect scrollbar */
    const ps = new PerfectScrollbar(this.sidenavWrapperRef.nativeElement);
    ps.update();

    if (this.isTablet) {
      this.isSidenavCollapsed = true;
      this.addHoverEffect();
    } else {
      this.sidenavRef.nativeElement.removeAllListeners();
    }
    window.addEventListener('resize', (event: any) => {
      this.isTablet = event.target.innerWidth < 960;
      this.isSidenavCollapsed = this.isTablet;

      if (this.isTablet) {
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
    this.isUserMenuExpanded = !this.isUserMenuExpanded;
  };

  ngOnDestroy(): void {
    this.toggleSidenavSubscription.unsubscribe();
    this.collapseSidenavSubscription.unsubscribe();
    this.expandSidenavSubscription.unsubscribe();
    this.sidenavRef.nativeElement.removeAllListeners();
  }
}
