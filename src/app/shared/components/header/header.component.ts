import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private sidenavService: SidenavService) {
    this.sidenavService.toggleSidenav$.subscribe(() => {
      console.log('Header listened to its own trigger');
      this.toggleHeader();
    });
  }

  trimHeader!: boolean;
  // toggleEvent$ = new Subject<boolean>();

  toggleSidenav = () => {
    this.sidenavService.toggleSidenav();
  };

  toggleHeader = () => {
    this.trimHeader = !this.trimHeader;
  };
}
