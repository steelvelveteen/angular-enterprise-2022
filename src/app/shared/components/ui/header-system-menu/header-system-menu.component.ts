import { Component, Input } from '@angular/core';
import RouteInfo from 'src/app/shared/domain/interfaces/route-info';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-header-system-menu',
  templateUrl: './header-system-menu.component.html',
  styleUrls: ['./header-system-menu.component.scss'],
  animations: [slideInOut],
})
export class HeaderSystemMenuComponent {
  messagesNumber = 4;

  @Input() isShowMenu = false;
  @Input() menu: RouteInfo[] = [];
  @Input() secondaryMenu: RouteInfo[] = [];
}
