import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FormComponent } from './form/form.component';
import { HeaderSectionComponent } from './header-section/header-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FormComponent,
    HeaderSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
