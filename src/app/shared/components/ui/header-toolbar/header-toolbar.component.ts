import { Component } from '@angular/core';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
  animations: [slideInOut],
})
export class HeaderToolbarComponent {
  isShowSystemMenu = false;
  isShowNotificationsMenu = false;

  toggleSystemMenu = (): void => {
    this.isShowSystemMenu = !this.isShowSystemMenu;
  };

  handleSystemMenuChange = (): void => {
    this.isShowSystemMenu = false;
  };
  handleNotificationsMenuChange = (): void => {
    this.isShowNotificationsMenu = false;
  };

  toggleNotificationsMenu = (): void => {
    this.isShowNotificationsMenu = !this.isShowNotificationsMenu;
  };

  search = (value: string): void => {
    console.log(`Searching for ${value}`);
  };
}
