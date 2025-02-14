import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContactsListComponent, ContactItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContactsListModule { }
