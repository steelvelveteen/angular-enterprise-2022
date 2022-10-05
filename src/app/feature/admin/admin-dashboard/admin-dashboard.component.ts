import { Component } from '@angular/core';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  trimBody!: boolean;
  constructor(private uiService: UiService) {
    this.uiService.toggleSidenav$.subscribe(() => {
      this.toggleBodyWidth();
    });
  }

  toggleBodyWidth = () => {
    this.trimBody = !this.trimBody;
  };
}
