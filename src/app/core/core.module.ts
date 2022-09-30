import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, WelcomeComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, WelcomeComponent],
})
export class CoreModule {}
