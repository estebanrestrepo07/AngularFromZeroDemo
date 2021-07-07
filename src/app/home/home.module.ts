import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './container/home-container.component';
import { HomeComponent } from './component/home.component';
import { HomeService } from '../services/home.service';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
