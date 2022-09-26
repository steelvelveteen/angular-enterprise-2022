import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleDirective } from './directives/sample.directive';
import { SamplePipe } from './pipes/sample.pipe';

@NgModule({
  declarations: [SampleDirective, SamplePipe],
  imports: [CommonModule],
})
export class SharedModule {}
