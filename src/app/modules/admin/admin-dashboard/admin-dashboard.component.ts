import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  isBodyCollapsed!: boolean;
  toggleBody$: Subscription = new Subscription();
  trimBody$: Subscription = new Subscription();
  expandBody$: Subscription = new Subscription();

  private uiService = inject(UiService);

  ngOnInit(): void {
    this.isBodyCollapsed = window.innerWidth < 960;

    this.toggleBody$ = this.uiService.toggleBodyWidth$.subscribe(() => {
      this.isBodyCollapsed = !this.isBodyCollapsed;
    });

    this.trimBody$ = this.uiService.trimBodyWidth$.subscribe(() => {
      this.isBodyCollapsed = true;
    });

    this.expandBody$ = this.uiService.expandBodyWidth$.subscribe(() => {
      this.isBodyCollapsed = false;
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', (event: any) => {
      this.isBodyCollapsed = event.target.innerWidth < 960;
    });
  }

  ngOnDestroy(): void {
    this.toggleBody$.unsubscribe();
    this.trimBody$.unsubscribe();
    this.expandBody$.unsubscribe();
  }
}
