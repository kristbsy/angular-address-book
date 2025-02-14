import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { DetailedContactComponent } from './detailed-contact/detailed-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

const routes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'create', component: CreateContactComponent },
  { path: 'view/:id', component: DetailedContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
