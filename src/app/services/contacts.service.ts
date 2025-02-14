import { Injectable } from '@angular/core';
import { Contact } from '../types/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    { firstName: 'bob', lastName: 'stevens', city: 'city', street: 'street' },
    { firstName: 'john', lastName: 'smith', city: 'city2', street: 'street2' }
  ];

  constructor() {
  }

  getContacts() {
    return this.contacts;
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
