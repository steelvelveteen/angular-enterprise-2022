import { Component } from '@angular/core';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  trimHeader!: boolean;

  constructor(private uiService: UiService) {
    this.uiService.toggleSidenav$.subscribe(() => {
      this.toggleHeader();
    });
  }

  toggleSidenav = () => {
    this.uiService.toggleSidenav();
  };

  toggleHeader = () => {
    this.trimHeader = !this.trimHeader;
  };
}
