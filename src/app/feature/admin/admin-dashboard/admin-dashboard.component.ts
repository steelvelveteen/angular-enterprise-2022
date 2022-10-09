import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  trimBody!: boolean;
  toggleBodySubscription: Subscription = new Subscription();
  trimBodySubscription: Subscription = new Subscription();
  expandBodySubscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.trimBody = window.innerWidth < 960;

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

  ngAfterViewInit(): void {
    window.addEventListener('resize', (event: any) => {
      this.trimBody = event.target.innerWidth < 960;
    });
  }

  ngOnDestroy(): void {
    this.toggleBodySubscription.unsubscribe();
    this.trimBodySubscription.unsubscribe();
    this.expandBodySubscription.unsubscribe();
  }
}
