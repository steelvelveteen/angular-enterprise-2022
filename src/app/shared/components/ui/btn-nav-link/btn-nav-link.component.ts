import { Component, Input } from '@angular/core';
import { NavBtnLink } from '../../sidenav/nav-data';

@Component({
  selector: 'app-btn-nav-link',
  templateUrl: './btn-nav-link.component.html',
  styleUrls: ['./btn-nav-link.component.scss'],
})
export class BtnNavLinkComponent {
  @Input() itemData!: NavBtnLink;
  @Input() collapsed!: boolean;

  // sidebarCollapsed = this.collapsed;
}
