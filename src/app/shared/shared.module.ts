import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SampleDirective } from './directives/sample.directive';
import { SamplePipe } from './pipes/sample.pipe';

@NgModule({
  declarations: [SampleDirective, SamplePipe],
  imports: [CommonModule],
})
export class SharedModule {}
