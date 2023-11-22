import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  toggleBody$: Subscription = new Subscription();
  trimBody$: Subscription = new Subscription();
  expandBody$: Subscription = new Subscription();

  private uiService = inject(UiService);

  isBodyCollapsed = this.uiService.isBodyCollapsed;

  ngOnInit(): void {
    this.isBodyCollapsed.set(window.innerWidth < 960);

    this.toggleBody$ = this.uiService.toggleBodyWidth$.subscribe(() => {
      this.isBodyCollapsed.set(!this.isBodyCollapsed());
    });

    this.trimBody$ = this.uiService.trimBodyWidth$.subscribe(() => {
      this.isBodyCollapsed.set(true);
    });

    this.expandBody$ = this.uiService.expandBodyWidth$.subscribe(() => {
      this.isBodyCollapsed.set(false);
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', (event: any) => {
      this.isBodyCollapsed.set(event.target.innerWidth < 960);
    });
  }

  ngOnDestroy(): void {
    this.toggleBody$.unsubscribe();
    this.trimBody$.unsubscribe();
    this.expandBody$.unsubscribe();
  }
}
