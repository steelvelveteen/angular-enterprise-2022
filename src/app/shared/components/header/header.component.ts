import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  toggleSidenavSubscription: Subscription = new Subscription();
  headerTitleSubscription: Subscription = new Subscription();
  trimHeader!: boolean;
  headerTitle: string = 'Fix this bug';

  constructor(private uiService: UiService) {
    this.toggleSidenavSubscription = this.uiService.toggleSidenav$.subscribe(() => {
      this.toggleHeader();
    });
    this.headerTitleSubscription = this.uiService.changeHeaderTitle$.subscribe((title: string) => {
      console.log(title);
      this.headerTitle = title;
    });
  }

  toggleSidenav = () => {
    this.uiService.toggleSidenav();
  };

  toggleHeader = () => {
    this.trimHeader = !this.trimHeader;
  };

  ngOnDestroy(): void {
    this.toggleSidenavSubscription.unsubscribe();
    this.headerTitleSubscription.unsubscribe();
  }
}
