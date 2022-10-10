import { Component, Input } from '@angular/core';
import { slideInOut } from '../animations';
import { NOTIFICATIONSMENU } from './notifications-menu';

@Component({
  selector: 'app-header-notifications-menu',
  templateUrl: './header-notifications-menu.component.html',
  styleUrls: ['./header-notifications-menu.component.scss'],
  animations: [slideInOut],
})
export class HeaderNotificationsMenuComponent {
  @Input() isShowNotificationsMenu = false;
  notifications = NOTIFICATIONSMENU;
}
