import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SampleComponent } from './components/sample/sample.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { SampleUiComponent } from './components/ui/sample-ui/sample-ui.component';
import { SampleDirectiveDirective } from './directives/sample-directive.directive';
import { MaterialModule } from './material.module';
import { SamplePipePipe } from './pipes/sample-pipe.pipe';
import { LoadSpinnerComponent } from './ui/load-spinner/load-spinner.component';

@NgModule({
  declarations: [
    SampleComponent,
    SampleUiComponent,
    ButtonComponent,
    SampleDirectiveDirective,
    SamplePipePipe,
    LoadSpinnerComponent,
    SidenavComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [LoadSpinnerComponent, SidenavComponent],
})
export class SharedModule {}
