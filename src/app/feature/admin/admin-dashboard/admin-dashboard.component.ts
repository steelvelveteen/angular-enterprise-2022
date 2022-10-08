import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnDestroy {
  trimBody!: boolean;
  toggleBodySubscription: Subscription;
  trimBodySubscription: Subscription;
  expandBodySubscription: Subscription;

  constructor(private uiService: UiService) {
    this.toggleBodySubscription = this.uiService.toggleBodyWidth$.subscribe(() => {
      this.trimBody = !this.trimBody;
    });

    this.trimBodySubscription = this.uiService.trimBodyWidth$.subscribe(() => {
      this.trimBody = true;
    });

    this.expandBodySubscription = this.uiService.expandBodyWidth$.subscribe(() => {
      this.trimBody = false;
    });
  }
  ngOnDestroy(): void {
    this.toggleBodySubscription.unsubscribe();
    this.trimBodySubscription.unsubscribe();
    this.expandBodySubscription.unsubscribe();
  }
}
