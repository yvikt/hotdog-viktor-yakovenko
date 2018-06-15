import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  data: {
    name: '',
    email: '',
    comment: ''
  };

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {

  }

  sendData() {
    this.contactsService.sendData(this.data)
      .subscribe(result => console.log(result));
  }

}
