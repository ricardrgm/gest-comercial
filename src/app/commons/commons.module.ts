import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent
  ]
})
export class CommonsModule { }
