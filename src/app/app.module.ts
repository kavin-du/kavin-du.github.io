import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeComponent } from './PAGES/home/home.component';
import { HeaderButtonComponent } from './COMPONENTS/header-button/header-button.component';
import { ProjectsComponent } from './PAGES/projects/projects.component';
import { ContactComponent } from './PAGES/contact/contact.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderButtonComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
