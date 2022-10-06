import { Component, Input } from '@angular/core';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { NavBtnLink } from '../../sidenav/nav-data';

@Component({
  selector: 'app-btn-nav-link',
  templateUrl: './btn-nav-link.component.html',
  styleUrls: ['./btn-nav-link.component.scss'],
})
export class BtnNavLinkComponent {
  @Input() itemData!: NavBtnLink;
  @Input() collapsed!: boolean;

  constructor(private uiService: UiService) {}

  adjustHeaderTitle = (title: string) => {
    this.uiService.changeHeaderTitle$.next(title);
  };
}
