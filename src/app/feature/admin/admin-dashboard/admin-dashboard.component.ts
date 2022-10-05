import { Component } from '@angular/core';
import { SidenavService } from 'src/app/shared/services/sidenav.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  trimBody!: boolean;
  constructor(private sidenavService: SidenavService) {
    this.sidenavService.toggleSidenav$.subscribe(() => {
      this.toggleBodyWidth();
    });
  }

  toggleBodyWidth = () => {
    this.trimBody = !this.trimBody;
  };
}
