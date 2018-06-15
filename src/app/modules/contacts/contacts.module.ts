import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  { path: '', component: ContactsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ ContactsComponent ],
  exports: [ RouterModule ]
})
export class ContactsModule { }
