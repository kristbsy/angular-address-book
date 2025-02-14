import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContactComponent } from './create-contact.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateContactComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CreateContactModule { }
