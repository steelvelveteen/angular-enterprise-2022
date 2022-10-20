import { Component, Input } from '@angular/core';
import { slideInOut } from '../animations';
import { LOGINOUTMENU } from './login-out-menu';
import { SYSTEMMENU } from './system-menu';

@Component({
  selector: 'app-header-system-menu',
  templateUrl: './header-system-menu.component.html',
  styleUrls: ['./header-system-menu.component.scss'],
  animations: [slideInOut],
})
export class HeaderSystemMenuComponent {
  @Input() isShowSystemMenu = false;
  systemMenu = SYSTEMMENU;
  logInOutMenu = LOGINOUTMENU;
  messagesNumber = 4;
}
