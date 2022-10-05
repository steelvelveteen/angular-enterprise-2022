import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SampleComponent } from './components/sample/sample.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BtnNavLinkComponent } from './components/ui/btn-nav-link/btn-nav-link.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { SampleUiComponent } from './components/ui/sample-ui/sample-ui.component';
import { SampleDirectiveDirective } from './directives/sample-directive.directive';
import { MaterialModule } from './material.module';
import { SamplePipePipe } from './pipes/sample-pipe.pipe';

const routes: Routes = [];
@NgModule({
  declarations: [
    SampleComponent,
    SampleUiComponent,
    ButtonComponent,
    SampleDirectiveDirective,
    SamplePipePipe,
    SidenavComponent,
    HeaderComponent,
    BtnNavLinkComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [SidenavComponent, HeaderComponent, BtnNavLinkComponent],
})
export class SharedModule {}
