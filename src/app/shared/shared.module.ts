import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SampleComponent } from './components/sample/sample.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { SampleUiComponent } from './components/ui/sample-ui/sample-ui.component';
import { SampleDirectiveDirective } from './directives/sample-directive.directive';
import { MaterialModule } from './material.module';
import { SamplePipePipe } from './pipes/sample-pipe.pipe';

@NgModule({
  declarations: [
    SampleComponent,
    SampleUiComponent,
    ButtonComponent,
    SampleDirectiveDirective,
    SamplePipePipe,
  ],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
