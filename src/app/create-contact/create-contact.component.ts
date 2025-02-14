import { Component, inject } from '@angular/core';
import { Contact } from '../types/contact';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  standalone: false,
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})
export class CreateContactComponent {
  contactService: ContactsService = inject(ContactsService);
  router: Router = inject(Router);
  contact: Contact = {
    firstName: '',
    lastName: '',
    city: '',
    street: '',
  }
  submitForm() {
    if (this.contact.firstName.length && this.contact.lastName && this.contact.city && this.contact.street) {
      this.contactService.addContact(this.contact);
      this.router.navigate(["/"]);
    }
  }
}
