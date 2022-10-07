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
    this.uiService.toggleBodyWidth$.subscribe(() => {
      this.toggleBodyWidth();
    });

    this.uiService.trimBodyWidth$.subscribe(() => {
      this.trimBody = true;
    });

    this.uiService.expandBodyWidth$.subscribe(() => {
      this.trimBody = false;
    });
  }

  toggleBodyWidth = () => {
    this.trimBody = !this.trimBody;
  };
}
