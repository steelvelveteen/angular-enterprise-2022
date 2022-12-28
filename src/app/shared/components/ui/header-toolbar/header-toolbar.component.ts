import { Component } from '@angular/core';
import { slideInOut } from '../animations';
import { NOTIFICATIONSMENU } from '../header-notifications-menu/notifications-menu';
import { LOGINOUTMENU } from '../header-system-menu/login-out-menu';
import { SYSTEMMENU } from '../header-system-menu/system-menu';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
  animations: [slideInOut],
})
export class HeaderToolbarComponent {
  isShowSystemMenu = false;
  isShowNotificationsMenu = false;
  notificationsMenu = NOTIFICATIONSMENU;
  systemMenu = SYSTEMMENU;
  logInOutMenu = LOGINOUTMENU;

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
