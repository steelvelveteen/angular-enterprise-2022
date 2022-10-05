import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private sidenavService: SidenavService) {}

  toggleEvent$ = new Subject<boolean>();

  toggleSidenav = () => {
    this.sidenavService.toggleSidenav();
  };
}
