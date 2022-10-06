import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SampleComponent } from './components/sample/sample.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BtnNavLinkComponent } from './components/ui/btn-nav-link/btn-nav-link.component';
import { HeaderSystemMenuComponent } from './components/ui/header-system-menu/header-system-menu.component';
import { SampleDirectiveDirective } from './directives/sample-directive.directive';
import { MaterialModule } from './material.module';

const routes: Routes = [];
@NgModule({
  declarations: [
    SampleComponent,
    SampleDirectiveDirective,
    SidenavComponent,
    HeaderComponent,
    BtnNavLinkComponent,
    HeaderSystemMenuComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [SidenavComponent, HeaderComponent, BtnNavLinkComponent],
})
export class SharedModule {}
