import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  trimHeader!: boolean;

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.toggleSidenav$.subscribe(() => {
      this.toggleHeader();
    });
  }

  toggleSidenav = () => {
    this.sidenavService.toggleSidenav();
  };

  toggleHeader = () => {
    this.trimHeader = !this.trimHeader;
  };
}
