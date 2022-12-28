import { Component } from '@angular/core';
import { LOGINOUTMENU } from 'src/app/shared/domain/data/login-out-menu';
import { NOTIFICATIONSMENU } from 'src/app/shared/domain/data/notifications-menu';
import { SYSTEMMENU } from 'src/app/shared/domain/data/system-menu';
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
