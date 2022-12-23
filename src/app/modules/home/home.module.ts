import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class HomeModule {}