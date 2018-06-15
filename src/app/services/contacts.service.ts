import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient
  ) { }

  sendData(data) {
    const url = 'https://formula-test-api.herokuapp.com/contact';
    return this.http.post<any>(url, data);
  }
}
