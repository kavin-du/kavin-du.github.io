import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'; 

import { ContactComponent } from './PAGES/contact/contact.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { HeaderButtonComponent } from './COMPONENTS/header-button/header-button.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ProjectsComponent } from './PAGES/projects/projects.component';
import { TechtileComponent } from './COMPONENTS/techtile/techtile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderButtonComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    TechtileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
