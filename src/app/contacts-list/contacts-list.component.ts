import { Component, inject } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../types/contact';

@Component({
  selector: 'app-contacts-list',
  standalone: false,
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {
  contactsService: ContactsService = inject(ContactsService);
  contacts: Contact[];

  constructor() {
    this.contacts = this.contactsService.getContacts();
  }
}
