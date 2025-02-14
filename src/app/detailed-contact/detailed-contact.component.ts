import { Component, inject } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../types/contact';

@Component({
  selector: 'app-detailed-contact',
  standalone: false,
  templateUrl: './detailed-contact.component.html',
  styleUrl: './detailed-contact.component.css'
})
export class DetailedContactComponent {
  contactsService: ContactsService = inject(ContactsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  contact: Contact | null;

  constructor() {
    const index: string = this.route.snapshot.paramMap.get('id') ?? "-1";
    const i = parseInt(index);
    this.contact = this.contactsService.getContacts()[i];
  }
}
