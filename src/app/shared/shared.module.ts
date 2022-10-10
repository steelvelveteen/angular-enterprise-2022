import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderSystemMenuComponent } from './components/ui/header-system-menu/header-system-menu.component';
import { MenuBtnLinkComponent } from './components/ui/menu-btn-link/menu-btn-link.component';
import { SublevelBtnLinkComponent } from './components/ui/sublevel-btn-link/sublevel-btn-link.component';
import { SampleDirectiveDirective } from './directives/sample-directive.directive';
import { MaterialModule } from './material.module';
import { HeaderToolbarComponent } from './components/ui/header-toolbar/header-toolbar.component';

const routes: Routes = [];
@NgModule({
  declarations: [
    SampleDirectiveDirective,
    SidenavComponent,
    HeaderComponent,
    HeaderSystemMenuComponent,
    MenuBtnLinkComponent,
    SublevelBtnLinkComponent,
    HeaderToolbarComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [SidenavComponent, HeaderComponent],
})
export class SharedModule {}
