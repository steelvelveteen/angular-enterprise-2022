import { Component, Input } from '@angular/core';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-header-system-menu',
  templateUrl: './header-system-menu.component.html',
  styleUrls: ['./header-system-menu.component.scss'],
  animations: [slideInOut],
})
export class HeaderSystemMenuComponent {
  @Input() isShowSystemMenu = false;
}
