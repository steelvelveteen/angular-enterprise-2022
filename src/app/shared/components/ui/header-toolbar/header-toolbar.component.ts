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

  toggleNotificationsMenu = (): void => {
    this.isShowNotificationsMenu = !this.isShowNotificationsMenu;
  };

  closeSystemMenu = (): void => {
    this.isShowSystemMenu = false;
  };
  closeNotificationsMenu = (): void => {
    this.isShowNotificationsMenu = false;
  };
}
