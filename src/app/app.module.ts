import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactsListModule } from './contacts-list/contacts-list.module';
import { CreateContactModule } from './create-contact/create-contact.module';
import { DetailedContactModule } from './detailed-contact/detailed-contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ContactsListModule, CreateContactModule, DetailedContactModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
